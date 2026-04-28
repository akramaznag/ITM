import { Plus } from 'lucide-react'
import React from 'react'

export default function CreateButton({popupContent,setPopupContent,text}) {

  return (
     <button onClick={()=>setPopupContent(popupContent)} className='bg-blue-500 hover:bg-blue-500/90 cursor-pointer flex items-center justify-center  rounded-xl h-10 px-5'>
        <div className='capitalize  flex items-center gap-x-3'>
            {/* <div className='text-2xl font-light relative bottom-[2px]'>+</div> */}
            <Plus className='w-4 h-4 font-light'/>
            <div className='text-sm font-semibold'>{text}</div>
        </div>
     </button>
  )
}
