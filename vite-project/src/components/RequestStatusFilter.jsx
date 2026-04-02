import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon } from 'lucide-react'
import { requestStatus } from '../staticData/staticData';
import { useLocation } from 'react-router-dom';

export default function RequestStatusFilter({onStatusChange}) {
    const location = useLocation();
    const isGetRequestPage = location.pathname.startsWith('/admin/requests/');

    const filteredrequestStatus = isGetRequestPage  ? requestStatus.slice(1) : requestStatus;

    const defaultStatus = isGetRequestPage ? 'on_going' : 'all';
    const defaultValue = isGetRequestPage ? 'On Going' : 'All Status';


    const [isFilteropened,setisFilteropened] =useState(false)
    const [filterValue,setFilterValue]=useState({
        status:defaultStatus,
        value:defaultValue
    })
    const [activeStatus, setActiveStatus] = useState(defaultStatus);  
    const [isHoveringList, setIsHoveringList] = useState(false); 
   
  return (
         <div className='relative w-32 md:w-38 lg:w-41 cursor-pointer ' onClick={()=>setisFilteropened(!isFilteropened)}>

                <ChevronDown className='absolute w-4 h-4 text-gray-500 flex justify-self-end top-3 right-5'/>
                <div  className={`flex items-center justify-start h-10 bg-none outline-none focus:outline-none  ${`${isFilteropened ? 'border-2 border-blue-500 duration-50 ease-in-out':'border border-gray-400/20'}  `} rounded-xl w-full py-2 px-3  text-sm text-gray-800`}>
                 <span className='block capitalize'>{filterValue.value}</span>
                </div>
                {/*popup  */}
                <div onMouseEnter={() => setIsHoveringList(true)} onMouseLeave={() => setIsHoveringList(false)} className={`${isFilteropened?'block':'hidden'} absolute top-12 right-0 w-32 md:w-38 lg:w-41 h-auto p-1 bg-white rounded-xl shadow-lg z-40 animate-in slide-in-from-top duration-300`}>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex flex-col gap-y-1'>
                            {
                                    filteredrequestStatus.length > 0 ? filteredrequestStatus.map(e => {
                                        const isActiveItem = activeStatus === e.status && !isHoveringList;
                                        return (
                                                    <div key={e.status}  onClick={() => { 

                                                        setFilterValue({status: e.status, value: e.value});
                                                        setActiveStatus(e.status);
                                                        setisFilteropened(false); 
                                                        onStatusChange(e.status);

                                                        }}
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

)
}
