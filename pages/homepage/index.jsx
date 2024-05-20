


import React from 'react';
import Image from 'next/image';

const  Home= ()=> {
  return (
    
    <div className="flex justify-between w-full p-10 items-start"> 
    <div className="bg-blue-600 bg-opacity-50 border-white border-opacity-50 border-2 rounded-xl w-160 h-200 ml-10 mt-24 flex flex-col items-center p-6">
    <h1 className="text-black text-4xl font-bold  text-center mt-4">
      Hey there, username!<br />Welcome to the party!
    </h1>
    <p className="mt-4 text-center">
      Workspaces for anna.codx@gmail.com
    </p>
    <p className="mt-2 text-center">
      We are happy you joined our CRM.<br />Watch a video, and view our features.
    </p>
    <div className="relative w-32 h-8 mt-4">
      <Image src="/robot.png" alt="Robot" layout="fill" objectFit="cover" />
    </div>
    <p className="mt-4 text-center">
      Need a live webinar? Book Now
    </p>
  </div>

    <div className="w-80 bg-white bg-opacity-80 border-2 border-white border-opacity-50 rounded-xl shadow-lg p-6 flex flex-col">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        Get your groove on and craft that CRM magic!
      </h2>
      <p className="text-gray-600 mt-6">Configure your deals pipeline</p>
      <div className="space-y-2">
        <div className="flex items-center">
          <Image src="/email.png" alt="Email" width={24} height={24} />
          <span className="ml-2">Connect to Your Email</span>
        </div>
        <div className="flex items-center">
          <Image src="/team.png" alt="Team" width={24} height={24} />
          <span className="ml-2">Invite Your Team</span>
        </div>
        <div className="flex items-center">
          <Image src="/integration.png" alt="Integration" width={24} height={24} />
          <span className="ml-2">Integration</span>
        </div>
        <div className="flex items-center">
          <Image src="/data.png" alt="Data Migration" width={24} height={24} />
          <span className="ml-2">Migrate Your Existing Data</span>
        </div>
        <div className="flex items-center">
          <Image src="/setting.png" alt="Configure Deals" width={24} height={24} />
          <span className="ml-2">Configure Your Deals</span>
        </div>
      </div>
    </div>
     
     <div>tahir</div>
  </div>
  )
}
export default Home;