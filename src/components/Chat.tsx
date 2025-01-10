'use client'

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { generateChatResponse, Message } from "@/utils/action";
import toast from "react-hot-toast";
import MessageItem from "@/components/MessageItem";

const Chat = () => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([] as Message[]);

    const { mutate, isPending } = useMutation({
        mutationFn: (query: Message) => {
            setMessages((prevState) => [...prevState, query]);
            return generateChatResponse([...messages, query]);
        },
        onSuccess: (data) => {
            if(!data) {
                toast.error('Failed to generate chat response');
                return;
            }
            setMessages((prevState) => [...prevState, data]);
        }
    });

    const handleSubmit = (formEvent: React.FormEvent<HTMLFormElement>) => {
        formEvent.preventDefault();
        const query: Message = {
            role: 'user',
            content: text,
        }
        mutate(query);
        setText('');
    }
    console.log("messages: ", messages);
    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
            <div>
                { messages.map((message, index) => {
                    return (
                        <MessageItem key={index} message={message}/>
                    )
                })}
            </div>
            { isPending ? <span className="loading"/> : null }
            <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
                <div className="join w-full">
                    <input
                        className="input input-bordered join-item w-full text-base-content"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        placeholder="Type a message..."
                    />
                    <button disabled={isPending} type="submit" className="btn btn-primary join-item">
                        { isPending ? 'Loading...' : 'Send' }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Chat;