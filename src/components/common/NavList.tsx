import { FC } from 'react'
import { ComponentCommon } from '../../../type'
import { cn } from '@/lib/utils'

interface NavListProps extends ComponentCommon {

}

const NavList: FC<NavListProps> = ({ children,className }) => {
    return (
        <ul className={cn("flex items-center flex-col",className)}>
            {children}
        </ul>
    )
}

export default NavList