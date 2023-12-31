import { FC } from 'react'

interface ShiftDetailVisualUiProps {

}

const ShiftDetailVisualUi: FC<ShiftDetailVisualUiProps> = ({ }) => {
    return (
        <div className='w-full h-[10px] rounded-sm relative overflow-hidden flex items-center gap-0'>
            <span className='h-full bg-theme w-[calc(50%-4%)]'></span>
            <span className='w-[8%] bg-white/60 h-full'></span>
            <span className='h-full bg-theme w-[calc(50%-4%)]'></span>
        </div>
    )
}

export default ShiftDetailVisualUi