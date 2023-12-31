import { FC } from 'react'
import { ComponentCommon } from '../../../type'

const IconMe: FC<ComponentCommon> = (props) => {
    return (
        <svg  {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
}

export default IconMe