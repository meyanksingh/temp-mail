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
    const parsed = await simpleParser(rawData);

    let a = {
      subject: parsed.subject || "",
      from: parsed.from?.text || "",
      text: parsed.text || "",
      html: parsed.html || decodeQP(rawData),
      text_as_html: parsed.textAsHtml || "",
      attachments: parsed.attachments || [],
      date: parsed.date || new Date(),
    };
    return a;
  } catch (error) {
    console.error("Error parsing email:", error);
    throw error;
  }
}
