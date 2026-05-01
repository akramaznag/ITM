import React, { useState } from 'react'
import { CheckCircle, ChevronDown, CircleAlert, Clock, File, Monitor, Phone,Search,User,Settings,LogOut, Check, Eye, EyeIcon, ArrowLeft, ChevronLast, ChevronLeft, ChevronRight, Pen, Trash } from 'lucide-react'
import { Category, paymentStatus, ProductStatus, requestStatus } from '../../staticData/staticData';
import { requests } from '../../staticData/staticData';
import { ColorsRendering } from '../../staticData/staticData';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import Pagination from '../../components/UI/Pagination';
import usePagination from '../../hooks/usePagination';
import {Status} from '../../components/UI/Status';
import { useEffect } from 'react';
import { getProducts } from '../../services/AdminServices/AdminServices';
import { useSelector } from 'react-redux';
import Notification from '../../components/UI/Notification';
import CreateButton from '../../components/UI/CreateButton';
import AddProductForm from '../../components/Forms/AddProductForm';
import Filter from '../../components/Filter/Filter';
import UpdateProductForm from '../../components/Forms/UpdateProductForm';
import DeleteConfirmation from '../../components/UI/DeleteConfirmation';

export default function AdminProducts() {
    const token = useSelector(state=>state.auth.token);
    const [notificationContent,setNotificationContent]=useState({
          status:null,
          message:null
      
    })
    const [products,setProducts] = useState([])
    const fetchProducts =()=>{
         getProducts(token).then(res=>{
                console.log(res.data);
                setProducts(res.data.data)
        }).
        catch(err=>{
            setNotificationContent({
               status: "danger", 
               message: err?.response?.data?.message || 'something went wrong,try again !'
            })
        });

    }
     useEffect(()=>{
        fetchProducts()
       
    },[]);

    const { setPopupContent } = useOutletContext();
    const navigate = useNavigate();


    
    const [activeStatus, setActiveStatus] = useState(Category[0].status);
    // const filteredrequests = activeStatus === 'all' ? requests : requests.filter(e=>e.status===activeStatus);
    
    const {currentPage,setCurrentPage,currentData,totalPages} = usePagination(products);

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
                <h1 className='font-bold text-2xl text-black'>Products Management</h1>
                <p className='text-gray-600 text-sm'>28 products · 22 active</p>
            </div>
            <CreateButton setPopupContent={setPopupContent}   popupContent = {<AddProductForm onClose={setPopupContent} setNotificationContent={setNotificationContent}/>} text={'add product'}/>
            
        </div>
        {/* search bar and filter container  */}
        <div className="mb-5 w-full flex justify-between gap-x-3">
            <div className='relative w-[60%] md:w-[86%] '>
                <Search className='absolute w-4 h-4 text-gray-500 top-3 left-3 '/>
                <input onChange={handleChange} type="text" name="" id="" placeholder='Search by name or brand' className='h-10 bg-none outline-none focus:outline-none border border-gray-400/20 focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-full py-2 pl-8 pr-4  text-sm text-gray-800'/>
            </div>
            {/* filter */}
            <div className='w-32 md:w-38 lg:w-43'>

                <Filter onStatusChange={setActiveStatus}  data={Category}/>
            </div>
            
            
           
        </div>
        {/* requests analytics section */}
        <div   className='w-full  h-auto overflow-x-auto md:overflow-x-hidden bg-white border border-gray-200 rounded-xl slide-in-from-bottom duration-600'>
               
                    {/* columns */}
                    <div className='min-w-[500px] bg-slate-100 outline-0 border-y  border-gray-200 sm:w-full md:w-full px-3 h-13 md:px-4 md:py-3 grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.7fr_1.3fr_1fr_1fr_1fr_1.6fr_0.4fr]  items-center border border-t-gray-200 border-b-gray-300 '>
                        <span className='text-gray-500 text-xs font-semibold '>id</span>
                        <span className='text-gray-500 text-xs font-semibold '>Product</span>
                        <span className='text-gray-500 text-xs font-semibold '>Category</span>
                        <span className='text-gray-500 text-xs font-semibold '>Price</span>
                        <span className='text-gray-500 text-xs font-semibold '>Stock</span>
                        <span className='text-gray-500 text-xs font-semibold '>Status</span>
                        <span className='text-gray-500 text-xs font-semibold '>Actions</span>        
                    </div>
                    {/* data */}
                    

                    {
                        !getRequestBySearch?
                            
                        currentData.map((e,index)=>{
                            const statusStyle = ColorsRendering.product[e.status];
                            const statusObj = ProductStatus.find(item=>item.status===e.status);
                            const category = Category.find(item=>item.status===e.category);
                            const statusValue=statusObj ? statusObj.value : e.status;
                            const categoryValue = category? category.value: e.category;
                            
                            return (

                                 <Link to={`/admin/technicians/${e.id}`} key={e.id}>
                                <div className='min-w-[500px] sm:w-full  md:w-full px-3 py-2 md:px-4 md:py-3 grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[0.7fr_1.3fr_1fr_1fr_1fr_1.6fr_0.4fr]  items-center  outline-0 border-t  border-gray-200 gap-x-3 md:gap-x-0 hover:bg-slate-100  hover:cursor-pointer group'>
                                    
                                    {/* request ID */}
                                    <div className='text-blue-500 text-sm font-mono w-1/2 sm:w-full '>
                                       {`PDT-${e.id}`}
                                    </div>
                                    {/* request product and brand */}
                                    <div className=''>
                                        <div className='text-black text-sm font-semibold w-1/2 sm:w-full capitalize'>{e.name}</div>
                                        <div className='text-gray-600 text-xs font-normal capitalize  '>{e.brand}</div>
            
                                    </div>
                                    
                                    {/* Request Issue Name */}

                                    <div className='text-gray-900 w-fit text-xs   flex items-center justify-center py-1 px-2 rounded-2xl bg-gray-100 '>{categoryValue}</div>
                                    <div className='text-black text-sm font-semibold w-full '>{e.price} MAD</div>
                                    <div className='text-gray-900 text-sm  w-full '>{e.stock}</div>
                                    {/* Request Status (opened,on going ,solved ,canceled) */}

                                    <Status bgColor={statusStyle.bg} textColor={statusStyle.text} dotColor={statusStyle.dot} content={statusValue} />
                                    <div className='text-gray-900 text-sm w-full flex items-center gap-x-2 visible lg:invisible group-hover:visible  group/item'>
                                        <button  onClick={(event)=>{ 
                                            event.preventDefault();
                                            event.stopPropagation();
                                            setPopupContent( <UpdateProductForm 
                                                                    id={e.id}
                                                                    onClose={setPopupContent} 
                                                                    setNotificationContent={setNotificationContent} 
                                                                    refreshProducts={fetchProducts}
    
                                                                /> );
                                            }}
                                            className='p-2 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group/edit duration-200'>
                                            <Pen className='text-gray-700  w-4 h-4 group-hover/edit:text-white '/>
                                        </button>
                                         <button onClick={(event)=>{ 
                                            event.preventDefault();

                                            event.stopPropagation();

                                            setPopupContent( <DeleteConfirmation 
                                                                   
                                                                    onClose={setPopupContent} 
                                                                    setNotificationContent={setNotificationContent} 
                                                                    id={e.id}
                                                                    text={e.name}
                                                                    refreshProducts={fetchProducts}
    
                                                                /> );
                                            }} className='p-2 rounded-lg flex items-center justify-center justify-self-end w-fit hover:bg-[hsl(var(--accent))] group/edit duration-200'>
                                            <Trash className='text-red-500  w-4 h-4 group-hover/edit:text-white '/>
                                        </button>

                                    </div>

                                     
                                     
                                   
                                </div>
                                </Link>
                                
                            )
                        })
                        :
                        <>
                         <div className='min-w-[650px] sm:w-full  md:w-full px-3 py-2 md:px-4 md:py-3 grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-center    border border-t-gray-200 border-b-gray-300 '>
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
                                </div>
                        
                        </>

                    }
                    {
                        !getRequestBySearch ?
                       <Pagination  currentPage={currentPage} totalPages={totalPages}  setCurrentPage={setCurrentPage}/>
                       : ''
                    }
                   
            

        </div>
        <Notification isOpen={notificationContent.message && 
            notificationContent.status !==null}   
            onClose={() => setNotificationContent({ status: null, message: null })} 
            message={notificationContent.message} status={notificationContent.status}>
                                            </Notification>
           
         

    </>

)
}
