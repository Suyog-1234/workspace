import Image from 'next/image'
import { FC } from 'react'

interface AvatarProps {
    text?: string,
    image?: string,
    icon?: any
}

const Avatar: FC<AvatarProps> = ({ text, image, icon }) => {
    return (
        <div className='flex items-center gap-2'>
            <div className="">
                {
                    image ? (
                        <div className="w-9 h-9 rounded-full overflow-hidden">
                            <Image src={""} alt='' width={80} height={80} />
                        </div>
                    ) : icon ? (
                        <div className="flex items-center justify-center w-9 h-9 bg-yellow-200 rounded-full overflow-hidden text-dark-intensity-10 font-600 text-sm">
                            {icon}
                        </div>
                    ) : <div className="flex items-center justify-center w-9 h-9  bg-yellow-200 rounded-full overflow-hidden text-dark-intensity-10 font-600 text-sm">
                        SB
                    </div>
                }
            </div>
            <h4 className='text-xs text-white font-500'>{text}</h4>
        </div>
    )
}

export default Avatar