import { FC } from 'react'
import { Button } from '../ui/button'

interface ClockInCardProps {
    lable?:string
}

const ClockInCard: FC<ClockInCardProps> = ({ lable}) => {
    return (
        <div className="card-wrapper h-full">
            <label htmlFor="" className='block text-sm font-500 text-white mb-2'>{lable}</label>
            <div className='clock-in-card p-5 bg-dark-intensity-10 rounded-xs h-[calc(100%-28px)] grid grid-cols-2 gap-4'>
                <div className="timing-and-date flex-grow">
                    <div className="border border-white/30 py-2 px-4 inline-block mb-2">
                        <h4 className='text-white text-sm'> 07:27:15 <span>PM</span></h4>
                    </div>
                    <h6 className='text-xs text-gray-intensity-9'>Sat 30, Dec 2023</h6>
                </div>
                <div className="flex-shrink-0 w-full">
                     <Button className='mb-2'>
                         Web Clock In
                     </Button>
                </div>
            </div>
        </div>
    )
}

export default ClockInCard