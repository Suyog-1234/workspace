import { FC } from 'react'
import Avatar from './Avatar'
import DailyShiftCalenderTiny from './DailyShiftCalenderTiny'
import ShiftDetailVisualUi from './ShiftDetailVisualUi'

interface ShiftInfoCardProps {
    lable?: string
}

const ShiftInfoCard: FC<ShiftInfoCardProps> = ({ lable }) => {
    return (
        <div className="card-wrapper h-full">
            <label htmlFor="" className='block text-sm font-500 text-white mb-2 '>{lable}</label>
            <div className='shift-info-card p-5 bg-dark-intensity-10 rounded-xs h-[calc(100%-28px)] flex items-start flex-col'>
                <DailyShiftCalenderTiny className='flex-grow'/>
                <div className="w-full flex-shrink-0">
                    <h6 className='text-white font-400 text-[10px] mb-2'>Today (9:00 AM - 6:00 PM)</h6>
                    <ShiftDetailVisualUi />
                    <div className="flex items-center gap-4 justify-between mt-2">
                         <span className='block text-gray-intensity-9 capitalize font-500 text-[10px]'>Duration: 9h 0m</span>
                         <span className='block text-gray-intensity-9 capitalize font-500 text-[10px]'>Break: 45 Min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShiftInfoCard