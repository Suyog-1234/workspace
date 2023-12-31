import { cn } from '@/lib/utils'
import { FC } from 'react'
import NavListItemButton from './NavListItemButton'
import { ComponentCommon, NavListItem } from '../../../type';
import Link from 'next/link';
import { Button } from '../ui/button';
import IconArrowRight from '../svgs/IconArrowRight';

interface NavListItemProps extends ComponentCommon {
    navItemContent: NavListItem;
}

const NavlistItem: FC<NavListItemProps> = ({ className, navItemContent }) => {
    const { icon, navlink, navhref, hasChilds, subChildsData } = navItemContent;

    return (
        <li className={cn("block w-full group/submenu relative", className)}>
            <NavListItemButton className='group-hover/submenu:bg-theme group-hover/submenu:text-white' isSingleNav={hasChilds} icon={icon} navhref={navhref} navlink={navlink} />
            {
                (hasChilds && subChildsData) ? (
                    <div className="sub-childs-list absolute w-[160px] p-3 left-[100px] top-0 bottom-[unset] bg-dark-intensity-10 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible z-30">
                        <ul>
                            {
                                subChildsData?.map(({ navlink, navhref, hasChilds, SuperSubChildsData },index) => (
                                    <li className='group/supersubmenu relative' key={index}>
                                        {
                                            (hasChilds && SuperSubChildsData?.length) ? (
                                                <>
                                                    <Button variant={"link"} className='text-xs w-full flex items-center gap-2 justify-between text-start !no-underline font-500 text-gray-intensity-9 p-2 group-hover/supersubmenu:text-white group-hover/supersubmenu:ms-1 transition-all duration-300'>
                                                        {navlink}
                                                        <span><IconArrowRight className='text-gray-intensity-9 group-hover/supersubmenu:text-white transition-all duration-300 w-4 h-4'/></span>
                                                    </Button>
                                                    <div className="sub-childs-list z-30 absolute w-[160px] p-3 left-[136px] top-0 bottom-[unset] bg-dark-intensity-10 opacity-0 invisible group-hover/supersubmenu:opacity-100 group-hover/supersubmenu:visible">
                                                        <ul>
                                                            {
                                                                SuperSubChildsData?.map(({ navlink, navhref },index) => (
                                                                    <li key={index}>
                                                                        <Link href={navhref} className='text-xs font-500 text-gray-intensity-9 p-2 block w-full hover:text-white hover:ms-1 transition-all duration-300 !text-start'>
                                                                            {navlink}
                                                                        </Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </>
                                            ) : (
                                                <Link href={navhref} className='text-xs font-500 text-gray-intensity-9 p-2 block w-full hover:text-white hover:ms-1 transition-all duration-300 !text-start'>
                                                    {navlink}
                                                </Link>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : null
            }
        </li>
    )
}

export default NavlistItem