import { Plus, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import RegisterShema from '../../validations/RegisterShema';
import { useSelector } from 'react-redux';
import { addTechnician, deleteProduct } from '../../services/AdminServices/AdminServices';
import generateUsername from '../../hooks/generateUsername';

export default function DeleteConfirmation({onClose,setNotificationContent,id,text,refreshProducts}) {
    const token = useSelector(state=>state.auth.token);
    
    const handleDelete = (e)=>{
        e.preventDefault();
        


        deleteProduct(id,token)
        .then(res=>{
            console.log(res.data)
            refreshProducts()
            

            setNotificationContent({
                status:"warning",
                message:res.data.message
            })



        }).catch(err=>{
            console.log(err?.response?.data.message)

            setNotificationContent({ status: "danger",   message: err.response?.data?.message  });


        })
        onClose(null)
    }
  return (
    <div className='flex flex-col gap-y-5  w-[400px]'>

        {/* Popup Heading */}
        <div className='flex flex-col  items-start gap-y-2'>

            <div className='flex items-center gap-x-2'>
                <Trash2 className='w-5 h-5 text-red-500'/>
                <div className='text-black text-lg font-semibold capitalize'>delete product</div>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Are you sure you want to delete
                <span className='text-black text-sm capitalize font-semibold mx-1'>{text}</span> 
                ? This action cannot be undone.</p>
            </div>
            
        </div>

        {/* Popup body */}
           
        
        <div className='flex  flex-col-reverse  gap-y-3 md:flex-row md:items-center md:justify-end  md:gap-x-3 col-span-2'>
                <button type='reset' className='  flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize hover:bg-[hsl(var(--accent))] group duration-200'>
                    <div className='text-black text-sm font-semibold group-hover:text-white capitalize'> cancel </div>

                </button>
                    
                <button  onClick={(e)=>handleDelete(e)} type="button" className={`py-2 px-4 flex items-center justify-center bg-red-500  hover:bg-red-600 transition  text-white  rounded-lg font-medium capitalize`}  >
                        delete
                </button>
                
            

        </div>



        

    </div>

  )
}
