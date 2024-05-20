import {
    MdDashboard,  MdEvent,
     MdPeople, MdSchedule, MdSettings, MdMoreHoriz,
    MdHelpOutline, MdExitToApp
  } from 'react-icons/md';
  import { IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5';
  import { BsBarChartLine, BsAirplane } from "react-icons/bs";
  
  const Sidebar = () => {
    return (
      <div className="w-64 h-screen bg-gray-100 p-5 flex flex-col">
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdDashboard className="mr-2 text-gray-500" />Dashboard
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <BsBarChartLine className="mr-2 text-gray-500" />Reports
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdEvent className="mr-2 text-gray-500" />Events
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <IoCalendarOutline className="mr-2 text-gray-500" />Programs
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdPeople className="mr-2 text-gray-500" />Attendees
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <IoNotificationsOutline className="mr-2 text-gray-500" />Notifications
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <BsAirplane className="mr-2 text-gray-500" />Boarding & Lodging
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdPeople className="mr-2 text-gray-500" />Clients
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdSchedule className="mr-2 text-gray-500" />Schedule
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdSettings className="mr-2 text-gray-500" />Settings
        </a>
        <a href="#" className="flex items-center my-2 text-black no-underline hover:text-gray-700">
          <MdMoreHoriz className="mr-2 text-gray-500" />More
        </a>
  
        {/* Spacing */}
        <div className="flex-grow" />
  
        <a href="#" className="flex items-center ml-2 text-black no-underline hover:text-gray-700">
          <MdHelpOutline className="mr-2 text-gray-500" />Help
        </a>
        <a href="#" className="flex items-center ml-0 my-2 text-red-600 no-underline hover:text-red-800 rounded p-2.5">
          <MdExitToApp className="mr-2 text-red-600" />Logout
        </a>
      </div>
    );
  };
  
  export default Sidebar;
  