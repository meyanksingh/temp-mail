import { siteConfig } from "@/config/site";
import type { ApiResponse, EmailMessage } from "@/lib/types";

export async function generateTempEmail(): Promise<ApiResponse<string>> {
  try {
    const response = await fetch(`${siteConfig.apiBaseUrl}/tempmail`, {
      method: "GET",
    });

    if (!response.ok) {
      return {
        error: {
          message: `Failed to generate email: ${response.status}`,
          status: response.status,
        },
      };
    }

    const data = await response.json();
    return { data: data.email };
  } catch (error) {
    console.error("Error generating temporary email:", error);
    return {
      error: {
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
    };
  }
}

export async function getInboxData(
  email: string
): Promise<ApiResponse<EmailMessage[]>> {
  try {
    if (!email) {
      return {
        error: {
          message: "Email address is required",
          code: "MISSING_EMAIL",
        },
      };
    }

    const encodedEmail = encodeURIComponent(email).replace("%40", "@").toLowerCase();
    const response = await fetch(
      `${siteConfig.apiBaseUrl}/tempmail/${encodedEmail}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      return {
        error: {
          message: `Failed to fetch inbox: ${response.status}`,
          status: response.status,
        },
      };
    }

    const data = await response.json();

    
    const formattedMessages = data.messages.map((msg: any) => {
      
      // Handle different API response structures
      const messageId = msg.id || msg.ID || 0;
      const messageFrom = msg.from || msg.From || '';
      const messageTo = msg.to || msg.To || '';
      const messageSubject = msg.subject || msg.Subject || '(No Subject)';
      const messageBody = msg.body || msg.Body || '';
      const messageDate = msg.created_at || msg.CreatedAt || new Date().toISOString();
      
      const formattedMessage = {
        id: String(messageId || Date.now()),
        from: messageFrom ? messageFrom.replace(/\u003c/g, '<').replace(/\u003e/g, '>') : '',
        to: messageTo || '',
        subject: messageSubject || '(No Subject)',
        body: messageBody || '',
        received_at: messageDate || new Date().toISOString(),
      };
      
      return formattedMessage;
    });

    return { data: formattedMessages };
  } catch (error) {
    console.error("Error fetching inbox data:", error);
    return {
      error: {
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
    };
  }
}
