"use client"
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateList from "./_components/TemplateList";

function Dashboard() {
    const [searchInput, setSearchInput] = useState<string>();

    return (
        <div>
            <SearchSection onSearchInput={(value:string) => setSearchInput(value)} />

            <TemplateList searchInput={searchInput} />
        </div>
    )
}

export default Dashboard;