import { useState } from "react";
import Header from "./Header"
import SideBar from "./SideBar";
import Body from "./Body";
import Popup from "./Popup";

export default function DashboardLayout() {
  const [isSidebarOpened,setisSidebarOpened] = useState(true);
  const [popupContent,setPopupContent] =useState(null);


  return (
    <>
    <div className="min-h-screen text-white overflow-hidden bg-slate-100 flex  w-full">
      <SideBar isOpen={isSidebarOpened}/>
       {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpened && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20 md:hidden"
          onClick={() => {setisSidebarOpened(false)}}
        ></div>
      )}
       <Popup isOpen={popupContent} onClose={() => setPopupContent(null)}>
         {popupContent}
       </Popup>
      
      <div className={`flex flex-col w-full z-10 ${popupContent && 'h-screen overflow-hidden' }`}>

          <Header isOpen={isSidebarOpened} toggleSideBar={()=>{setisSidebarOpened(!isSidebarOpened)}}/>
          <Body isSidebarOpened={isSidebarOpened} setPopupContent={setPopupContent} />
      </div>
    </div>
    </>
  )
}

