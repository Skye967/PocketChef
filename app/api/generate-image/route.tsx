// pages/api/generateImage.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Context } from 'vm';

export const config = {
    api: {
        bodyParser: false,
    },
};


const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY })

type Data = {
    success: boolean;
    message?: string;
    data?: any;
};
console.log('here')
export async function POST(
    req: NextRequest,
    res: NextResponse<Data>
) {

    if (req.method !== 'POST') {
        return NextResponse.json({ success: false, message: 'Method Not Allowed' });
    }
    // if (!prompt) {
    //     return res.status(400).json({ success: false, message: 'Prompt is required' });
    // }

    try {

        const body = await req.json();

        console.log('posting')

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: body.prompt + ' dish',
            n: 1,
            size: "1024x1024",
        });
        const image_url = response.data[0].url;
        return NextResponse.json(image_url)
    } catch (error: any) {
        console.error(NextResponse.json(error))
        return new NextResponse(error)
    }
}
