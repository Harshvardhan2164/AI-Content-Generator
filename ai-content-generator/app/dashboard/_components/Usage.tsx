"use client"
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import React, { useContext, useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { HISTORY } from "../history/page";
import { TotalUsageContext } from "@/app/(context)/UsageContext";
import { UsageUpdateContext } from "@/app/(context)/UsageUpdateContext";

function Usage() {
    const {user} = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {creditUpdate, setCreditUpdate} = useContext(UsageUpdateContext);
    
    useEffect(() => {
        user && GetData();
    }, [user]);

    useEffect(() => {
        user && GetData();
    }, [creditUpdate]);
    
    const GetData = async () => {
        {/* @ts-ignore */}
        const res:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        GetTotalUsage(res);
    }
    const GetTotalUsage = (res:HISTORY[]) => {
        let total = 0;
        res.forEach(element => {
            total = total + Number(element.aiResponse?.length)
        });

        setTotalUsage(total);
    };

    return (
        <div className="m-5">
            <div className="bg-blue-600 text-white rounded-lg p-3">
                <h2>Credits</h2>
                <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" style={{ width: (totalUsage/10000)*100 }}></div>
                </div>

                <h2 className="text-sm my-2">{totalUsage}/10,000 credit used</h2>

                <Button variant={'secondary'} className="w-full my-3 cursor-pointer">Upgrade</Button>
            </div>
        </div>
    )
}

export default Usage;