import { NextRequest, NextResponse } from "next/server";
import { simpleParser, Attachment } from "mailparser";
//@ts-expect-error:error with quoted-printable
import { decode as decodeQP } from "quoted-printable";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.rawEmail) {
      return NextResponse.json(
        { error: "Raw email content is required" },
        { status: 400 }
      );
    }


    
    const parsedEmail = await parseEmailContent(body.rawEmail);
    
    return NextResponse.json({ ...parsedEmail });
  } catch (error) {
    console.error("Error parsing email:", error);
    return NextResponse.json(
      {
        error: "Failed to parse email",
        details: error instanceof Error ? error.message : "Unknown error",
        success: false,
      },
      { status: 500 }
    );
  }
}

export interface SemiParserEmail {
  subject: string;
  from: string;
  text: string;
  html: string;
  text_as_html: string;
  attachments: Attachment[];
  date: Date;
}

export async function parseEmailContent(
  rawData: string
): Promise<SemiParserEmail> {
  try {
    
    // Try to parse with simpleParser first
    const parsed = await simpleParser(rawData);
    
    // If we have HTML content, use it directly
    if (parsed.html) {
      return {
        subject: parsed.subject || "",
        from: parsed.from?.text || "",
        text: parsed.text || "",
        html: parsed.html,
        text_as_html: parsed.textAsHtml || parsed.text || "",
        attachments: parsed.attachments || [],
        date: parsed.date || new Date(),
      };
    }

    // If no HTML but we have text, convert it to HTML
    if (parsed.text) {
      const htmlContent = parsed.text
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .join('<br>');

      return {
        subject: parsed.subject || "",
        from: parsed.from?.text || "",
        text: parsed.text,
        html: htmlContent,
        text_as_html: htmlContent,
        attachments: parsed.attachments || [],
        date: parsed.date || new Date(),
      };
    }

    // Fallback: try to extract content from raw email
    const textMatch = rawData.match(/Content-Type: text\/plain;[\s\S]*?\r\n\r\n([\s\S]*?)(?:\r\n--|\s*$)/i);
    const htmlMatch = rawData.match(/Content-Type: text\/html;[\s\S]*?\r\n\r\n([\s\S]*?)(?:\r\n--|\s*$)/i);


    const text = textMatch ? textMatch[1].trim() : rawData;
    const html = htmlMatch ? htmlMatch[1].trim() : text.split('\n').join('<br>');

    const result = {
      subject: parsed.subject || "",
      from: parsed.from?.text || "",
      text: text,
      html: html,
      text_as_html: html,
      attachments: parsed.attachments || [],
      date: parsed.date || new Date(),
    };
    
 
    
    return result;
  } catch (error) {
    console.error("Error in parseEmailContent:", error);
    throw error;
  }
}
