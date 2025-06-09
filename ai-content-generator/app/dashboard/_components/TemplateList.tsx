import React, { useEffect, useState } from "react";
import Template from "@/app/(data)/Template";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean
}

function TemplateList({searchInput}:any) {
    const [templateList, setTemplateList] = useState(Template);

    useEffect(() => {
        if(searchInput){
            const filterList = Template.filter(item => item.name.toLowerCase().includes(searchInput.toLowerCase()));
            setTemplateList(filterList);
        }
        else{
            setTemplateList(Template);
        }
    }, [searchInput]);

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
            {templateList.map((item:TEMPLATE, index:number) => (
                <TemplateCard {...item} />
            ))}
        </div>
    )
}

export default TemplateList;