import { FC, Fragment } from 'react'
import AttendanceActionSection from './(page-components)/AttendanceActionSection'
import AttendanceLogs from './(page-components)/AttendanceLogs'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
    return (
        <Fragment>
             <AttendanceActionSection/>
             <AttendanceLogs/>
        </Fragment>
    )
}

export default page