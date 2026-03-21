import { Search ,Bell,Menu, User, Settings, LogOut, Settings2} from 'lucide-react'
import React, { useState } from 'react'

export default function Header({isOpen,toggleSideBar}) {
    const [isDropdownPopupOpened,setisDropdownPopupOpened] =useState(false)
    console.log(isOpen)

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500`}>
        <div className='h-14 px-10 bg-white flex items-center w-full'>
            <div className='w-full h-12 bg-white flex items-center justify-between'>
                {/* search bar and side bar button */}
                <div className='flex gap-x-3 items-center '>
                    <button onClick={toggleSideBar}>
                        <Menu className='w-5 h-5 text-black'/>
                    </button>
                    <div className='hidden md:block'>
                        <Search className='absolute w-4 h-4 text-gray-600 top-5 left-20 '/>
                        <input type="text" name="" id="" placeholder='Search...' className=' bg-gray-200 outline-none focus:outline-none focus:border-2 focus:border-blue-500 focus:duration-50 focus:ease-in-out rounded-xl w-60 py-2 pl-8 pr-4  text-sm text-gray-800'/>
                    </div>
                </div>

                <div className='flex gap-x-3 items-center'>
                    {/* notification icon */}
                    <div>
                        <Bell className='w-5 h-5 text-black'/>
                    </div>
                    {/* user profile options */}
                    <div className='flex gap-x-3 items-center'>
                        <div  className='relative  w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center p-4 font-medium'>
                            <button className='text-xs' onClick={()=>setisDropdownPopupOpened(!isDropdownPopupOpened)}>AU</button>
                            {/* avatar dropdown menu */}
                            {
                                isDropdownPopupOpened &&

                                <div className=' absolute  top-12 right-0 sm:translate-x-21 w-45 h-auto p-1 bg-white rounded-xl shadow-lg z-40 animate-in slide-in-from-top duration-300 '>
                                    <div className='flex flex-col gap-y-2'>

                                        {/* profile and setting container */}
                                            <div className='flex flex-col gap-y-1 '>
                                                <div className="flex gap-x-3 items-center p-2 hover:bg-gray-400/30 group rounded-xl transition-colors duration-200 ease-in-out">
                                                        <User className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 ease-in-out' />
                                                        <span className='text-sm text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out cursor-pointer'>
                                                            Profile
                                                        </span>
                                                </div>
                                                <div className="flex gap-x-3 items-center p-2 hover:bg-gray-400/30 group rounded-xl transition-colors duration-200 ease-in-out">
                                                        <Settings className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors duration-300 ease-in-out' />
                                                        <span className='text-sm text-gray-700 group-hover:text-white transition-colors duration-300 ease-in-out cursor-pointer'>
                                                            Settings
                                                        </span>
                                                </div>
                                                
                                            </div>
                                        {/* Logout container */}
                                            <div className='border border-t-gray-300 pt-1'>
                                                <div className="flex gap-x-3 items-center p-2 hover:bg-red-200  rounded-xl transition-colors duration-200 ease-in-out">
                                                        <LogOut className='w-4 h-4 text-red-500 group-hover:text-white transition-colors duration-300 ease-in-out' />
                                                        <span className='text-sm text-red-500  transition-colors duration-300 ease-in-out cursor-pointer'>
                                                            Logout
                                                        </span>
                                                </div>
                                            </div>
                                    </div>


                                </div>
                            }

                        </div>
                        <div className='text-sm  text-black font-medium hidden sm:block cursor-pointer'  onClick={()=>setisDropdownPopupOpened(!isDropdownPopupOpened)}>User Name</div>
                    </div>

                </div>
            

            </div>
           
           
        </div>

    </nav>
  )
}
