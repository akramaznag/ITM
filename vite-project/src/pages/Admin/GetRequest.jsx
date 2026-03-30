import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, CreditCard } from 'lucide-react'
import { requestStatus } from '../../staticData/staticData';
import { requests } from '../../staticData/staticData';
import { ColorsRendering } from '../../staticData/staticData';
import RequestStatusFilter from '../../components/RequestStatusFilter';
import { useOutletContext } from "react-router-dom";

export default function GetRequest() {

  const { isSidebarOpened } = useOutletContext();
  console.log('this is from GetRequest.jsx ',isSidebarOpened)


   
  return (
       <>
       <div className={`w-full overflow-x-auto md:overflow-x-hidden md:w-full bg-red min-h-screen relative bottom-2 ${!isSidebarOpened ? 'lg:px-18':'p-0'}`}>
          <div className="min-w-[400px]">
            {/*admin Requests */}   
              <div className='mb-4 w-full flex md:justify-between'>
                <div className='flex gap-x-2 md:gap-x-5 items-center bg-green w-fit md:w-auto'>
                    <div className='p-2 md:p-3 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                        <ArrowLeft className='text-gray-700  w-4 h-4  group-hover:text-white'/>
                    </div>
                    <div className='w-fit bg-red'>
                        <h1 className='font-bold text-2xl text-black w-full'>
                          <span className='block'>Request</span> 
                          <span className='block'>REQ-001</span>
                        </h1>
                        <p className='text-gray-600 text-sm w-30 md:w-full'>Created on March 19, 2026 by Alice Martin</p>
                    </div>

                </div>
                <div className='flex items-center justify-center md:justify-normal gap-x-2 md:gap-x-3 bg-blue w-[60%] md:w-auto'>
                    <div className='flex items-center justify-between gap-x-5 h-10 bg-none rounded-xl px-3 py-2 outline-none focus:outline-none border border-gray-400/20 hover:bg-[hsl(var(--accent))] group duration-200 cursor-pointer'>
                          <div>

                            <CreditCard className='w-4 h-4 text-black  group-hover:text-white' />
                          </div>
                          <div className='text-black font-semibold text-sm  group-hover:text-white'>Payment</div>

                    </div>

                    <RequestStatusFilter/>
                </div>
              </div>
        
            
            
          </div>
              {/* ------------------------- */}
            
       </div>

         

    </>

)
}
