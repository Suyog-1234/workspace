import { FC } from 'react'
import { ComponentCommon } from '../../../type'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import Image from 'next/image'

interface HeaderProps extends ComponentCommon {

}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className='fixed top-0 start-[100px] end-0 py-4 px-4 min-h-[50px] flex items-center bg-dark-intensity-10 z-30'>
            <div className="header-content flex items-center justify-between gap-6 w-full">
                <div className="start-side flex items-center gap-4 flex-grow">
                    <div className="action-part flex items-center gap-lg">
                        <h3 className='text-white text-sm flex-shrink-0'>
                            ELaunch Solutions Private Limited
                        </h3>
                        <div className="w-[400px]">
                            <Input className='w-full text-xs' placeholder='Search For Employee' />
                        </div>
                    </div>
                </div>
                <div className="end-side">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild className='cursor-pointer'>
                             <div className="flex items-center gap-md">
                                   <h3 className='text-white text-sm'>Suyog Bora</h3>
                                   <div className="profile-img-wrapper w-8 h-8 rounded-full overflow-hidden">
                                      <Image src={"/assets/images/profile-img.jpeg"} alt='profile' width={800} height={1208} className='w-full h-full object-cover object-center'/>
                                   </div>
                             </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='end' className="w-48 rounded-sm mt-4">
                            <DropdownMenuCheckboxItem>
                               Profile
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                               Change Password
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                 Logout
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header