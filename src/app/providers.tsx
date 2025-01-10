'use client'

import {Toaster} from "react-hot-toast";
import React from "react";

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Toaster position="top-center" />
            {children}
        </>
    )
}

export default Providers;