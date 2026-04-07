import { Search } from 'lucide-react'
import React from 'react'

export default function FindTechnicianForm() {
  return (
    <div className='flex flex-col gap-y-5'>

        {/* Popup Heading */}
        <div className='flex flex-col  items-start'>

            <div className='flex items-center gap-x-2'>
                <Search className='w-5 h-5 text-blue-600'/>
                <div className='text-black text-lg font-semibold capitalize'>Find Technician</div>
            </div>
            <div>
                <p className='text-sm text-gray-500'>Filter technicians by any combination of fields.</p>
            </div>
            
        </div>

        {/* Popup body */}
        <form className='w-full h-auto grid grid-cols-2 gap-x-3 gap-y-4'>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <label className='text-sm font-semibold text-black'>Technician ID</label>
                <input type="text" name="" id="" placeholder='e.g. TECH-001' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-2'>
                <label className='text-sm font-semibold text-black'>Username</label>
                <input type="text" name="" id="" placeholder='e.g. AMARTIN' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <label className='text-sm font-semibold text-black'>First Name</label>
                <input type="text" name="" id="" placeholder='e.g. Alice' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
            <div className='flex flex-col justify-center items-start gap-y-2 col-span-1'>
                <label className='text-sm font-semibold text-black'>Last Name</label>
                <input type="text" name="" id="" placeholder='e.g. Martin' className=' outline-none border border-gray-200 focus:outline-none  focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl  py-2.5 px-3  text-sm text-gray-900 w-full'/>


            </div>
             <div className='flex  flex-col-reverse  gap-y-3 md:flex-row md:items-center md:justify-end  md:gap-x-3 col-span-2'>
                <button type='reset' className='  flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize hover:bg-[hsl(var(--accent))] group duration-200'>
                   <div className='text-black text-sm font-semibold group-hover:text-white'>  reset </div>

                </button>
                <button type='reset' className=' text-white text-sm font-semibold flex justify-center items-center py-2 px-4 rounded-lg border border-gray-200 capitalize bg-blue-500 hover:bg-blue-500/90'>
                    search

                </button>

            </div>


        </form>

        

    </div>

  )
}
