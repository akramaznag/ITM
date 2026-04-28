import { File, Paperclip, Plus, Sparkles, Star, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import RegisterShema from '../../validations/RegisterShema';
import { useSelector } from 'react-redux';
import { addTechnician } from '../../services/AdminServices/AdminServices';
import generateUsername from '../../hooks/generateUsername';
import { clients, requestStatus, technicians } from '../../staticData/staticData';
import AdvancedFilter from '../Filter/AdvancedFilter';
import Filter from '../Filter/Filter';
import { set } from 'zod';

export default function AddRequestForm({onClose,setNotificationContent}) {

    //get the active value of the request statuses
    const [activeRequestStatus, setActiveRequestStatus] = useState(requestStatus[0].value);

    
    const [activeStatus, setActiveStatus] = useState(null);

    const fileRef=useRef();

    const [isVisible, setIsVisible] = useState(false);

    const token = useSelector(state=>state.auth.token);

    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        phone:'',
        file:null,
    })
   
    const handleChange = (key, e) => {
        const value = key==="id"? parseInt(e.target.value):  e.target.value;
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));

    };

    const hadnleFile = (e)=>{
        const file = e.target.files[0];
        if (!file) return ;

        setFormData(prev=>({
            ...prev,file:file
        }))
        setIsVisible(true)

    }

    const removeFile = ()=>{
        setIsVisible(false)
        setTimeout(()=>{

            setFormData(prev => ({ ...prev, file: null }));
                if (fileRef.current) {
                    fileRef.current.value = ""; 
                }

        },300)
    }


  

    
    // const formErrors =useFormValidation(RegisterShema,formData);
   
    // // const userName = generateUsername(formData.firstName,formData.lastName);
    // useEffect(()=>{
    //     setFormData(prev=>({
    //         ...prev,userName:userName
    //     }))

    // },[formData])

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     console.log(formData)


    //     addTechnician(formData,token)
    //     .then(res=>{
    //         console.log(res.data)
            

    //         setNotificationContent({
    //             status:"success",
    //             message:res.data.message
    //         })



    //     }).catch(err=>{
    //         console.log(err?.response?.data.message)

    //         setNotificationContent({ status: "danger",   message: err.response?.data?.message  });


    //     })
    //     onClose(null)
    // }
  return (
    <div className='flex flex-col gap-y-5  w-full lg:w-[600px]'>

        {/* Popup Heading */}
        <div className='flex flex-col  items-start'>

            <div className='flex items-center gap-x-2'>
                <div className='bg-blue-100 rounded-xl w-10 h-10 flex items-center justify-center'>
                    <Sparkles className='w-5 h-5 text-blue-600'/>

                </div>
                <div className='flex flex-col'>
                    <div className='text-black text-lg font-semibold capitalize'>Create New Request</div>
                    <p className='text-sm text-gray-500'>Create and assign a service request on behalf of a client..</p>

                </div>

            </div>
          
            
        </div>

        {/* Popup body */}
        <form onSubmit={(e)=>handleSubmit(e)} className={`grid grid-cols-2 gap-y-4 gap-x-2 w-full`}>
           
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Title</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {/* {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>} */}


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Category</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("lastName",e)} value={formData.lastName} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {/* {formErrors.lastName && <p className="text-sm font-semibold text-red-500">{formErrors.lastName}</p>} */}



            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Priority</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>       
                <input onChange={(e)=>handleChange("email",e)} value={formData.email} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {/* {formErrors.email && <p className="text-sm font-semibold text-red-500">{formErrors.email}</p>} */}



            </div>
            {/* Admin Assignement */}
             <div className='flex flex-col justify-start items-start gap-y-5 col-span-2 bg-blue-50 border border-dashed border-blue-300 rounded-lg p-4 h-auto'>

                <div className='flex items-center gap-x-3'>
                    <Sparkles className='w-4 h-4 text-blue-500'/>
                    <span className='text-blue-500 uppercase text-xs font-semibold'>Admin assignment</span>
                </div>

                <div className={`grid grid-cols-2 gap-y-4  gap-x-3 w-full`}>
                     <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                            <div className='flex items-center gap-x-1'>
                                <label className='text-sm font-semibold text-black'>Client</label>
                                <span className='text-sm font-semibold text-red-500'>*</span>
                            </div>
                            <AdvancedFilter onStatusChange={setActiveStatus} data={clients} text={'client'}/>
                            {/* <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className='bg-white  outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/> */}
                            {/* {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>} */}


                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                            <div className='flex items-center gap-x-1'>
                                <label className='text-sm font-semibold text-black'>Assign to technician</label>
                                <span className='text-sm font-semibold text-red-500'>*</span>
                            </div>
                            <AdvancedFilter onStatusChange={setActiveStatus} data={clients} text={'technician'}/>
                            {/* {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>} */}


                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                            <div className='flex items-center gap-x-1'>
                                <label className='text-sm font-semibold text-black'>Initial status</label>
                                <span className='text-sm font-semibold text-red-500'>*</span>
                            </div>
                            <Filter  data={requestStatus} onStatusChange={setActiveRequestStatus} bg={'white'}/>
                            {/* <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className='bg-white outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/> */}
                            {/* {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>} */}


                    </div>
                    <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                            <div className='flex items-center gap-x-1'>
                                <label className='text-sm font-semibold text-black'>Due date</label>
                                <span className='text-sm font-semibold text-red-500'>*</span>
                            </div>
                            <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className='bg-white outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                            {/* {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>} */}


                    </div>

                </div>





                



            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Description</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <textarea rows='4' onChange={(e)=>handleChange("phone",e)} value={formData.phone} type="text"  id="" placeholder='Detailed issue,context, and any internal notes...' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {/* {formErrors.phone && <p className="text-sm font-semibold text-red-500">{formErrors.phone}</p>} */}



            </div>
             <div className='col-span-2 ' >
                <div className='mb-3 flex flex-col justify-center items-start gap-y-2  cursor-pointer'  onClick={()=>fileRef.current.click()}>
                    <div className='flex items-center gap-x-1'>

                        <Paperclip className='w-4 h-4 text-black'/>

                        <span className='text-sm font-semibold text-black'>Attachments</span>
                        <span className='text-xs text-gray-500 capitalize ml-1'>(Optional)</span>
                    </div>
                    <div  className=' outline-none border-2 border-dashed border-gray-200  hover:border-blue-400 hover:duration-100 hover:ease-in-out rounded-lg  p-4  text-sm text-gray-900 w-full h-25 flex flex-col items-center justify-center '>
                        <Paperclip className='w-5 h-5 text-gray-600'/>
                        <div className='text-md font-semibold first-letter:capitalize'>click to upload files</div>
                        <div className='text-xs text-gray-500 first-letter:capitalize'>images, PDFs, or documents </div>
                        
                    </div>
                    <input onChange={(e)=>hadnleFile(e)} ref={fileRef} type="file" className='hidden' />

                </div>
                {/* file name */}
                    {
                       ( formData.file || isVisible==true) &&
                        
                            <div className={`w-full p-3 rounded-lg bg-gray-50 flex items-cente justify-betweenr ${isVisible ===true ? 'file-in':'file-out'}`}>
                                <div className='flex items-center gap-x-3  w-full'>
                                    <File className='w-4 h-4 text-blue-600'/>
                                    <div className='text-sm text-black'>{formData.file.name}</div>

                                </div>
                                <div className='flex items-center justify-end gap-x-3 w-full'>
                                    <div className='text-xs text-gray-700'>{formData.file.size}</div>
                                    <X onClick={(e)=>removeFile()} className='w-4 h-4 text-black hover:text-red-500 hover:duration-100 hover:ease-in'/>

                                </div>
                            </div>
                        
                    }


            </div>
             <div className='flex  flex-col-reverse  gap-y-3 md:flex-row md:items-center md:justify-end  md:gap-x-3 col-span-2'>
                <button type='reset' className='  flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize hover:bg-[hsl(var(--accent))] group duration-200'>
                   <div className='text-black text-sm font-semibold group-hover:text-white'>  reset </div>

                </button>
                    {/* {
                        Object.keys(formErrors).length>0 ? */}
                        
                        {/* <div className={`py-2 px-4 flex items-center justify-center bg-gray-300 cursor-not-allowed  text-white rounded-lg font-medium`}>
                        create
                        </div>
                        : */}
                        <button   type="submit" className={`py-2 px-4 flex items-center justify-center bg-blue-500  hover:bg-blue-600 transition  text-white  rounded-lg font-medium`}  >
                            Create
                        </button>
                        
                    {/* } */}

            </div>


        </form>

        

    </div>

  )
}
