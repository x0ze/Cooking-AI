import { NextResponse } from "next/server";
import { ollama } from "@/app/api/ollamaConnect";

export async function POST(req: any): Promise<any> {
    const { prompt }: { prompt: string } = await req.json();
    console.log('Received prompt:', prompt);

    const response = await ollama.generate({
        model: 'gemma:2b',
        prompt: prompt,
        stream: false
    });

    console.log('Generated response:', response);

    return NextResponse.json(response);
}

export function GET(): any {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
