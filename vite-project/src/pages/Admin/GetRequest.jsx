import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, CreditCard, Calendar } from 'lucide-react'
import { Calls, requestStatus } from '../../staticData/staticData';
import { requests } from '../../staticData/staticData';
import { ColorsRendering } from '../../staticData/staticData';
import RequestStatusFilter from '../../components/Filter/RequestStatusFilter';
import { useOutletContext } from "react-router-dom";
import { NotRequestedStatus, OpenedStatus } from '../../components/UI/Status';
import {RequestDetailsCard} from '../../components/UI/Cards';

export default function GetRequest() {

  const { isSidebarOpened } = useOutletContext();
  console.log('this is from GetRequest.jsx ',isSidebarOpened)


   
  return (
       <>
       <div className={`w-full   bg-red min-h-screen relative bottom-2 ${!isSidebarOpened ? 'lg:px-18':'p-0'}`}>
            {/*Request heading */}   
            <div className='mb-4 w-full flex flex-col gap-y-3 md:gap-y-0 md:flex-row md:justify-between'>
                <div className='flex gap-x-2 md:gap-x-5 items-center bg-green w-full md:w-auto'>
                    <div className='p-2 md:p-3 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                        <ArrowLeft className='text-gray-700  w-4 h-4  group-hover:text-white'/>
                    </div>
                    <div className='w-full bg-red'>
                        <h1 className='font-bold text-2xl text-black w-full'>
                          Request REQ-001
                          
                        </h1>
                        <p className='text-gray-600 text-sm  w-full'>Created on March 19, 2026 by Alice Martin</p>
                    </div>

                </div>
                <div className='flex items-center justify-end md:justify-normal gap-x-3  bg-blue w-full md:w-auto'>
                    <div className='flex items-center justify-between gap-x-5 h-10 bg-none rounded-xl px-3 py-2 outline-none focus:outline-none border border-gray-400/20 hover:bg-[hsl(var(--accent))] group duration-200 cursor-pointer'>
                          <div>

                            <CreditCard className='w-4 h-4 text-black  group-hover:text-white' />
                          </div>
                          <div className='text-black font-semibold text-sm  group-hover:text-white'>Payment</div>

                    </div>

                    <RequestStatusFilter/>
                </div>
            </div>
            <div className='h-auto bg-red w-full flex flex-col md:flex-row gap-x-5 '>

                  {/* first cards container (Product Information,Request Information,Call Information) */}
                <div className='mb-4 flex  flex-col  gap-y-5 w-full md:w-[65%] '>
                    {/* Product Card */}

                    <RequestDetailsCard>
                      {/* Product heading */}
                        <div className='flex items-center gap-x-2'>
                            <Monitor className='w-4 h-4 text-blue-500 font-semibold'/>
                            <h1 className='font-semibold'>Product Information</h1>
                        </div>
                        {/* product body */}

                        <div className='grid grid-cols-1 gap-y-4 md:gap-y-0  md:grid-cols-[1.2fr_1fr_1fr]'>

                          <div className='flex flex-col gap-y-1'>
                            <div className='text-gray-500 text-xs  capitalize font-semibold'>brand</div>
                            <div className='capitalize font-semibold text-sm'>Apple</div>

                          </div>
                          <div className='flex flex-col gap-y-1'>
                            <div className='text-gray-500 text-xs  capitalize font-semibold'>Model</div>
                            <div className='capitalize font-semibold text-sm'>MacBook Pro 14"</div>

                          </div>
                          <div className='flex flex-col gap-y-1'>
                            <div className='text-gray-500 text-xs  capitalize font-semibold'>Purshase date</div>
                            <div className='capitalize font-semibold text-sm'>June 15, 2024</div>

                          </div>

                        </div>
                    </RequestDetailsCard>

                    {/* Request Information */}
                    <RequestDetailsCard>
                      {/* Product heading */}    
                        <h1 className='font-semibold'>Request Information</h1>
                      
                        {/* product body */}

                        <form className='flex flex-col gap-y-2'>
                              <div className='flex flex-col gap-y-2'>
                                <h2 className='text-sm font-semibold'>Resume / Symptoms</h2>
                              <textarea  placeholder='' className='h-20 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-3 px-4   text-sm text-gray-900 bg-slate-100'/>

                              </div>
                              {/* -- */}
                              <div className='flex flex-col gap-y-2'>
                                <h2 className='text-sm font-semibold'>Diagnostic</h2>
                              <textarea  placeholder='Enter diagnostic details' className='h-20 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-3 px-4   text-sm text-gray-900 bg-slate-100'/>

                              </div>
                              {/* -- */}
                              <div className='flex flex-col gap-y-2 mb-2'>
                                <h2 className='text-sm font-semibold'>Solution</h2>
                              <textarea  placeholder='Enter the solution' className='h-20 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-3 px-4   text-sm text-gray-900 bg-slate-100'/>

                              </div>
                            
                              <button className='text-sm font-semibold text-white bg-blue-500 hover:bg-blue-500/90 cursor-pointer flex items-center justify-center  rounded-xl h-10 w-fit py-2 px-5' type='submit' >
                                Save Changes
                              </button>


                        </form>
                    </RequestDetailsCard>

                    {/* Call information */}

                    <div className="text-black bg-white  outline-0 border  border-gray-200  rounded-xl shadow-sm   h-auto flex flex-col">

                      {/* Call information heading */}
                        <div className='px-4 py-5 flex justify-between items-center'>
                            <div className='flex items-center gap-x-2'>
                            
                              <Phone className='w-4 h-4 text-blue-500 font-semibold'/>
                              <h1 className='font-semibold'>Call Information</h1>
                            </div>
                            <button className='bg-slate-100  border border-gray-400/30 hover:bg-[hsl(var(--accent))] group duration-200 cursor-pointer flex items-center justify-center  rounded-xl h-9 px-3 w-fit '>
                                  <div className='capitalize  flex items-center gap-x-3 group-hover:text-white'>
                                      <div className='text-2xl font-light relative bottom-[2px]'>+</div>
                                      <div className='text-sm font-semibold capitalize'>Add Call</div>
                                  </div>
                            </button>

                        </div>
                        {/* Call information Body table*/}
                        <div   className='bg-green w-full overflow-x-auto  h-auto  '>
                          <div className='min-w-[500px] md:min-w-0'>

                              {/* columns */}
                              <div className='w-full px-3 bg-slate-100 outline-0 border-y  border-gray-200 h-13  grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-x-3 md:gap-x-0'>
                                  <span className='text-gray-500 text-xs font-semibold '>Type</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Phone</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Date</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Comment</span>
                                  <span className='text-gray-500 text-xs font-semibold '>Created By</span>    
                              </div>
                              {/* data */}
                              {
                                  Calls.map((e,index)=>{
                                    
                                      return (

                                          <div className='px-3 py-3 min-h-13  grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center outline-0 border-t  border-gray-200 gap-x-3 md:gap-x-0'>
                                              {/* Call Type */}
                                              
                                                {
                                              <div className={`${e.type === 'Immediate'?'text-orange-500 bg-orange-50 ':'text-blue-500 bg-blue-100 '} text-xs font-semibold w-fit p-2 rounded-2xl flex items-center gap-x-1  `}>
                                                  
                                                  <div>{e.type === 'Immediate' ?'⚡':'📅' }</div>
                                                  <div className=''> {e.type} </div>

                                                  
                                                  
                                              </div>
                                                } 
                                              {/* Phone Number */}
                                            
                                              <div className='text-black text-sm font-mono  '>{e.phone}</div>
                                            
                                              {/* Call Date */}
                                              <div className='text-gray-500 text-sm  w-[60%]  '>{e.date}</div>
                                              {/* Call Comment */}

                                              <p title={e.comment} className='text-gray-900 text-sm  w-full '>{e.comment.slice(0,20)+'...'}</p >
                                              {/* Call Details info Saved Bay */}

                                            
                                            
                                              <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>{e.createdBy}</div>
                                              
                                              
                                          </div>
                                          
                                      )
                                  })
                              }
                          </div>
                  
                

                        </div>

                      
                    </div>

                  
                  
                </div>  
                  {/* second cards container (Status, Client Information,Timeline */}
                  
                  <div className='mb-4 flex  flex-col  gap-y-5 w-full md:w-[35%] '>
                    {/* Status Card */}
                    <RequestDetailsCard>
                      <div className='flex flex-col gap-y-3'>
                        <h1 className='font-semibold'>status</h1>
                        <div className='flex flex-col gap-y-3 '>
                            <div className='flex items-center justify-between'>
                              <div className='capitalize text-gray-500 text-sm font-normal'>Request</div>
                              <OpenedStatus/>
                            </div>
                            {/* ----- */}
                            <div className='flex items-center justify-between'>
                              <div className='capitalize text-gray-500 text-sm font-normal'>Payment</div>
                              <NotRequestedStatus/>
                            </div>
                        </div>
                      </div>
                     
                      
                    </RequestDetailsCard>
                    {/* Client Info Card */}
                    <RequestDetailsCard>
                      <div className='flex flex-col gap-y-3'>
                        <h1 className='font-semibold'>Client Information</h1>
                        <div className='flex flex-col gap-y-3 '>
                            <div className='flex items-center gap-x-3'>
                                {/* User Icon*/}
                                <div className='p-2 bg-blue-100 flex items-center justify-center rounded-full'>
                                  <User className='w-5 h-5 text-[hsl(210,100%,45%)]'/>
                                  
                                </div>
                                {/* Client Name and Email */}
                                <div className='flex flex-col justify-center'>
                                  <div className='text-sm capitalize font-semibold'>Alice Martin</div>
                                  <div className='text-xs text-gray-500 font-normal'>alice.martin@email.com</div>

                                </div>
                             
                            </div>
                            {/* -----  border line*/}
                            <div className='border border-gray-200'/>
                            {/* ------- */}
                             <div className='flex flex-col gap-y-2 justify-center'>
                               <div className='flex gap-x-3 items-center'>
                                 <Phone className='w-3.5 h-3.5 text-slate-500'/>
                                 <div className='text-sm'>+212 6 74 33 78 72</div>

                               </div>
                               <div className='flex gap-x-3 items-center'>
                                 <Calendar className='w-3.5 h-3.5 text-slate-500'/>
                                 <div className='text-sm'>Client since jan 2024</div>

                               </div>
                               
                            </div>

                             
                            
                        </div>
                      </div>
                     
                      
                    </RequestDetailsCard>

                    {/* Request Timeline */}
                     <RequestDetailsCard>
                      <div className='flex flex-col gap-y-4'>
                        <h1 className='font-semibold'>Timeline</h1>
                          {/* Request Phases */}
                        <div className='flex flex-col gap-y-3 '>
                            <div className='flex gap-x-3 items-start justify-start'>
                                {/* Request Pillar */}
                                <div className='flex flex-col  items-center  gap-y-1'>
                                    <div className='bg-blue-500 w-2.5 h-2.5 rounded-full'/>
                                    <div className='bg-slate-200 w-0.5 h-8 '/>      
                                </div>
                                <div  className='flex flex-col  justify-start   relative bottom-1' >
                                   <div className='text-sm font-semibold capitalize'>Request created</div>
                                   <div className='text-xs text-gray-500'>Mar 19, 10:00</div>

                                </div>

                            </div>
                            {/* Assigning to Tech */}
                            <div className='flex gap-x-3 items-start justify-start'>
                                {/* Request Pillar */}
                                <div className='flex flex-col  items-center  gap-y-1'>
                                    <div className='bg-slate-200 w-2.5 h-2.5 rounded-full'/>
                                    <div className='bg-slate-200 w-0.5 h-8 '/>      
                                </div>
                                <div  className='flex flex-col  justify-start   relative bottom-1' >
                                   <div className='text-sm font-semibold capitalize'>Assigned to tech</div>
                                   <div className='text-xs text-gray-500'>Mar 19, 10:00</div>

                                </div>

                            </div>
                             {/* Diagnostic */}
                            <div className='flex gap-x-3 items-start justify-start'>
                                {/* Request Pillar */}
                                <div className='flex flex-col  items-center  gap-y-1'>
                                    <div className='bg-slate-200 w-2.5 h-2.5 rounded-full'/>
                                    <div className='bg-slate-200 w-0.5 h-8 '/>      
                                </div>
                                <div  className='flex flex-col  justify-start   relative bottom-1' >
                                   <div className='text-sm font-semibold capitalize'>Diagnostic</div>
                                   <div className='text-xs text-gray-500'>Pending</div>

                                </div>

                            </div>
                             {/* Resolution or Cancelation */}
                            <div className='flex gap-x-3 items-start justify-start'>
                                {/* Request Pillar */}
                                <div className='flex flex-col  items-center  gap-y-1'>
                                    <div className='bg-slate-200 w-2.5 h-2.5 rounded-full'/>
                                    <div className='bg-slate-200 w-0.5 h-8 '/>      
                                </div>
                                <div  className='flex flex-col  justify-start   relative bottom-1' >
                                   <div className='text-sm font-semibold capitalize'>Resolution</div>
                                   <div className='text-xs text-gray-500'>Pending</div>

                                </div>

                            </div>


                          

                             
                            
                        </div>
                      </div>
                     
                      
                    </RequestDetailsCard>

                  
                  

                  
                  
                </div>  
            </div>
            
       </div>

         

    </>

)
}
