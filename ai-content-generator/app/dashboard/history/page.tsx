import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateList";
import { Copy } from "lucide-react";

export interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string | null,
    templateSlug:string,
    createdBy:string | null,
    createdAt:string | null,
}

async function History() {
    const user = await currentUser();

    let HistoryList:HISTORY[] = [];
    try{
        HistoryList = await db.select().from(AIOutput).where(eq(AIOutput?.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(AIOutput.id));
    } catch(error){
        console.error("Error fetching history", error);
    }

    const GetTemplate = (slug:string) => {
        const template:TEMPLATE|any = Template?.find((item) => item.slug === slug);
        return template;
    }

    return (
        <div className="m-5 p-5 border rounded-lg bg-white">
            <h2 className="font-bold text-3xl">
                History
            </h2>

            <p className="text-gray-500">
                Search your previous generated content
            </p>

            <div className="grid grid-cols-7 text-center justify-center font-bold bg-secondary mt-5 py-3 px-3">
                <h2 className="col-span-2">TEMPLATE</h2>
                <h2 className="col-span-2">AI RESPONSE</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>

            {HistoryList.length === 0 ? (
                <p>No history found.</p>
            ) : (
                HistoryList.map((item:HISTORY, index:number) => (
                    <>
                    <div className="grid grid-cols-7 my-5 gap-2 text-center justify-center items-center" key={index}>
                        <h2 className="col-span-2 flex gap-3 justify-center items-center">
                            <Image src={GetTemplate(item?.templateSlug).icon} alt="Logo" width={30} height={30} />
                            {GetTemplate(item?.templateSlug)?.name}
                        </h2>
                        <h2 className="col-span-2 line-clamp-3">{item?.aiResponse ?? 'No Response'}</h2>
                        <h2>{item?.createdAt || 'No Date'}</h2>
                        <h2>{item?.aiResponse?.length || 0}</h2>
                        <h2>
                            <Button variant='ghost' className="text-primary cursor-pointer"><Copy />Copy</Button>
                        </h2>
                    </div>
                    </>
                ))
            )}
            <hr/>
        </div>
    );
}

export default History;