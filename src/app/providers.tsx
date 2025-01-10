'use client'

import {Toaster} from "react-hot-toast";
import React, {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers = ({children}: {children: React.ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
           queries: { staleTime: 1000 * 60}, // 1 minute stale time,
        }
    }))
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" />
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}

export default Providers;