import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, CreditCard, Calendar, AtSign, Mail, FileText } from 'lucide-react'
import { Calls, requests, requestStatus, technicianStatus } from '../../staticData/staticData';
import { Link, useOutletContext } from "react-router-dom";
import { NotRequestedStatus, OpenedStatus, Status } from '../../components/Status';
import { ColorsRendering } from '../../staticData/staticData';
import { TechnicianDetailsCard } from '../../components/Cards';

export default function GetTechnecian() {

  const { isSidebarOpened } = useOutletContext();
  console.log('this is from GetRequest.jsx ',isSidebarOpened)


   
  return (
       <>
       <div className={`w-full   bg-red min-h-screen relative bottom-2 `}>
            {/*Request heading */}   
            <div className='mb-4 w-full flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:justify-start'>
                <div className='flex gap-x-2 md:gap-x-5 items-center bg-green w-full md:w-auto'>
                    <div className='p-2 md:p-3 rounded-lg flex items-center  gap-x-3 w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                        <ArrowLeft className='text-gray-500  w-4 h-4  group-hover:text-white'/>
                        <div className='text-gray-500 text-sm font-semibold  group-hover:text-white'>
                            Back to Technicians
                        </div>
                    </div>
                    

                </div>
                
            </div>
            <div className='h-auto bg-red w-full flex flex-col md:flex-row gap-x-5 '>

                  {/* card container (Technician Profile , Technician Today Request*/}
                <div className='mb-4 flex   flex-col  gap-y-5 w-full '>

                    <TechnicianDetailsCard>
                        <div className='flex justify-between items-center p-2'>
                            <h1 className='font-semibold'>Technician Profile</h1>
                            <Status bgColor={ColorsRendering.technician.active.bg} textColor={ColorsRendering.technician.active.text} dotColor={ColorsRendering.technician.active.dot} content={"Active"}/>
                        </div>

                        <div className='grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] gap-y-4 sm:gap-3  p-2'>


                            <div className='flex items-center gap-x-2'>
                                 <div className='p-2.5 bg-blue-100 flex items-start justify-center rounded-xl'>
                                    <User className='w-4 h-4 text-[hsl(210,100%,45%)]'/>                              
                                 </div>

                                <div className='flex flex-col gap-y-1'>
                                    <div className='text-gray-500 text-xs  capitalize font-semibold'>Full Name</div>
                                    <div className='capitalize font-semibold text-sm'>Ahmed Benali</div>

                                </div>
                            </div>
                            {/*  */}
                            <div className='flex items-center gap-x-2'>
                                 <div className='p-2.5 bg-blue-100 flex items-start justify-center rounded-xl'>
                                    <AtSign className='w-4 h-4 text-[hsl(210,100%,45%)]'/>                              
                                 </div>

                                <div className='flex flex-col gap-y-1'>
                                    <div className='text-gray-500 text-xs  capitalize font-semibold'>Username</div>
                                    <div className='capitalize font-semibold text-sm'>ABENALI</div>

                                </div>
                            </div>
                            {/*  */}
                            <div className='flex items-center gap-x-2'>
                                 <div className='p-2.5 bg-blue-100 flex items-start justify-center rounded-xl'>
                                    <Mail className='w-4 h-4 text-[hsl(210,100%,45%)]'/>                              
                                 </div>

                                <div className='flex flex-col gap-y-1'>
                                    <div className='text-gray-500 text-xs  capitalize font-semibold'>Email</div>
                                    <div className='capitalize font-semibold text-sm'>ahmed@email.com</div>

                                </div>
                            </div>
                            {/*  */}
                             <div className='flex items-center gap-x-2'>
                                 <div className='p-2.5 bg-blue-100 flex items-start justify-center rounded-xl'>
                                    <Phone className='w-4 h-4 text-[hsl(210,100%,45%)]'/>                              
                                 </div>

                                <div className='flex flex-col gap-y-1'>
                                    <div className='text-gray-500 text-xs  capitalize font-semibold'>Phone</div>
                                    <div className='capitalize font-semibold text-sm'>06 74 33 65 43</div>

                                </div>
                            </div>
                         

                        </div>
                        <div className="w-full flex items-center justify-center gap-x-3">
                                <div className={`bg-slate-100 rounded-xl w-[33.33%] h-30 flex flex-col gap-y-2 justify-center items-center`}>
                                    <FileText className='w-5 h-5 text-blue-600'/>
                                    <div className='font-bold text-2xl'>6</div>
                                    <div className='capitalize text-xs text-slate-500'>Assigned</div>
                                </div>
                                {/*  */}
                                <div className={`bg-slate-100 rounded-xl w-[33.33%] h-30 flex flex-col gap-y-2 justify-center items-center`}>
                                    <CheckCircle className='w-5 h-5 text-green-600'/>
                                    <div className='font-bold text-2xl'>24</div>
                                    <div className='capitalize text-xs text-slate-500'>resolved</div>
                                </div>
                                {/*  */}
                                <div className={`bg-slate-100 rounded-xl w-[33.33%] h-30 flex flex-col gap-y-2 justify-center items-center`}>
                                    <CheckCircle className='w-5 h-5 text-red-600'/>
                                    <div className='font-bold text-2xl'>6</div>
                                    <div className='capitalize text-xs text-slate-500'>canceled</div>
                                </div>
                        </div>
                    </TechnicianDetailsCard>

                   

                    {/* today requests assigned to the techniciN */}

                    <div className="text-black bg-white  outline-0 border  border-gray-200  rounded-xl h-auto flex flex-col ">

                      {/* Call information heading */}
                        <div className='px-4 py-5 flex justify-between items-center'>
                            
                            <h1 className='font-semibold capitalize'>Requests (Today)</h1>
                            <button className='bg-slate-100  border border-gray-400/30 hover:bg-[hsl(var(--accent))] group duration-200 cursor-pointer flex items-center justify-center  rounded-xl h-9 px-3 w-fit '>
                                  <div className='capitalize  flex items-center gap-x-3 group-hover:text-white'>
                                      <Search className='w-4 h-4 font-light'/>
                                      <div className='text-sm font-semibold capitalize'>find</div>
                                  </div>
                            </button>

                        </div>
                        {/* Call information Body table*/}
                        <div   className='bg-green w-full overflow-x-auto  h-auto  '>
                          <div className='min-w-[500px] md:min-w-0'>

                              {/* columns */}
                              <div className='w-full px-3 bg-slate-100 outline-0 border-y  border-gray-200 h-13  grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center gap-x-3 md:gap-x-0'>
                                  <span className='text-gray-500 text-xs font-semibold '>Request ID</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Product</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Client</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Issue</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Status</span>    
                                  <span className='text-gray-500 text-xs font-semibold '>Date</span>    
                              </div>
                              {/* data */}
                              {
                                  requests.slice(0,3).map((e,index)=>{
                                    const statusStyle = ColorsRendering.status[e.status];
                                    const statusObj = requestStatus.find(item=>item.status===e.status);
                                    const statusValue=statusObj ? statusObj.value : e.status;


                                    
                                    
                                      return (
                                        

                                            
                                    

                                          <Link to={'/technicians/1'} className='px-3 py-3 min-h-13  grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center outline-0 border-t  border-gray-200 gap-x-3 md:gap-x-0'>
                                              {/* Request ID */}
                                
                                              <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full'>{e.id}</div>
                                              {/* Phone Number */}
                                            
                                              <div className='text-black text-sm font-semibold  w-1/2 sm:w-full'>{e.product}</div>
                                            
                                              {/* Call Date */}
                                              <div className='text-gray-500 text-sm  w-[60%]  '>{e.client}</div>
                                              {/* Call Comment */}

                                              <p title={e.comment} className='text-gray-900 text-sm  w-full '>{e.issue.slice(0,20)+'...'}</p >
                                              {/* Call Details info Saved Bay */}

                                            
                                             <Status bgColor={statusStyle.bg} textColor={statusStyle.text} dotColor={statusStyle.dot} content={statusValue} />
                                             
                                              <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>admin user</div>
                                              
                                              
                                          </Link>
                                          
                                      )
                                  })
                              }
                          </div>
                  
                

                        </div>

                      
                    </div>

                  
                  
                </div>  

            </div>
            
       </div>

         

    </>

)
}
