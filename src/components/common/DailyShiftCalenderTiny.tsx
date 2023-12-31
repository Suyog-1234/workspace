import { dailyShift } from '@/staticData/staticData'
import { FC } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { ComponentCommon } from '../../../type'

interface DailyShiftCalenderTinyProps extends ComponentCommon{

}

const DailyShiftCalenderTiny: FC<DailyShiftCalenderTinyProps> = ({ className}) => {
    return (
        <div className={cn("",className)}>
            <ul className='flex items-center gap-2'>
                {
                    dailyShift.map(({ day, code, shiftEnd, shiftStart}) => (
                        <li>
                            <TooltipProvider>
                                <Tooltip delayDuration={0}>
                                    <TooltipTrigger asChild>
                                        <div className="w-7 h-7 cursor-default border border-gray-intensity-9/10 rounded-full bg-dark-intensity-9 flex items-center justify-center">
                                            <span className='!text-[10px] text-theme font-500 block'>{code}</span>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className='rounded-[4px] py-2 mb-2 relative before:absolute before:w-3 before:rotate-45 before:h-3 before:-bottom-1.5 before:start-1/2 before:-translate-x-1/2 before:bg-white before:z-10'>
                                        <h5 className='text-[10px] font-500'>25 Dec, 2023</h5>
                                        <h6 className='text-[10px] font-500'>Shift ({shiftStart} - {shiftEnd})</h6>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DailyShiftCalenderTiny