"use client"
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import { TotalUsageContext } from "../(context)/UsageContext";
import { UsageUpdateContext } from "../(context)/UsageUpdateContext";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [totalUsage, setTotalUsage] = useState<Number>(0);
    const [creditUpdate, setCreditUpdate] = useState<any>();

    return (
        <TotalUsageContext.Provider value={{totalUsage, setTotalUsage}}>
            <UsageUpdateContext.Provider value={{creditUpdate, setCreditUpdate}}>
                <div className="bg-slate-100 h-screen">
                    <div className="md:w-64 hidden md:block fixed">
                        <SideNav />
                    </div>

                    <div className="md:ml-64">
                        <Header />
                        {children}
                    </div>
                </div>
            </UsageUpdateContext.Provider>
        </TotalUsageContext.Provider>
    )
}

export default layout;