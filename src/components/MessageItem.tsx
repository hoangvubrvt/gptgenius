'use client'

import { Message as TextMessage } from '@/utils/action'
import HtmlContent from "@/components/HTMLContent";


const MessageItem = ({message}: { message: TextMessage, key: number | undefined }) => {
    const backgroundColor = message.role === 'user' ? 'bg-base-200' : 'bg-base-100';
    const avatar = message.role === 'user' ? '🙂' : '🤖';
    const content = message.htmlContent || message.content;
    return (
        <div className={`${backgroundColor} text-base-content flex py-6 mx-8 px-8 text-xl leading-loose border-b border-base-300`}>
            <span className="mr-4">{avatar}</span>
            <HtmlContent className="max-w-3xl" content={content}/>
        </div>
    )
}

export default MessageItem;