import { PiCircleLight } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import React from 'react'

function Navigationbar() {
  return (
    <>
    <div className='w-full h-16 shadow-lg flex justify-center items-center space-x-5'>
        <div className="text-blue-500"><FaCheckCircle /></div>
        <div>Form Selection</div>
        <div className="flex items-center space-x-4">
            <PiCircleLight />
            <div>----------</div>
        </div>
        <div>Set Up</div>
        <div className="flex items-center space-x-4">
            <PiCircleLight />
            <div>----------</div>
        </div>
        <div>Form Creation</div>
        <div className="flex items-center space-x-4">
            <PiCircleLight />
            <div>----------</div>
        </div>
        
        <div>Review</div>
        <div className=" absolute right-8">
        <RxCross2 />
    </div>
    </div>
    
    </>
  )
}

export default Navigationbar
