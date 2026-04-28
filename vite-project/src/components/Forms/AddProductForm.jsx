import {  Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import RegisterShema from '../../validations/RegisterShema';
import { useSelector } from 'react-redux';
import { addProduct, addTechnician } from '../../services/AdminServices/AdminServices';
import generateUsername from '../../hooks/generateUsername';
import { Category, ProductStatus } from '../../staticData/staticData';
import {AddProductShema} from '../../validations/ProductShema';
import Filter from '../Filter/Filter'

export default function AddProductForm({onClose,setNotificationContent}) {
    const token = useSelector(state=>state.auth.token);
    const [formData,setFormData] = useState({
        name:'',
        brand:'',
        category:Category[0].status,
        status:ProductStatus[0].status,
        price:1.00,
        stock:0,
    })
    const [activeCategory, setActiveCategory] = useState(formData.category);
    const [activeStatus, setActiveStatus] = useState(formData.status);
    
   
    const handleChange = (key, e) => {
        const value = key==="price"? parseFloat(e.target.value):
                      key==="stock" ? parseInt(e.target.value) :e.target.value;
        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));

    };
    
    useEffect(()=>{
        setFormData((prev)=>({
            ...prev,category:activeCategory,status:activeStatus
        }))
    },[activeCategory,activeStatus]);
    const formErrors =useFormValidation(AddProductShema,formData);
    console.log(formErrors)
   
   

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log(formData)

        addProduct(formData,token)
        .then(res=>{
            console.log(res.data)
            

            setNotificationContent({
                status:"success",
                message:res.data.message
            })
       



        })
        .catch(err=>{
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
                <div className='text-black text-lg font-semibold capitalize'>Add New Product</div>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Fill in the details below to create a new product.</p>
            </div>
            
        </div>

        {/* Popup body */}
        <form onSubmit={(e)=>handleSubmit(e)} className={` grid grid-cols-2  gap-x-2 w-full ${Object.keys(formErrors).length>0 ? 'gap-y-3' : 'gap-y-4'} `}>
           
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Name</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("name",e)} value={formData.name} type="text"  id="" placeholder='e.g. apple macbook pro' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.name && <p className="text-sm font-semibold text-red-500">{formErrors.name}</p>}


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Brand</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("brand",e)} value={formData.brand} type="text"  id="" placeholder='e.g. apple' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.brand && <p className="text-sm font-semibold text-red-500">{formErrors.brand}</p>}



            </div>
          
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Category</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>       
                <Filter data={Category} onStatusChange={setActiveCategory}/>
                {formErrors.category && <p className="text-sm font-semibold text-red-500">{formErrors.category}</p>} 



            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Status</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <Filter data={ProductStatus} onStatusChange={setActiveStatus}/>
                {formErrors.status && <p className="text-sm font-semibold text-red-500">{formErrors.status}</p>} 





            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Price</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("price",e)} value={parseFloat(formData.price)} type="number"  id="" placeholder='e.g. 5000 MAD' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.price && <p className="text-sm font-semibold text-red-500">{formErrors.price}</p>}



            </div>
             <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <div className='flex items-center gap-x-1'>

                    <label className='text-sm font-semibold text-black'>Stock</label>
                    <span className='text-sm font-semibold text-red-500'>*</span>
                </div>
                <input onChange={(e)=>handleChange("stock",e)} value={parseInt(formData.stock)} type="number"  id="" placeholder='e.g. 5' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>
                {formErrors.stock && <p className="text-sm font-semibold text-red-500">{formErrors.stock}</p>}



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
