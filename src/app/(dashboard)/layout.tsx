import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import SideBar from "@/components/SideBar";


const layout = ( {children}: {children: React.ReactNode} ) => {
    return (
        <div className="drawer lg:drawer-open">
            <input type="checkbox" id="drawer-toggle" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="drawer-toggle" className="drawer-button lg:hidden fixed top-6 right-6">
                    <FaBarsStaggered className="w-8 h-8 text-primary"/>
                </label>
                <div className="bg-base-200 px-8 py-12 min-h-screen">
                    {children}
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="drawer-toggle" aria-label="Close Sidebar" className="drawer-overlay"/>
                <SideBar/>
            </div>
        </div>
    )
}

export default layout;