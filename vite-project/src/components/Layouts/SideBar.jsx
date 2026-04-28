import { DownloadCloud, File, LayoutDashboard, Monitor, Phone, Settings, Settings2, Settings2Icon, User, Users, Wrench } from 'lucide-react'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function SideBar({isOpen}) {
  const location = useLocation();
  const path=location.pathname;
  
    console.log(isOpen)
  return (
    <div className={`w-0 md:block min-h-screen z-30 md:z-0 fixed top-0 left-0 md:static transform transition-[width,transform] duration-500
    ${isOpen? 'w-[60%] md:w-[44%] lg:w-[25%]  slide-in-from-left' 
    :' md:w-[7%] lg:w-[4%] slide-in-from-right '} bg-slate-900`}>

      {/* SideBar content */}
      <div className={`fixed ${isOpen ? ' px-3 w-[60%] md:w-[30%] lg:w-[20%] ':'hidden md:flex px-1'}`}>
           
        {/* SideBar heading */}
        <div className={`h-18 flex justify-start items-center gap-x-3 ${isOpen?'px-3' :'px-1'} mb-3`}>
            {/* website icon */}
            <div className={`${!isOpen && 'md:flex'} bg-blue-600 rounded-xl flex items-center justify-center w-9 h-9`}>
              <Wrench className='w-5 h-5 font-bold'/>
            </div>
            {/* website title and subtitle */}
            <div className={`${!isOpen && 'md:hidden' }`}>
              <h1 className='font-bold'>ITM</h1>
              <p className='text-xs text-gray-500 font-normal tracking-wide'>IT MAROC</p>
            </div>
        </div>
        {/* user Role */}
        <div className={`mb-3 ${isOpen && 'px-2'}`}>
          <span className={`text-xs tracking-wide text-gray-600 font-medium  ${isOpen ? 'block':'invisible'}`}>ADMIN</span>
        </div>
        <div className={` w-full  h-screen flex flex-col items-center  ${!isOpen && 'md:relative md:top-20 md:right-21 md:gap-y-3'} gap-y-2`}>
          
            <Link to={'/admin/dashboard'} className={`flex items-center  gap-x-2 w-full ${path==='/admin/dashboard'? 'bg-blue-500/10 ':'hover:bg-gray-500/20 group'}  rounded-md py-1 px-2 cursor-pointer`}>
              <LayoutDashboard className= {`${path==='/admin/dashboard'? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} w-4 h-4 `}/>
              <span  className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} ${path==='/admin/dashboard'? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} `}>Dashboard</span>
            </Link>
            {/*  */}
            <Link to={'/admin/requests'} className={`flex items-center  gap-x-2 w-full ${path.startsWith("/admin/requests") ? 'bg-blue-500/10 ':'hover:bg-gray-500/20 group'}  rounded-md py-1 px-2 cursor-pointer`}>
              <File className= {`${path.startsWith("/admin/requests")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} w-4 h-4 `}/>
              <span  className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} ${path.startsWith("/admin/requests")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} `}>Requests</span>
            </Link>
            {/*  */}
           <div className='flex items-center gap-x-2 w-full hover:bg-gray-500/20 group rounded-md py-1 px-2 cursor-pointer'>
              <Phone className='w-4 h-4 text-[hsl(var(--light-gray))] group-hover:text-white'/>
              <span className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} text-[hsl(var(--light-gray))] group-hover:text-white`}>Calls</span>
            </div>
            {/*  */}
            <Link to={'/admin/products'} className={`flex items-center  gap-x-2 w-full ${path.startsWith("/admin/products") ? 'bg-blue-500/10 ':'hover:bg-gray-500/20 group'}  rounded-md py-1 px-2 cursor-pointer`}>
              <Monitor className= {`${path.startsWith("/admin/products")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} w-4 h-4 `}/>
              <span  className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} ${path.startsWith("/admin/products")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} `}>Products</span>
            </Link>
            {/*  */}
             <Link to={'/admin/technicians'} className={`flex items-center  gap-x-2 w-full ${path.startsWith("/admin/technicians") ? 'bg-blue-500/10 ':'hover:bg-gray-500/20 group'}  rounded-md py-1 px-2 cursor-pointer`}>
              <Wrench className= {`${path.startsWith("/admin/technicians")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} w-4 h-4 `}/>
              <span  className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} ${path.startsWith("/admin/technicians")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} `}>Technicians</span>
            </Link>
              {/*  */}
             <Link to={'/admin/clients'} className={`flex items-center  gap-x-2 w-full ${path.startsWith("/admin/clients") ? 'bg-blue-500/10 ':'hover:bg-gray-500/20 group'}  rounded-md py-1 px-2 cursor-pointer`}>
              <Users className= {`${path.startsWith("/admin/clients")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} w-4 h-4 `}/>
              <span  className={`text-md md:text-sm  ${!isOpen && 'md:hidden'} ${path.startsWith("/admin/clients")  ? 'text-blue-500 font-semibold':'text-[hsl(var(--light-gray))] group-hover:text-white'} `}>Clients</span>
            </Link>
             {/*  */}
            <div className={`flex items-center  gap-x-2 w-full hover:bg-gray-500/20 group rounded-md py-1 px-2 cursor-pointer`}>
              <Settings className={` w-4 h-4 text-[hsl(var(--light-gray))] group-hover:text-white`}/>
              <span className={` ${!isOpen && 'md:hidden'} text-md md:text-sm  text-[hsl(var(--light-gray))] group-hover:text-white`}>Settings</span>
            </div>
        </div>
      </div>

    </div>
  )
}
