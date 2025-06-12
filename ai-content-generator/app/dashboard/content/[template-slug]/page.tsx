"use client"
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { response } from "@/utils/AIModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from 'moment';
import { TotalUsageContext } from "@/app/(context)/UsageContext";
import { useRouter } from "next/compat/router";
import { UsageUpdateContext } from "@/app/(context)/UsageUpdateContext";

interface PROPS{
    params: {
        'template-slug': string
    }
}

function CreateContent(props: PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Template?.find((item) => item.slug === props.params["template-slug"]);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>("");
    const {user} = useUser();
    const router = useRouter();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {creditUpdate, setCreditUpdate} = useContext(UsageUpdateContext);

    /**
     * @params formData
     * @returns
     */

    const GenerateContent = async (formData:any) => {
        if(totalUsage >= 10000){
            alert("Credit limit reached. Please upgrade");
            router.push('/dashboard');
            return;
        }

        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

        const res = await response.sendMessage({message: finalPrompt});

        setAiOutput(res?.text);
        await saveInDb(formData, selectedTemplate?.slug, res?.text);
        setLoading(false);

        setCreditUpdate(Date.now());
    }

    const saveInDb = async (formData:any, slug:any, aiResponse:string) => {
        const res = await db.insert(AIOutput).values({
            formData: formData,
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/YYYY'),
        })
    }

    return (
        <div className="p-10">
            <Link href={'/dashboard'}>
                <Button className="cursor-pointer"><ArrowLeft /> Back</Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateContent(v)} loading={loading} />

                <div className="col-span-2">
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    )
}

export default CreateContent;