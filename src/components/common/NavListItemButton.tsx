"use client";

import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import { ComponentCommon } from '../../../type';

interface NavListItemButtonProps extends ComponentCommon{
    isSingleNav: boolean,
    navlink: string,
    navhref: string,
    icon: any,
}

const NavListItemButton: FC<NavListItemButtonProps> = ({ isSingleNav, navlink, navhref, icon,className }) => {
    const [navActive, setnavActive] = useState<boolean | null>(null)
    const pathname = usePathname();
    useEffect(() => {
        if (pathname === navhref) {
            setnavActive(true)
        } else {
            setnavActive(false)
        }
    }, [pathname])

    return (
        <Link href={navhref} className={cn(`relative w-full h-[72px] ${navActive ? "bg-theme text-white active" : "text-gray-intensity-9"} hover:bg-theme transition-all duration-150 hover:text-white flex items-center group justify-center gap-2 flex-col text-xs font-500 capitalize`,className)}>
            <span>{icon}</span>
            <span>{navlink}</span>
        </Link>
    )
}

export default NavListItemButton