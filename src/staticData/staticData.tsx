import IconFinace from "@/components/svgs/IconFinace";
import IconHome from "@/components/svgs/IconHome";
import IconInbox from "@/components/svgs/IconInbox";
import IconMe from "@/components/svgs/IconMe";
import IconTeam from "@/components/svgs/IconTeam";

export const Navigation = [
    {icon:<IconHome className="text-gray-intensity-9 w-4 h4 group-hover:text-white group-[.active]:text-white transition-all duration-150 group-hover/submenu:text-white"/>,navlink:"Home",navhref:"/",hasChilds:false,},
    {icon:<IconMe className="text-gray-intensity-9 w-4 h4 group-hover:text-white group-[.active]:text-white transition-all duration-150 group-hover/submenu:text-white"/>,navlink:"Me",navhref:"/attendance",hasChilds:true,subChildsData:[{navlink:"Leave",navhref:"/",hasChilds:false},{navlink:"Attendance",navhref:"/attendance",hasChilds:false},{navlink:"Performance",navhref:"/",hasChilds:false},{navlink:"Expenses",navhref:"/",hasChilds:false},{navlink:"App",navhref:"/",hasChilds:false},]},
    {icon:<IconInbox className="text-gray-intensity-9 w-4 h4 group-hover:text-white group-[.active]:text-white transition-all duration-150 group-hover/submenu:text-white"/>,navlink:"Inbox",navhref:"/inbox",hasChilds:false},
    {icon:<IconTeam className="text-gray-intensity-9 w-4 h4 group-hover:text-white group-[.active]:text-white transition-all duration-150 group-hover/submenu:text-white"/>,navlink:"Team",navhref:"/team",hasChilds:false},
    {icon:<IconFinace className="text-gray-intensity-9 w-4 h4 group-hover:text-white group-[.active]:text-white transition-all duration-150 group-hover/submenu:text-white"/>,navlink:"Finance",navhref:"/finance",hasChilds:true,subChildsData:[{navlink:"Summary",navhref:"/",hasChilds:true},{navlink:"Mypay",navhref:"/",hasChilds:true,SuperSubChildsData:[{navlink:"My Salary",navhref:"/"},{navlink:"Pay Slip",navhref:"/"},{navlink:"Income Tax",navhref:"/"}]},{navlink:"Income Tax",navhref:"/",hasChilds:true,SuperSubChildsData:[{navlink:"Declaration",navhref:"/declaration"},{navlink:"Previous Income",navhref:"/"},{navlink:"Form12BB",navhref:"/"}]},]},
]

export const dailyShift = [
     {day:"Monday",code:"M",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Tuesday",code:"T",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Wednesday",code:"W",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Thursday",code:"T",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Friday",code:"F",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Saturday",code:"S",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"},
     {day:"Sunday",code:"S",shiftStart:"9.00 AM",shiftEnd:"6.00 PM"}
]