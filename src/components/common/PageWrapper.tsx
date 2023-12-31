import { FC } from 'react'
import { ComponentCommon } from '../../../type'

interface PageWrapperProps extends ComponentCommon {
}

const PageWrapper: FC<PageWrapperProps> = ({ children, className }) => {
    return (
        <div className='page-wrapper p-4'>
             {children}
        </div>
    )
}

export default PageWrapper