import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useFormValidation from '../../hooks/useFormValidation'
import { getFilteredClient } from '../../services/AdminServices/AdminServices'
import { useSelector } from 'react-redux'

export default function FindClientForm({onClose,setNotificationContent,setfilteredClient}) {
    const token = useSelector(state=>state.auth.token);
    const [formData,setFormData] = useState({
        id:null,
        userName:'',
        firstName:'',
        lastName:''
    })
   
    const handleChange = (key, e) => {
        const value = key==="id"? parseInt(e.target.value):  e.target.value;
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));

    };
    
    // const formErrors =useFormValidation(FindTechnicianSchema,formData);
    // console.log(formErrors)

    const handleSubmit = (e)=>{

        e.preventDefault();

        getFilteredClient(formData,token)
        .then(res=>{
            console.log(res.data)
            setfilteredClient(res.data.data)

            setNotificationContent({
                status:"success",
                message:res.data.message
            })



        }).catch(err=>{
            const message=err?.response?.data?.message;
            setfilteredClient({})

            setNotificationContent({ status: "danger",   message: message });


        })
        onClose(null)
    }
  return (
    <div className='flex flex-col gap-y-5'>

        {/* Popup Heading */}
        <div className='flex flex-col  items-start'>

            <div className='flex items-center gap-x-2'>
                <Search className='w-5 h-5 text-blue-600'/>
                <div className='text-black text-lg font-semibold capitalize'>Find Client</div>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Filter clients by any combination of fields.</p>
            </div>
            
        </div>

        {/* Popup body */}
        <form onSubmit={(e)=>handleSubmit(e)} className='w-full h-auto grid grid-cols-2 gap-x-3 gap-y-4'>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <label className='text-sm font-semibold text-black'>Client ID</label>
                <input onChange={(e)=>handleChange("id",e)} value={parseInt(formData.id)} type="number"  id="" placeholder='e.g. 22' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <label className='text-sm font-semibold text-black'>Username</label>
                <input onChange={(e)=>handleChange("userName",e)} value={formData.userName} type="text"  id="" placeholder='e.g. AMARTIN' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <label className='text-sm font-semibold text-black'>First Name</label>
                <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <label className='text-sm font-semibold text-black'>Last Name</label>
                <input onChange={(e)=>handleChange("lastName",e)} value={formData.lastName} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
             <div className='flex  flex-col-reverse  gap-y-3 md:flex-row md:items-center md:justify-end  md:gap-x-3 col-span-2'>
                <button type='reset' className='  flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize hover:bg-[hsl(var(--accent))] group duration-200'>
                   <div className='text-black text-sm font-semibold group-hover:text-white'>  reset </div>

                </button>
                <button type='submit' className=' text-white text-sm font-semibold flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize bg-blue-500 hover:bg-blue-500/90'>
                    search

                </button>

            </div>


        </form>

        

    </div>

  )
}
