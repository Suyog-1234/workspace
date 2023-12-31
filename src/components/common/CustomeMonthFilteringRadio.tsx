"use client";

import { FC, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

interface CustomeFilteringRadioProps {

}

const CustomeMonthFilteringRadio: FC<CustomeFilteringRadioProps> = ({ }) => {
    const [month,setMonth] = useState("paypal");
    return (
        <div className=''>
            <RadioGroup defaultValue="30day" className='flex items-center gap-4' onValueChange={setMonth}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30day" id="30day"/>
                    <Label htmlFor="30day" className='cursor-pointer text-white text-[10px] font-500'>30 Days</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nov" id="nov"/>
                    <Label htmlFor="nov"  className='cursor-pointer text-white text-[10px] font-500'>NOV</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oct" id="oct"/>
                    <Label htmlFor="oct"  className='cursor-pointer text-white text-[10px] font-500'>OCT</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sep" id="sep"/>
                    <Label htmlFor="sep"  className='cursor-pointer text-white text-[10px] font-500'>SEP</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="aug" id="aug"/>
                    <Label htmlFor="aug"  className='cursor-pointer text-white text-[10px] font-500'>AUG</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="jul" id="jul"/>
                    <Label htmlFor="jul" className='cursor-pointer text-white text-[10px] font-500'>JUL</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default CustomeMonthFilteringRadio