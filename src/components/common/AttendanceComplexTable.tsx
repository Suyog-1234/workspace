import { FC } from 'react'
import CustomeMonthFilteringRadio from './CustomeMonthFilteringRadio'
import { Table, TableBody, TableCaption, TableCell,  TableHead, TableHeader, TableRow } from '../ui/table'
import TimeHoursDrop from './TimeHoursDrop'

interface AttendanceComplexTableProps {

}

const invoices = [
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
    {
      date: "Dec 30, Sat",
      visuals: "Paid",
      effectiveHours: "9h 35m",
      grossHours: "9h 35m",
      arrival: "0:06:44 late",
      log: "Credit Card",
    },
  ]


const AttendanceComplexTable: FC<AttendanceComplexTableProps> = ({ }) => {
    return (
        <div className='attendance-table-wrapper'>
            <div className="logs-filtering-options flex items-center justify-between p-3 bg-dark-intensity-10">
                <h4 className='text-white font-500 text-sm'>Last 30 days</h4>
                <div className="">
                    <CustomeMonthFilteringRadio/>
                </div>
            </div>
            <div className="table-wrapper">
                <Table>
                    <TableHeader>
                        <TableRow className='bg-theme hover:bg-theme !border-b-0'>
                            <TableHead className="w-[200px]">DATE</TableHead>
                            <TableHead>ATTENDANCE VISUAL</TableHead>
                            <TableHead>EFFECTIVE HOURS</TableHead>
                            <TableHead>GROSS HOURS</TableHead>
                            <TableHead>ARRIVAL</TableHead>
                            <TableHead>LOG</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.date}>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.visuals}</TableCell>
                                <TableCell>
                                     <div className="flex items-center gap-3">
                                        <TimeHoursDrop/>
                                     {invoice.effectiveHours}
                                     </div>
                                </TableCell>
                                <TableCell>{invoice.grossHours}</TableCell>
                                <TableCell >{invoice.arrival}</TableCell>
                                <TableCell>{invoice.log}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AttendanceComplexTable