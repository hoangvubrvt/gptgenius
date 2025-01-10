'use server'

import {convertMarkdownTextToHtml} from "@/utils/markdown-converter";

export type Message = {
    role: 'user' | 'assistant' | 'system';
    content: string;
    htmlContent?: string;
}

class GPTError extends Error {
    code: number;
    type: string;
    constructor( { error }: GPTErrorResponse) {
        super(error.message);
        this.name = 'GPTError';
        this.code = error.code;
        this.type = error.type;
    }
}

type GPTErrorResponse = {
    error: {
        message: string;
        type: string;
        code: number;
    }
}

type GPTChoice = {
    index: number;
    finish_reason: string;
    message: Message;
    delta: Message;
}

type GPTResponse = {
    id: string;
    model: string;
    created: number;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        tokens_generated: number;
        total_tokens: number;
    };
    citations: string[];
    object: string;
    choices: GPTChoice[];
}

const promptPerplexityAI = async (messages: Message[]): Promise<GPTResponse> => {
    const messageBody = {
        messages: messages.map((message) => ({
            role: message.role,
            content: message.content
        })),
        model: 'llama-3.1-sonar-small-128k-online',
        temperature: 0
    }
    const options = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.PERPLEXITY_API_TOKEN}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageBody)
    };

    return fetch('https://api.perplexity.ai/chat/completions', options)
        .then(async (response) => {
            if (response.ok) return await response.json() as GPTResponse;
            const errorResponse = await response.json();
            throw new GPTError(errorResponse);
        });
}


function replaceCitations(textData: { content: string; citations: string[] }): string {
    let updatedContent = textData.content;

    textData.citations.forEach((citation, index) => {
        const citationMarker = `[${index + 1}]`;
        const citationLink = `[[${index + 1}]](${citation})<!--rehype:target=_blank-->`;

        updatedContent = updatedContent.replaceAll(citationMarker, citationLink);
    });

    return updatedContent;
}


export const generateChatResponse = async (chatMessages: Message[]):Promise<Message | null> => {
    try {
        const messages: Message[] = [
            {
                role:'system',
                content: 'You are an helpful AI assistant.'
            },
            ...chatMessages
        ]
        const aiResponse = await promptPerplexityAI(messages);
        console.log(JSON.stringify(aiResponse));
        const responseMessage = aiResponse.choices[0].message;

        const contentWithCitations = replaceCitations({
            content: responseMessage.content,
            citations: aiResponse.citations
        });

        aiResponse.choices[0].message.htmlContent = await convertMarkdownTextToHtml(contentWithCitations);
        return aiResponse.choices[0].message;
    } catch (er) {
        console.error('Error generating chat response:', er);
        return null;
    }

}