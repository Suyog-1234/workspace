import { FC } from 'react'
import { ComponentCommon } from '../../../type'
import NavList from '../common/NavList'
import NavlistItem from '../common/NavlistItem'
import { Navigation } from '@/staticData/staticData'

interface SidebarProps extends ComponentCommon {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
    return (
        <aside className='fixed top-0 start-0 h-screen bg-dark-intensity-10 w-[100px]'>
            <div className="logo-part min-h-[70px]">
                 
            </div>
            <div className="sidebar-navigation-wrapper">
                <NavList>
                    {
                        Navigation.map((navItemContent,index) => (
                            <NavlistItem navItemContent={navItemContent} key={index}/>
                        ))
                    }
                </NavList>
            </div>
        </aside>
    )
}

export default Sidebar