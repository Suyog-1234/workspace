import { FC } from 'react'
import Avatar from './Avatar'

interface AttendanceStatusCardProps {
    lable?:string
}

const AttendanceStatusCard: FC<AttendanceStatusCardProps> = ({lable}) => {
    return (
        <div className="card-wrapper h-full">
            <label htmlFor="" className='block text-sm font-500 text-white mb-2'>{lable}</label>
            <div className='attendance-status-card p-5 bg-dark-intensity-10 rounded-xs h-[calc(100%-28px)]'>
                <ul>
                    <li className='py-4 first-letter:pt-0 last:pb-0 border-b border-dark-intensity-9 last:border-b-0 first:pt-0'>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="avatar-wrapper">
                                <Avatar text='Me' />
                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-start gap-1 flex-col">
                                        <span className='text-[10px] text-gray-intensity-9 font-500 uppercase'>AVG HRS / DAY</span>
                                        <h6 className='text-white text-base font-500'>8h 3m</h6>
                                    </div>
                                    <div className="flex items-start gap-1 flex-col">
                                        <span className='text-[10px] text-gray-intensity-9 font-500 uppercase'>ON TIME ARRIVAL</span>
                                        <h6 className='text-white text-base font-500'>20%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='py-4 first-letter:pt-0 last:pb-0 border-b border-dark-intensity-9 last:border-b-0 first:pt-0'>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="avatar-wrapper">
                                <Avatar text='My Team' />
                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-start gap-1 flex-col">
                                        <span className='text-[10px] text-gray-intensity-9 font-500 uppercase'>AVG HRS / DAY</span>
                                        <h6 className='text-white text-base font-500'>8h 3m</h6>
                                    </div>
                                    <div className="flex items-start gap-1 flex-col">
                                        <span className='text-[10px] text-gray-intensity-9 font-500 uppercase'>ON TIME ARRIVAL</span>
                                        <h6 className='text-white text-base font-500'>20%</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AttendanceStatusCard