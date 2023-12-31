import AttendanceComplexTable from '@/components/common/AttendanceComplexTable'
import { FC } from 'react'

interface AttendanceLogsProps {

}

const AttendanceLogs: FC<AttendanceLogsProps> = ({ }) => {
    return (
        <section className='attendance-log-section'>
            <div className="section-title mb-3">
               <h4 className='text-sm text-white font-500'>Logs And Requests</h4>
            </div> 
            <div className="section-content">
                 <AttendanceComplexTable/>
            </div>
        </section>
    )
}

export default AttendanceLogs