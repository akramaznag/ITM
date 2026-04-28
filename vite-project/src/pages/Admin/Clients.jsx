import React, { useState } from 'react'
import { CheckCircle, Phone,ChevronDown, CircleAlert, Clock, File, Monitor,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, ChevronLast, ChevronLeft, ChevronRight, UserIcon, Users, CaseLower } from 'lucide-react'
import { userStatus , ColorsRendering, clients} from '../../staticData/staticData';
import { Link, useOutletContext } from 'react-router-dom';
import Pagination from '../../components/UI/Pagination';
import usePagination from '../../hooks/usePagination';
import { Status } from '../../components/UI/Status';
import FindTechnicianForm from '../../components/Forms/FindTechnicianForm';
import { useEffect } from 'react';
import { getClients, getTechnicians } from '../../services/AdminServices/AdminServices';
import { useSelector} from 'react-redux';
import Notification from '../../components/UI/Notification';
import FindClientForm from '../../components/Forms/FindClientForm';



export default function Clients() {

    const token = useSelector(state=>state.auth.token);
    const [notificationContent,setNotificationContent]=useState({
          status:null,
          message:null
      
    })
    const [clients,setClients] =useState([]);
    const [filteredClient,setfilteredClient] =useState({});
    const fetchClients =()=>{
        useEffect(()=>{
            getClients(token).then(res=>{
                console.log(res.data);
                setClients(res.data.data)
        }).catch(err=>console.log(err?.response?.data?.error || err.message));
            
        },[])
    }
    fetchClients();

    
    const [activeStatus, setActiveStatus] = useState("all");
    
    const {currentPage,setCurrentPage,currentData,totalPages} = usePagination(clients || []);
    const { setPopupContent } = useOutletContext();

    const statusStyle = ColorsRendering.user[filteredClient.status];
    const userObj = userStatus.find(item=>item.status===filteredClient.status);
    const userStatusValue=userObj ? userObj.value : filteredClient.status;
    


    // const [searchValue,setSearchValue] = useState('')
    // // obtain search value
    // const handleChange = (e)=> setSearchValue(e.target.value);
   

    // const getRequestBySearch = currentData.find(e=>e.id === searchValue);

    // const statusStyle = ColorsRendering.status[getRequestBySearch?.status] || null;
    // const paymentStyle = ColorsRendering.payment[getRequestBySearch?.payment] || null;


    
  return (
       <>
      {/*admin Requests */}   
        <div className='mb-4 w-full flex justify-between'>
            <div className=''>
                <h1 className='font-bold text-2xl text-black'>Clients</h1>
                <p className='text-gray-600 text-sm'>Manage your client accounts</p>
            </div>
            <div className='bg-blue-100/90 text-blue-600 cursor-pointer flex items-center justify-center  rounded-xl h-9 px-4'>
                <div className='capitalize  flex items-center gap-x-2'>
                    <Users className='w-5 h-5 font-semibold '/>
                    <div className='text-sm font-semibold capitalize'>{clients.length || '0'} Clients</div>
                 </div>
            </div>
        </div>
        
        {/* Technicians data */}
       <div className="text-black bg-white  outline-0 border  border-gray-200  rounded-xl    h-auto flex flex-col slide-in-from-bottom duration-600">
       
                             {/* Call information heading */}
                               <div className='px-4 py-5 flex justify-between items-center'>
                                   <div className='flex items-center justify-start'>
                                   
                                     <h1 className='font-semibold'>All Clients</h1>
                                   </div>
                                   <button onClick={()=>setPopupContent(<FindClientForm onClose={setPopupContent} setNotificationContent={setNotificationContent} setfilteredClient={setfilteredClient} />)}  className='bg-slate-100  border border-gray-400/30 hover:bg-[hsl(var(--accent))] group duration-200 cursor-pointer flex items-center justify-center  rounded-xl h-9 px-3 w-fit '>
                                         <div className='capitalize  flex items-center gap-x-2 group-hover:text-white'>
                                             <Search className='w-4 h-4 font-light relative '/>
                                             <div className='text-sm font-semibold capitalize'>Find</div>
                                         </div>
                                   </button>
       
                               </div>
                               {/* Call information Body table*/}
                               <div   className='bg-green w-full overflow-x-auto  h-auto   '>
                                 <div className='min-w-[500px] md:min-w-0'>
       
                                     {/* columns */}
                                     <div className='w-full px-3 bg-slate-100 outline-0 border-y  border-gray-200 h-13  grid grid-cols-[1fr_1fr_1fr_1fr] items-center gap-x-3 md:gap-x-0'>
                                         <span className='text-gray-500 text-xs font-semibold '>Client ID</span>
                                         <span className='text-gray-500 text-xs font-semibold '>Full Name </span>
                                         <span className='text-gray-500 text-xs font-semibold '>Username</span>
                                         <span className='text-gray-500 text-xs font-semibold '>Status</span>
                                     </div>
                                     {/* data */}
                                     {
                                        Object.keys(filteredClient).length >0 ?
                                         <>
                                                <Link to={`/admin/clients/${filteredClient.id}`} >
                                                 <div className='px-3 py-3 min-h-13  grid grid-cols-[1fr_1fr_1fr_1fr] items-center outline-0 border-t  border-gray-200 gap-x-3 md:gap-x-0 hover:bg-slate-100  hover:cursor-pointer'>
                                                     {/* Technician ID*/}
                                                     
                                                     <div className='text-blue-600 text-sm font-mono w-1/2 sm:w-full '>
                                                         {`TECH-${filteredClient.id}`}
                                                      </div>
                                                     {/* Full Name */}
                                                   
                                                     <div className='text-black text-sm font-semibold w-1/2 sm:w-full'>{`${filteredClient.firstName} ${filteredClient.lastName}`}</div>
                                                   
                                                     {/* Username */}
                                                     <div className='text-gray-500 text-sm  w-[60%]  '>{filteredClient.userName}</div>
                                                     {/* Status */}
                                                     <Status bgColor={statusStyle.bg} textColor={statusStyle.text} dotColor={statusStyle.dot} content={userStatusValue}/>
       
                                                      {/* Call Details info Saved Bay */}
       
                                                   
                                                   
                                                     
                                                     
                                                 </div>
                                                 </Link>
                                                </>
                                        :  currentData.map((e,index)=>{
                                            const statusStyle = ColorsRendering.user[e.status];
                                            const userObj = userStatus.find(item=>item.status===e.status);
                                            const userStatusValue=userObj ? userObj.value : e.status;

                                            
                                           
                                             return (
                                                <>
                                                <Link to={`/admin/clients/${e.id}`} key={index}>
                                                 <div className='px-3 py-3 min-h-13  grid grid-cols-[1fr_1fr_1fr_1fr] items-center outline-0 border-t  border-gray-200 gap-x-3 md:gap-x-0 hover:bg-slate-100  hover:cursor-pointer'>
                                                     {/* Technician ID*/}
                                                     
                                                     <div className='text-blue-600 text-sm font-mono w-1/2 sm:w-full '>
                                                         {`CLT-${e.id}`}
                                                      </div>
                                                     {/* Full Name */}
                                                   
                                                     <div className='text-black text-sm font-semibold w-1/2 sm:w-full'>{`${e.firstName} ${e.lastName}`}</div>
                                                   
                                                     {/* Username */}
                                                     <div className='text-gray-500 text-sm  w-[60%]  '>{e.userName}</div>
                                                     {/* Status */}
                                                     <Status bgColor={statusStyle.bg} textColor={statusStyle.text} dotColor={statusStyle.dot} content={userStatusValue}/>
       
                                                      {/* Call Details info Saved Bay */}
       
                                                   
                                                   
                                                     
                                                     
                                                 </div>
                                                 </Link>
                                                </>
                                                 
                                             )
                                         })
                                     }
                                    { ! Object.keys(filteredClient).length >0 ? <Pagination  currentPage={currentPage} totalPages={totalPages}  setCurrentPage={setCurrentPage}/> :''}
                                     
                                 </div>
                         
                       
       
                               </div>
                               <Notification isOpen={notificationContent.message && notificationContent.status !==null}   onClose={() => setNotificationContent({ status: null, message: null })} message={notificationContent.message} status={notificationContent.status}>
                                    </Notification>
       
                             
                           </div>
           
         

    </>

)
}
