"use client"
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Template from "@/app/(data)/Template";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS{
    params: {
        'template-slug': string
    }
}

function CreateContent(props: PROPS) {
    const selectedTemplate:TEMPLATE|undefined=Template?.find((item) => item.slug === props.params["template-slug"]);
    const GenerateContent = (formData:any) => {

    }
    return (
        <div className="p-10">
            <Link href={'/dashboard'}>
                <Button className="cursor-pointer"><ArrowLeft /> Back</Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateContent(v)} />

                <div className="col-span-2">
                    <OutputSection />
                </div>
            </div>
        </div>
    )
}

export default CreateContent;