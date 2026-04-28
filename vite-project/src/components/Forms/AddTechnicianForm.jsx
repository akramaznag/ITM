import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import RegisterShema from '../../validations/RegisterShema';
import { useSelector } from 'react-redux';
import { addTechnician } from '../../services/AdminServices/AdminServices';
import generateUsername from '../../hooks/generateUsername';

export default function AddTechnicianForm({onClose,setNotificationContent}) {
    const token = useSelector(state=>state.auth.token);
    const [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        password:'',
        phone:'',
    })
   
    const handleChange = (key, e) => {
        const value = key==="id"? parseInt(e.target.value):  e.target.value;
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));

    };
    
    const formErrors =useFormValidation(RegisterShema,formData);
   
    const userName = generateUsername(formData.firstName,formData.lastName);
    useEffect(()=>{
        setFormData(prev=>({
            ...prev,userName:userName
        }))

    },[formData])

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)


        addTechnician(formData,token)
        .then(res=>{
            console.log(res.data)
            

            setNotificationContent({
                status:"success",
                message:res.data.message
            })



        }).catch(err=>{
            console.log(err?.response?.data.message)

            setNotificationContent({ status: "danger",   message: err.response?.data?.message  });


        })
        onClose(null)
    }
  return (
    <div className='flex flex-col gap-y-5'>

        {/* Popup Heading */}
        <div className='flex flex-col  items-start'>

            <div className='flex items-center gap-x-2'>
                <Plus className='w-5 h-5 text-blue-600'/>
                <div className='text-black text-lg font-semibold capitalize'>Add New Technician</div>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Fill in the details below to create a new technician.</p>
            </div>
            
        </div>

        {/* Popup body */}
        <form onSubmit={(e)=>handleSubmit(e)} className={`${Object.keys(formErrors).length>0 ? 'gap-y-2' : 'gap-y-4'}  grid grid-cols-2  gap-x-2 w-full`}>
           
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>First Name</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("firstName",e)} value={formData.firstName} type="text"  id="" placeholder='e.g. Alice' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.firstName && <p className="text-sm font-semibold text-red-500">{formErrors.firstName}</p>}


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Last Name</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("lastName",e)} value={formData.lastName} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.lastName && <p className="text-sm font-semibold text-red-500">{formErrors.lastName}</p>}



            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Email</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>       
                <input onChange={(e)=>handleChange("email",e)} value={formData.email} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.email && <p className="text-sm font-semibold text-red-500">{formErrors.email}</p>}



            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Password</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("password",e)} value={formData.password} type="password"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                    {formErrors.password && <p className="text-sm font-semibold text-red-500">{formErrors.password}</p>}



            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Phone</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("phone",e)} value={formData.phone} type="text"  id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.phone && <p className="text-sm font-semibold text-red-500">{formErrors.phone}</p>}



            </div>
             <div className='flex  flex-col-reverse  gap-y-3 md:flex-row md:items-center md:justify-end  md:gap-x-3 col-span-2'>
                <button type='reset' className='  flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize hover:bg-[hsl(var(--accent))] group duration-200'>
                   <div className='text-black text-sm font-semibold group-hover:text-white'>  reset </div>

                </button>
                    {
                        Object.keys(formErrors).length>0 ?
                        
                        <div className={`py-2 px-4 flex items-center justify-center bg-gray-300 cursor-not-allowed  text-white rounded-lg font-medium`}>
                        create
                        </div>
                        :
                        <button   type="submit" className={`py-2 px-4 flex items-center justify-center bg-blue-500  hover:bg-blue-600 transition  text-white  rounded-lg font-medium`}  >
                            Create
                        </button>
                        
                    }

            </div>


        </form>

        

    </div>

  )
}
