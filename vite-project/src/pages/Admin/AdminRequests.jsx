import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react'
import { paymentStatus, requestStatus } from '../../staticData/staticData';
import { requests } from '../../staticData/staticData';
import { ColorsRendering } from '../../staticData/staticData';
import { Link, useOutletContext } from 'react-router-dom';
import Pagination from '../../components/UI/Pagination';
import usePagination from '../../hooks/usePagination';
import Filter from '../../components/Filter/Filter';
import {Status} from '../../components/UI/Status';
import { useSelector } from 'react-redux';
import CreateButton from '../../components/UI/CreateButton';
import AddRequestForm from '../../components/Forms/AddRequestForm';

export default function AdminRequests() {
    
    
    const { setPopupContent } = useOutletContext();
    const token = useSelector(state=>state.auth.token);
    const [notificationContent,setNotificationContent]=useState({
          status:null,
          message:null
      
    })
    
    const [activeStatus, setActiveStatus] = useState("all");
    const filteredrequests = activeStatus === 'all' ? requests : requests.filter(e=>e.status===activeStatus);
    
    const {currentPage,setCurrentPage,currentData,totalPages} = usePagination(filteredrequests);

    const [searchValue,setSearchValue] = useState('')
    // obtain search value
    const handleChange = (e)=> setSearchValue(e.target.value);
   

    const getRequestBySearch = currentData.find(e=>e.id === searchValue);

    const statusStyle = ColorsRendering.status[getRequestBySearch?.status] || null;
    const paymentStyle = ColorsRendering.payment[getRequestBySearch?.payment] || null;


    
  return (
       <>
      {/*admin Requests */}   
        <div className='mb-4 w-full flex justify-between'>
            <div className=''>
                <h1 className='font-bold text-2xl text-black'>Requests</h1>
                <p className='text-gray-600 text-sm'>Manage all service requests</p>
            </div>
            <CreateButton setPopupContent={setPopupContent}   popupContent = {<AddRequestForm onClose={setPopupContent} setNotificationContent={setNotificationContent}/>} text={'add request'}/>
           
        </div>
        {/* search bar and filter container  */}
        <div className="mb-5 w-full flex justify-between gap-x-3">
            <div className='relative w-[60%] md:w-[86%] '>
                <Search className='absolute w-4 h-4 text-gray-500 top-3 left-3 '/>
                <input onChange={handleChange} type="text" name="" id="" placeholder='Search requests by ID  ex: REQ-001...' className='h-10 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-2 pl-8 pr-4  text-sm text-gray-800'/>
            </div>
            {/* filter */}
            <div className='w-32 md:w-38 lg:w-43'>

                <Filter onStatusChange={setActiveStatus} data={requestStatus} />
            </div>
            
            
           
        </div>
        {/* requests analytics section */}
        <div   className='w-full  h-auto overflow-x-auto md:overflow-x-hidden bg-white border border-gray-200 rounded-xl slide-in-from-bottom duration-600'>
               
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
                        !getRequestBySearch?
                            
                        currentData.map((e,index)=>{
                            const statusStyle = ColorsRendering.status[e.status];
                            const paymentStyle = ColorsRendering.payment[e.payment];
                            const statusObj = requestStatus.find(item=>item.status===e.status);
                            const paymentObj = paymentStatus.find(item=>item.status===e.payment);
                            const statusValue=statusObj ? statusObj.value : e.status;
                            const paymentValue=paymentObj ? paymentObj.value : e.payment;
                            
                            return (

                                <div className='min-w-[650px] sm:w-full  md:w-full px-3 py-2 md:px-4 md:py-3 grid grid-cols-[0.8fr_1.2fr_0.8fr_2fr_1.2fr_1.5fr_1fr_0.5fr] md:grid-cols-[0.8fr_1.2fr_1fr_1.5fr_1fr_1.5fr_1fr_0.5fr] items-center  border-t border-t-gray-200  '>
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

                                    <Status bgColor={statusStyle.bg} textColor={statusStyle.text} dotColor={statusStyle.dot} content={statusValue} />
                                    {/* Payment Status (paid,not requeted ,Requested) */}

                                    <Status bgColor={paymentStyle.bg} textColor={paymentStyle.text} dotColor={paymentStyle.dot} content={paymentValue} />
                                     
                                    <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>{e.date}</div>
                                     
                                    <Link to={'/admin/requests/1'} className=' p-2 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                                        <EyeIcon className='text-gray-700  w-4 h-4  sm:w-5 sm:h-5 group-hover:text-white'/>
                                    </Link>
                                    
                                </div>
                                
                            )
                        })
                        :
                        <>
                         <div className='min-w-[650px] sm:w-full  md:w-full px-3 py-2 md:px-4 md:py-3 grid grid-cols-[0.8fr_1.2fr_0.8fr_2fr_1.2fr_1.5fr_1fr_0.5fr] md:grid-cols-[0.8fr_1.2fr_1fr_1.5fr_1fr_1.5fr_1fr_0.5fr] items-center    border border-t-gray-200 border-b-gray-300 '>
                                    {/* request ID */}
                                    <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full '>
                                     <Link to='/admin/requests/id'> {getRequestBySearch.id}</Link>
                                    </div>
                                    {/* request product and brand */}
                                    <div className=''>
                                        <div className='text-black text-sm font-semibold w-1/2 sm:w-full'>{getRequestBySearch.product}</div>
                                        <div className='text-gray-600 text-xs font-normal  '>{getRequestBySearch.brand}</div>
            
                                    </div>
                                    {/* Client Name */}
                                    <div className='text-gray-900 text-sm  w-1/2 sm:w-full '>{getRequestBySearch.client}</div>
                                    {/* Request Issue Name */}

                                    <div className='text-gray-900 text-sm  w-full '>{getRequestBySearch.issue}</div>
                                    {/* Request Status (opened,on going ,solved ,canceled) */}

                                    <div className={`flex ${ statusStyle.bg} px-2  h-5 rounded-xl text-xs ${statusStyle.text} font-semibold w-fit gap-x-2 items-center justify-center`}>
                                        <span className={`block h-[7px] w-[7px] rounded-full ${statusStyle.dot}`}/>
                                        <span className='block'>{getRequestBySearch.status}</span>
                                    </div>
                                    {/* Payment Status (paid,not requeted ,Requested) */}

                                    <div className={`flex ${ paymentStyle.bg} px-2  h-5 rounded-xl text-xs ${ paymentStyle.text} font-semibold w-fit gap-x-2 items-center justify-center`}>
                                        <span className={`block h-[7px] w-[7px] rounded-full ${ paymentStyle.dot}`}/>
                                        <span className='block'>{getRequestBySearch.payment}</span>
                                    </div>
                                    <div className='text-gray-500 text-sm font-semibold  w-1/2 sm:w-full'>{getRequestBySearch.date}</div>
                                    <div className=' p-2 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group duration-200'>
                                        <EyeIcon className='text-gray-700  w-4 h-4  sm:w-5 sm:h-5 group-hover:text-white'/>
                                    </div>
                                    
                                </div>
                        
                        </>

                    }
                    {
                        !getRequestBySearch ?
                       <Pagination  currentPage={currentPage} totalPages={totalPages}  setCurrentPage={setCurrentPage}/>
                       : ''
                    }
                   
            

        </div>
           
         

    </>

)
}
