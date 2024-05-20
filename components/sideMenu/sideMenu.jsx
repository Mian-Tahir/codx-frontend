import React from "react";
import {
  MdDashboard, MdReport, MdEvent, MdGroup, MdNotifications,
  MdFlightLand, MdPeople, MdSchedule, MdSettings, MdMoreHoriz,
  MdHelpOutline, MdExitToApp
} from 'react-icons/md';
import { IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5';
import { BsBarChartLine, BsAirplane } from "react-icons/bs";
import Image from 'next/image';

const SideMenu = () => {
  return (
    <div>
        <div>
     
     <div className="w-64 h-screen bg-gray-100 p-5 flex flex-col">
     <div className="relative  w-20 h-8 overflow-hidden"> 
                 <Image src="/logo.png" alt="logo " layout="fill" objectFit="cover" />
             </div>
            
           {/* Navigation links */}
           {[
             [MdDashboard, 'Dashboard'],
             [BsBarChartLine, 'Reports'],
             [MdEvent, 'Events'],
             [IoCalendarOutline, 'Programs'],
             [MdPeople, 'Attendees'],
             [IoNotificationsOutline, 'Notifications'],
             [BsAirplane, 'Boarding & Lodging'],
             [MdPeople, 'Clients'],
             [MdSchedule, 'Schedule'],
             [MdSettings, 'Settings'],
             [MdMoreHoriz, 'More'],
           ].map(([Icon, text]) => (
            <a href="#" className="flex items-center my-2 text-black no-underline hover:text-transparent gradient-text-hover">
            <Icon className="mr-2 text-gray-500" />
            {text}
          </a>

           ))}
           {/* Spacer */}
           <div className="flex-grow" />
           {/* Help and Logout links */}
           <a href="#" className="flex items-center ml-2 text-black no-underline hover:text-gray-700">
             <MdHelpOutline className="mr-2 text-gray-500" />
             Help
           </a>
           <a href="#" className="flex items-center ml-0 my-2 text-red-600 no-underline hover:text-red-800 rounded p-2.5">
             <MdExitToApp className="mr-2 text-red-600" />
             Logout
           </a>
         </div>
         </div>
    </div>
  );
};

export default SideMenu;
