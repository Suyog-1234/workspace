import AttendanceStatusCard from '@/components/common/AttendanceStatusCard'
import ClockInCard from '@/components/common/ClockInCard'
import ShiftInfoCard from '@/components/common/ShiftInfoCard'
import { FC } from 'react'

interface AttendanceActionSectionProps {

}

const AttendanceActionSection: FC<AttendanceActionSectionProps> = ({ }) => {
    return (
        <section className='attendance-action-section py-8 pt-0'>
            <div className="section-content">
                  <div className="grid grid-cols-3 gap-6">
                        <AttendanceStatusCard lable='Attendance stutus'/>
                        <ShiftInfoCard lable='Shift Info'/>
                        <ClockInCard lable="Actions"/>
                  </div>
            </div>
        </section>
    )
}

export default AttendanceActionSection