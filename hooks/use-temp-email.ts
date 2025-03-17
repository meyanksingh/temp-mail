"use client";

import { useState, useEffect, useCallback } from "react";
import { generateTempEmail, getInboxData } from "@/lib/api-service";
import type { EmailMessage } from "@/lib/types";
import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/use-toast";

const EMAIL_STORAGE_KEY = "tempmail-email";
const EMAIL_TIMESTAMP_KEY = "tempmail-timestamp";
const EMAIL_EXPIRY_TIME = 3 * 60 * 1000;

export function useTempEmail() {
  const [email, setEmail] = useState<string>("");
  const [messages, setMessages] = useState<EmailMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  // Function to fetch inbox data
  const fetchInbox = useCallback(async () => {
    if (!email) return;

    try {
      setRefreshing(true);
      const result = await getInboxData(email);

      if (result.error) {
        setError(result.error.message);
        toast({
          title: "Error",
          description: result.error.message,
          variant: "destructive",
        });
      } else if (result.data) {
        setMessages(result.data);
        setLastRefreshed(new Date());
        setError(null);
      }
    } catch (err) {
      setError("Failed to fetch inbox data. Please try again.");
      toast({
        title: "Error",
        description: "Failed to fetch inbox data",
        variant: "destructive",
      });
    } finally {
      setRefreshing(false);
    }
  }, [email, toast]);

  // Generate a new email address
  const generateNewEmail = async () => {
    try {
      setLoading(true);
      const result = await generateTempEmail();

      if (result.error) {
        setError(result.error.message);
        toast({
          title: "Error",
          description: result.error.message,
          variant: "destructive",
        });
      } else if (result.data) {
        const newEmail = result.data;
        const timestamp = Date.now();

        setEmail(newEmail);
        localStorage.setItem(EMAIL_STORAGE_KEY, newEmail);
        localStorage.setItem(EMAIL_TIMESTAMP_KEY, timestamp.toString());

        setMessages([]);

        toast({
          title: "New email generated",
          description: "Your temporary email has been updated",
          duration: 3000,
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to generate new email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Initialize email on first load
  useEffect(() => {
    async function initializeEmail() {
      try {
        setLoading(true);

        const savedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
        const savedTimestamp = localStorage.getItem(EMAIL_TIMESTAMP_KEY);

        if (savedEmail && savedTimestamp) {
          const timestamp = parseInt(savedTimestamp, 10);
          const currentTime = Date.now();

          if (currentTime - timestamp < EMAIL_EXPIRY_TIME) {
            setEmail(savedEmail);
          } else {
          }
        } else {
          // No saved email, generate a new one
          await generateNewEmail();
        }
      } catch (err) {
        setError("Failed to initialize email. Please refresh the page.");
        toast({
          title: "Error",
          description: "Failed to initialize email.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    initializeEmail();
  }, [toast]);

  // Fetch inbox data when email changes or on initial load
  useEffect(() => {
    if (email) {
      fetchInbox();
    }
  }, [email, fetchInbox]);

  // Auto-refresh inbox every 30 seconds
  useEffect(() => {
    if (!email) return;

    const interval = setInterval(() => {
      fetchInbox();
    }, siteConfig.refreshInterval);

    return () => clearInterval(interval);
  }, [email, fetchInbox]);

  return {
    email,
    messages,
    loading,
    refreshing,
    lastRefreshed,
    error,
    fetchInbox,
    generateNewEmail,
  };
}
