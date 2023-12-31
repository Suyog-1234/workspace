"use client";

import { FC } from 'react'

interface TimeHoursDropProps {
  
}

const TimeHoursDrop: FC<TimeHoursDropProps> = ({}) => {
  const effectiveMins = 9 * 60 ;
  const yourMins = 2 * 60;
  const percent =  (yourMins / effectiveMins ) * 100;
  
  return (
      <div className="w-5 h-5 rounded-full border border-white/30 overflow-hidden relative">
            <span className='absolute bottom-0 start-0 w-full  bg-theme' style={{height:`${percent}%`}}>
            </span>
      </div>
  )
}

export default TimeHoursDrop
