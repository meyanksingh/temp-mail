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
    console.log("data", data);
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
    console.log(encodedEmail)
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
    console.log("data", data.messages);

    const formattedMessages = data.messages.map((msg: any) => {
      // Extract the body content (plain text) using regex
      const plainTextMatch = msg.Body.match(
        /Content-Type: text\/plain; charset="UTF-8"\r\n\r\n([\s\S]*?)\r\n--/
      );
      const bodyContent = plainTextMatch ? plainTextMatch[1].trim() : ""; // Extracted plain text content

      return {
        id: msg.ID.toString(),
        from: msg.From,
        to: msg.To,
        subject: msg.Subject,
        body: bodyContent, // Only include extracted plain text
        received_at: new Date().toISOString(),
      };
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
