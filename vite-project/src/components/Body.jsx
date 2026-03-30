import { CheckCircle, CircleAlert, Clock, File, Monitor, Phone } from 'lucide-react'
import React from 'react';
import {Outlet} from 'react-router-dom'

export default function Body() {
  return (
    <div className='bg-red min-h-auto w-full px-6 py-8'>
         <Outlet/>
    </div>
  )
}
