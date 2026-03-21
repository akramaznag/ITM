import { Settings, Settings2, Settings2Icon, Wrench } from 'lucide-react'
import React from 'react'

export default function SideBar({isOpen}) {
    console.log(isOpen)
  return (
    <div className={`h-screen ${isOpen? 'w-[20%] slide-in-from-left duration-500' :'w-[4%] slide-in-from-right duration-500'} bg-slate-900`}>

      {/* website name */}
      <div className='h-18 flex justify-start items-center gap-x-3 px-4'>
        {/* website icon */}
        <div className=' bg-blue-500 rounded-lg flex items-center justify-center w-9 h-9'>
          <Wrench className='w-5 h-5 font-bold'/>
        </div>
        {/* website title and subtitle */}
        <div>
          <h1 className='font-bold'>ITM</h1>
          <p className='text-xs text-gray-500 font-normal tracking-wide'>IT MAROC</p>
        </div>
      </div>

    </div>
  )
}
