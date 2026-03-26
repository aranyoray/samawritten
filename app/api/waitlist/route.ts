import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, consent } = await request.json();

    // Check if variables are set
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.error("Missing Notion Environment Variables");
      return NextResponse.json(
        { error: "Waitlist is currently unavailable" },
        { status: 500 }
      );
    }

    const notion = new Client({ auth: process.env.NOTION_TOKEN });

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Consent: {
          checkbox: consent,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Notion Error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
