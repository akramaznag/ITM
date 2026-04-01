import React from 'react'
import { CheckCircle, CircleAlert, Clock, File, Monitor, Phone } from 'lucide-react'

export default function AdminDashboard() {
  return (
      <>
      {/* dashboard heading */}
     
        
        <div className='mb-4'>
            <h1 className='font-bold text-2xl text-black'>Dashboard</h1>
            <p className='text-gray-600 text-sm'>Overview of your IT management operations</p>
        </div>
        {/* cards  */}
        <div className="mb-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* card compenent */}
            <div className="bg-white outline-0 border border-gray-200 rounded-xl shadow-sm  px-4 py-5 h-30 flex justify-between">
                <div className="flex flex-col items-start gap-y-2 ">
                    <div className='text-sm text-gray-600'>Total Requests</div>
                    <div className='text-black font-bold text-2xl'>142</div>
                    <div className='text-xs  text-green-400 font-bold'>+12% by this month</div>
                </div>
                <div className='bg-blue-100 w-10 h-10 rounded-lg flex justify-center items-center'>
                    <File className='w-5 h-5 text-blue-500'/>
                </div>

            </div>
            {/* card compenent */}
            <div className="bg-white  outline-0  border border-gray-200 rounded-xl shadow-sm px-4 py-5 h-30 flex justify-between">
                <div className="flex flex-col items-start gap-y-2 ">
                    <div className='text-sm text-gray-600'>Active Products</div>
                    <div className='text-black font-bold text-2xl'>89</div>
                    <div className='text-xs  text-green-400 font-bold'>+5% new</div>
                </div>
                <div className='bg-blue-100 w-10 h-10 rounded-lg flex justify-center items-center'>
                    <Monitor className='w-5 h-5 text-blue-500'/>
                </div>

            </div>
            {/* card compenent */}
            <div className="bg-white  outline-0 border border-gray-200 rounded-xl shadow-sm  px-4 py-5 h-30 flex justify-between">
                <div className="flex flex-col items-start gap-y-2 ">
                    <div className='text-sm text-gray-600'>Calls Today</div>
                    <div className='text-black font-bold text-2xl'>8</div>
                    <div className='text-xs  text-red-400 font-bold'>3 pending</div>
                </div>
                <div className='bg-blue-100 w-10 h-10 rounded-lg flex justify-center items-center'>
                    <Phone className='w-5 h-5 text-blue-500'/>
                </div>

            </div>{/* card compenent */}
            <div className="bg-white  outline-0 border  border-gray-200 rounded-xl shadow-sm  px-4 py-5 h-30 flex justify-between">
                <div className="flex flex-col items-start gap-y-2 ">
                    <div className='text-sm text-gray-600'>Resolved</div>
                    <div className='text-black font-bold text-2xl'>118</div>
                    <div className='text-xs  text-green-400 font-bold'>83% rate</div>
                </div>
                <div className='bg-blue-100 w-10 h-10 rounded-lg flex justify-center items-center'>
                    <CheckCircle className='w-5 h-5 text-blue-500'/>
                </div>

            </div>
        </div>
        {/* requests analytics section */}
        <div className='w-full flex flex-col lg:flex-row items-start lg:gap-x-4 gap-y-4'>
            {/* Recent requests table */}
            <div   className='w-full lg:w-[67%] h-auto  overflow-x-scroll md:overflow-x-hidden bg-white border border-gray-200 rounded-xl shadow-sm'>
                <div className="min-w-[500px]">

                        {/* header */}
                        <div className='px-4 py-5 text-black font-medium border-b border-gray-300'>
                            Recent Requests
                        </div>
                        {/* columns */}
                        <div className='px-3 h-13 md:px-4 md:py-3 grid grid-cols-[10%_20%_20%_20%_20%] sm:grid-cols-[20%_20%_20%_20%_20%] lg:grid-cols-[120px_2fr_1.5fr_1fr_1fr] items-center border border-t-gray-200 border-b-gray-300 '>
                            <span className='text-gray-500 text-xs font-semibold'>ID</span>
                            <span className='text-gray-500 text-xs font-semibold'>Product</span>
                            <span className='text-gray-500 text-xs font-semibold'>Client</span>
                            <span className='text-gray-500 text-xs font-semibold'>Status</span>
                            <span className='text-gray-500 text-xs font-semibold'>Date</span>
                            
                        </div>
                        {/* data */}
                        <div className='px-3 py-2 md:px-4 md:py-3 grid grid-cols-[10%_20%_20%_20%_20%] sm:grid-cols-[20%_20%_20%_20%_20%] lg:grid-cols-[120px_2fr_1.5fr_1fr_1fr] items-center  outline-0 border-t  border-gray-200'>
                            
                            <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full'>REQ-01</div>
                            <div>
                                <div className='text-black text-sm font-semibold  w-1/2 sm:w-full'>MacBook Pro 14"</div>
                                <div className='text-gray-600 text-xs font-normal  '>Apple</div>

                            </div>
                            <div className='text-gray-900 text-sm  w-1/2 sm:w-full'>Alice Martin</div>
                            <div className='flex bg-blue-100 px-2  h-5 rounded-xl text-xs text-blue-700 font-semibold w-fit gap-x-2 items-center justify-center'>
                                <span className='block h-[7px] w-[7px] rounded-full bg-blue-700'></span>
                                <span className='block'>Opened</span>
                                
                            </div>
                            <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>2026-03-19</div>
                            
                        </div>
                        <div className='px-3 py-2 md:px-4 md:py-3 grid grid-cols-[10%_20%_20%_20%_20%] sm:grid-cols-[20%_20%_20%_20%_20%] lg:grid-cols-[120px_2fr_1.5fr_1fr_1fr] items-center   border border-t-gray-200 border-b-gray-300'>
                            
                            <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full'>REQ-01</div>
                            <div>
                                <div className='text-black text-sm font-semibold  w-1/2 sm:w-full'>MacBook Pro 14"</div>
                                <div className='text-gray-600 text-xs font-normal  '>Apple</div>

                            </div>
                            <div className='text-gray-900 text-sm  w-1/2 sm:w-full'>Alice Martin</div>
                            <div className='flex bg-blue-100 px-2  h-5 rounded-xl text-xs text-blue-700 font-semibold w-fit gap-x-2 items-center justify-center'>
                                <span className='block h-[7px] w-[7px] rounded-full bg-blue-700'></span>
                                <span className='block'>Opened</span>
                                
                            </div>
                            <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>2026-03-19</div>
                            
                        </div>
                          <div className='px-3 py-2 md:px-4 md:py-3 grid grid-cols-[10%_20%_20%_20%_20%] sm:grid-cols-[20%_20%_20%_20%_20%] lg:grid-cols-[120px_2fr_1.5fr_1fr_1fr] items-center   border border-t-gray-200 border-b-gray-300'>
                            
                            <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full'>REQ-10000</div>
                            <div>
                                <div className='text-black text-sm font-semibold  w-1/2 sm:w-full'>MacBook Pro 14"</div>
                                <div className='text-gray-600 text-xs font-normal  '>Apple</div>

                            </div>
                            <div className='text-gray-900 text-sm  w-1/2 sm:w-full'>Alice Martin</div>
                            <div className='flex bg-blue-100 px-2  h-5 rounded-xl text-xs text-blue-700 font-semibold w-fit gap-x-2 items-center justify-center'>
                                <span className='block h-[7px] w-[7px] rounded-full bg-blue-700'></span>
                                <span className='block'>Opened</span>
                                
                            </div>
                            <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>2026-03-19</div>
                            
                        </div>
                </div>
                

            </div>
            {/* ------------------------- */}
            {/* Request Statuses */}
             <div className='w-full lg:w-[33%] h-auto lg:h-88  px-4 py-5 bg-white outline-0 border border-gray-200 rounded-xl shadow-sm '>
                {/* header */}
                <div className=' text-black font-medium mb-5'>
                    Request Status
                </div>
                
                <div className=' flex flex-col gap-y-4 border mb-4'>
                    <div className='flex items-center justify-between'>
                        {/* status icon */}
                        <div className='flex items-center gap-x-2 '>
                            <div className='w-8 h-8 flex items-center justify-center bg-blue-100 p-2 rounded-xl'>
                                <CircleAlert className='w-4 h-4 text-blue-700'/>
                            </div>
                            <div className='text-sm font-semibold text-black capitalize'>Opened</div>
                        </div>
                        {/* integer values */}
                        <div className='text-xl font-semibold text-black'>
                            12
                        </div>

                    </div>
                    {/*  */}
                     <div className='flex items-center justify-between'>
                        {/* status icon */}
                        <div className='flex items-center gap-x-2 '>
                            <div className='w-8 h-8 flex items-center justify-center bg-yellow-50 p-2 rounded-xl'>
                                <Clock className='w-4 h-4 text-orange-500'/>
                            </div>
                            <div className='text-sm font-semibold text-black capitalize'>On going</div>
                        </div>
                        {/* integer values */}
                        <div className='text-xl font-semibold text-black'>
                            10
                        </div>

                    </div>
                    {/*  */}
                     <div className='flex items-center justify-between'>
                        {/* status icon */}
                        <div className='flex items-center gap-x-2 '>
                            <div className='w-8 h-8 flex items-center justify-center bg-green-100 p-2 rounded-xl'>
                                <CheckCircle className='w-4 h-4 text-green-700'/>
                            </div>
                            <div className='text-sm font-semibold text-black capitalize'>Solved</div>
                        </div>
                        {/* integer values */}
                        <div className='text-xl font-semibold text-black'>
                            12
                        </div>

                    </div>
                    {/* border */}
                    <div className="border border-b-gray-200"/>
             
                </div>
                {/* ---------- */}
                <div className=' text-black font-medium mb-2'>       
                    Resolution rate
                </div>
                <div className=" h-3 w-full mb-2">
                    <div className='w-full '>
                        <div className='bg-gray-300 w-full rounded-lg h-3' >
                            <div className="bg-green-500  w-[83%] rounded-lg h-3"></div>
                        </div>
                    </div>
                </div>
                <div className='  text-gray-500 font-normal text-xs  '>       
                    83% of requests resolved
                </div>


                
                


            </div>
         

        </div>
    </>
   )
}
