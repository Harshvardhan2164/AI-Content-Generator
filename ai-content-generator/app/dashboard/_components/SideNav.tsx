"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { Home, FileClock, WalletCards, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard"
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history"
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: "/dashboard/billing"
        },
        {
            name: "Settings",
            icon: Settings,
            path: "/dashboard/settings"
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className="h-screen p-5 shadow-sm border bg-white">
            <div className="flex justify-center">
                <Image src={'/logoipsum-custom-logo.svg'} alt="Logo" width={120} height={100} />
            </div>

            <hr className="my-6 border" />

            <div className="mt-10">
                {MenuList.map((menu, index) => (
                    <div className={`flex gap-2 mb-2 p-3 items-center
                    hover:bg-primary hover:text-white rounded-lg cursor-pointer
                    ${path == menu.path && 'bg-primary text-white'}
                    `}
                    >
                        <menu.icon className="h-6 w-6" />
                        <h2 className="text-lg">{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav;