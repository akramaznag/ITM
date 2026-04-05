import React from 'react'

export  function RequestDetailsCard({children}) {
  return (
     <div className="text-black bg-white  outline-0 border  border-gray-200 rounded-xl   px-4 py-5 h-auto flex flex-col gap-y-6">
        {children}
      </div>               
  )
}
export  function UserDetailsCard({children}) {
  return (
     <div className="text-black bg-white  outline-0 border  border-gray-200 rounded-xl   px-4 py-5 h-auto flex flex-col gap-y-1">
        {children}
      </div>               
  )
}