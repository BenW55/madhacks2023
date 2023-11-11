import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request)
{


    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    const params = await request.json();

    const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                role: "system",
                content: "You are reviewing a resume"
            },
            {
                role:"user",
                content: params.prompt
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p:1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }) 
    return NextResponse.json(response);
}