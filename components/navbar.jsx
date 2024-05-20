import React from "react";

import Link from 'next/link';
import { IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="">
      <div className="h-12 bg-gray-200 py-2.5 px-2.5 flex justify-between items-center w-80%">
      <div className="flex-grow flex space-x-2">
        <Link href="/all-reports" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">All Reports</a></Link>
        <Link href="/event-details" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">Event Details</a></Link>
        <Link href="/events" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">Event</a></Link>
        <Link href="/okr" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">OKR</a></Link>
        <Link href="/my-reports" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">My Reports</a></Link>
        <Link href="/custom-reports" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">Custom Reports</a></Link>
        <Link href="/financial-reports" passHref legacyBehavior><a className="text-black no-underline hover:text-gray-700">Financial Reports</a></Link>
      </div>
      <div className="flex items-center space-x-2.5">
        <IoCalendarOutline className="text-gray-500 text-lg" />
        <IoNotificationsOutline className="text-gray-500 text-lg" />
        <div className="relative rounded-full w-8 h-8 overflow-hidden"> 
            <Image src="/profile.png" alt="Profile" layout="fill" objectFit="cover" />
        </div>
        <span className="font-bold">Erik Brown</span>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
