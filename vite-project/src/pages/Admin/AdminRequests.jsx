import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon } from 'lucide-react'
import { requestStatus } from '../../staticData/staticData';
import { requests } from '../../staticData/staticData';
import { ColorsRendering } from '../../staticData/staticData';
import { Link } from 'react-router-dom';
export default function AdminRequests() {
    const [isFilteropened,setisFilteropened] =useState(false)
    const [filterValue,setFilterValue]=useState({
        status:'all',
        value:'All Status'
    })
    const [isSelected,setIsSelected]=useState(false)
    const [activeStatus, setActiveStatus] = useState('all');  
    const [isHoveringList, setIsHoveringList] = useState(false); 
    console.log('is active :',activeStatus)
    
    console.log(filterValue)
  return (
       <>
      {/*admin Requests */}   
        <div className='mb-4 w-full flex justify-between'>
            <div className=''>
                <h1 className='font-bold text-2xl text-black'>Requests</h1>
                <p className='text-gray-600 text-sm'>Manage all service requests</p>
            </div>
            <div className='bg-blue-500 hover:bg-blue-500/90 cursor-pointer flex items-center justify-center  rounded-xl h-10 px-5'>
                <div className='capitalize  flex items-center gap-x-3'>
                    <div className='text-2xl font-light relative bottom-[2px]'>+</div>
                    <div className='text-sm font-semibold'>new request</div>
                 </div>
            </div>
        </div>
        {/* search bar and filter container  */}
        <div className="mb-5 w-full flex justify-between gap-x-3">
            <div className='relative w-[60%] md:w-[86%] '>
                <Search className='absolute w-4 h-4 text-gray-500 top-3 left-3 '/>
                <input type="text" name="" id="" placeholder='Search Requests...' className='h-10 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-2 pl-8 pr-4  text-sm text-gray-800'/>
            </div>
            <div className='relative w-[40%] md:w-42 cursor-pointer ' onClick={()=>setisFilteropened(!isFilteropened)}>

                <ChevronDown className='absolute w-4 h-4 text-gray-500 flex justify-self-end top-3 right-5'/>
                <div  className={`flex items-center justify-start h-10 bg-none outline-none focus:outline-none  ${`${isFilteropened ? 'border-2 border-blue-500 duration-50 ease-in-out':'border border-gray-400/20'}  `} rounded-xl w-full py-2 px-3  text-sm text-gray-800`}>
                 <span className='block capitalize'>{filterValue.value}</span>
                </div>
                {/*popup  */}
                <div onMouseEnter={() => setIsHoveringList(true)} onMouseLeave={() => setIsHoveringList(false)} className={`${isFilteropened?'block':'hidden'} absolute top-12 right-0 w-34 md:w-38 lg:w-41 h-auto p-1 bg-white rounded-xl shadow-lg z-40 animate-in slide-in-from-top duration-300`}>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex flex-col gap-y-1'>
                            {
                                    requestStatus.length > 0 ? requestStatus.map(e => {
                                        const isActiveItem = activeStatus === e.status && !isHoveringList;
                                        return (
                                                    <div key={e.status}  onClick={() => { setFilterValue({status: e.status, value: e.value});  setActiveStatus(e.status); setisFilteropened(false); }}
                                                        className={`${isActiveItem  ? 'bg-[hsl(var(--accent))] text-white'  : 'bg-white'} flex gap-x-3 items-center justify-start p-2 hover:bg-[hsl(var(--accent))] group rounded-xl transition-colors duration-200 ease-in-out cursor-pointer`}>
                                                        <Check className={`w-4 h-4 transition-colors duration-300 ${ isActiveItem ? 'visible text-white group-hover:text-black'  : 'invisible group-hover:visible group-hover:text-white' }`} />

                                                        <div className={`text-sm transition-colors duration-300 capitalize ${isActiveItem ? 'text-white group-hover:text-black' : 'text-black group-hover:text-white'}`}>
                                                            {e.value}
                                                        </div>
                                                    </div>
                                                );
                                    }) : 'not yet'
                            }
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
            
           
        </div>
        {/* requests analytics section */}
        <div   className='w-full  h-auto overflow-x-auto md:overflow-x-hidden bg-white border border-gray-200 rounded-xl'>
               
                    {/* columns */}
                    <div className='min-w-[650px] sm:w-full md:w-full px-3 h-13 md:px-4 md:py-3 grid grid-cols-[0.8fr_1.2fr_0.8fr_2fr_1.2fr_1.5fr_1fr_0.5fr] md:grid-cols-[0.8fr_1.2fr_1fr_1.5fr_1fr_1.5fr_1fr_0.5fr] items-center border border-t-gray-200 border-b-gray-300 '>
                        <span className='text-gray-500 text-xs font-semibold '>ID</span>
                        <span className='text-gray-500 text-xs font-semibold '>Product</span>
                        <span className='text-gray-500 text-xs font-semibold '>Client</span>
                        <span className='text-gray-500 text-xs font-semibold '>issue</span>
                        <span className='text-gray-500 text-xs font-semibold '>Status</span>
                        <span className='text-gray-500 text-xs font-semibold '>payment</span>
                        <span className='text-gray-500 text-xs font-semibold '>Date</span>
                        <span className='text-gray-500 text-xs font-semibold  '></span>
                        
                    </div>
                    {/* data */}
                    {
                        requests.map((e,index)=>{
                            const statusStyle = ColorsRendering.status[e.status];
                            const paymentStyle = ColorsRendering.payment[e.payment];
                            return (

                                <div className='min-w-[650px] sm:w-full  md:w-full px-3 py-2 md:px-4 md:py-3 grid grid-cols-[0.8fr_1.2fr_0.8fr_2fr_1.2fr_1.5fr_1fr_0.5fr] md:grid-cols-[0.8fr_1.2fr_1fr_1.5fr_1fr_1.5fr_1fr_0.5fr] items-center    border border-t-gray-200 border-b-gray-300 '>
                                    {/* request ID */}
                                    <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full '>
                                     <Link to='/admin/requests/id'> {e.id}</Link>
                                    </div>
                                    {/* request product and brand */}
                                    <div className=''>
                                        <div className='text-black text-sm font-semibold w-1/2 sm:w-full'>{e.product}</div>
                                        <div className='text-gray-600 text-xs font-normal  '>{e.brand}</div>
            
                                    </div>
                                    {/* Client Name */}
                                    <div className='text-gray-900 text-sm  w-1/2 sm:w-full '>{e.client}</div>
                                    {/* Request Issue Name */}

                                    <div className='text-gray-900 text-sm  w-full '>{e.issue}</div>
                                    {/* Request Status (opened,on going ,solved ,canceled) */}

                                    <div className={`flex ${ statusStyle.bg} px-2  h-5 rounded-xl text-xs ${statusStyle.text} font-semibold w-fit gap-x-2 items-center justify-center`}>
                                        <span className={`block h-[7px] w-[7px] rounded-full ${statusStyle.dot}`}/>
                                        <span className='block'>{e.status}</span>
                                    </div>
                                    {/* Payment Status (paid,not requeted ,Requested) */}

                                    <div className={`flex ${ paymentStyle.bg} px-2  h-5 rounded-xl text-xs ${ paymentStyle.text} font-semibold w-fit gap-x-2 items-center justify-center`}>
                                        <span className={`block h-[7px] w-[7px] rounded-full ${ paymentStyle.dot}`}/>
                                        <span className='block'>{e.payment}</span>
                                    </div>
                                    <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>{e.date}</div>
                                    <div className=' p-2 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                                        <EyeIcon className='text-gray-700  w-4 h-4  sm:w-5 sm:h-5 group-hover:text-white'/>
                                    </div>
                                    
                                </div>
                                
                            )
                        })
                    }
            

        </div>
            {/* ------------------------- */}
           
         

    </>

)
}
