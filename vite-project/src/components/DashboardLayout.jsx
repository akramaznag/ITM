import { useState } from "react";
import Header from "./Header"
import SideBar from "./SideBar";
import Body from "./Body";

export default function DashboardLayout() {
  const [isSidebarOpened,setisSidebarOpened] = useState(true);


  return (
    <>
    <div className="min-h-screen text-white overflow-hidden bg-slate-100 flex  w-full">
      <SideBar isOpen={isSidebarOpened}/>
       {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpened && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => {setisSidebarOpened(false)}}
        ></div>
      )}
      <div className={`flex flex-col w-full z-30`}>

          <Header isOpen={isSidebarOpened} toggleSideBar={()=>{setisSidebarOpened(!isSidebarOpened)}}/>
          <Body isSidebarOpened={isSidebarOpened} />
      </div>
    </div>
    </>
  )
}

