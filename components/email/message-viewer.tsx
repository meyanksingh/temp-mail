"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Trash2, Mail } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { EmailMessage } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

interface MessageViewerProps {
  message: EmailMessage | null;
  onDelete?: (id: string) => void;
  className?: string;
}

export function MessageViewer({
  message,
  onDelete,
  className,
}: MessageViewerProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("preview");
  const [parsedEmail, setParsedEmail] = useState<any>(null);

  const handleCopyContent = () => {
    if (!message) return;
    const textContent = parsedEmail?.html?.replace(/<[^>]*>/g, '') || message.body;
    navigator.clipboard.writeText(textContent);
    toast({
      title: "Message copied",
      description: "Message content copied to clipboard",
      duration: 3000,
    });
  };

  const handleDelete = () => {
    if (!message || !onDelete) return;
    onDelete(message.id);
  };

  useEffect(() => {
    if (!message?.body) {
      setParsedEmail(null);
      return;
    }

    
    fetch("/api/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rawEmail: message.body,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to parse email: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // Only keep HTML content, discard all text content
        setParsedEmail({
          html: data.html || '',
          // Keep essential metadata
          date: data.date,
          attachments: data.attachments
        });
      })
      .catch((error) => {
        setParsedEmail(null);
      });
  }, [message]);

  const getDisplayContent = () => {
    if (!message) {
      return "(No Content)";
    }
    
    if (!parsedEmail) {
      return "<div class='text-center p-4'>Loading content...</div>";
    }
    
    if (parsedEmail.html && parsedEmail.html.trim()) {
      return parsedEmail.html;
    }
    
    return "<div class='text-center p-4'>No HTML content available</div>";
  };

  return (
    <Card className={`h-full border shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl">Message Content</CardTitle>
        <CardDescription>
          {message
            ? `Received ${formatDistanceToNow(
                new Date(message.received_at)
              )} ago`
            : "Select a message to view its content"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {message ? (
          <div className="animate-fade-in">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-4 w-full justify-start">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="raw">Raw</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3">
                    <div className="font-medium text-muted-foreground">
                      From:
                    </div>
                    <div className="font-medium">{message.from}</div>

                    <div className="font-medium text-muted-foreground">
                      Subject:
                    </div>
                    <div className="font-medium">{message.subject}</div>

                    <div className="font-medium text-muted-foreground">
                      Date:
                    </div>
                    <div>{new Date(message.received_at).toLocaleString()}</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div
                    className="whitespace-pre-wrap break-words prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: getDisplayContent(),
                    }}
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full focus-ring"
                    onClick={handleCopyContent}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Content
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="rounded-full focus-ring"
                    onClick={handleDelete}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="raw">
                <div className="bg-muted rounded-lg p-4 overflow-auto max-h-[500px] border">
                  <pre className="text-xs">
                    <code>{JSON.stringify(message, null, 2)}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center">
            <div className="bg-muted rounded-full p-4 mb-4 animate-pulse-slow">
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No message selected</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Select a message from your inbox to view its content here
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}