import { useState } from "react";
import Header from "../Layouts/Header"
import SideBar from "../Layouts/SideBar";
import Body from "../Layouts/Body";
import Popup from "../UI/Popup";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import CheckTokenExpiration from "../../hooks/CheckTokenExpiration";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardLayout() {
  //log out the user automatically after the token expiration
  const token = useSelector(state=>state.auth.token);
  const dispatch = useDispatch();

  useEffect(()=>{
    CheckTokenExpiration(token,dispatch)

  },[token])
  //
  const [isSidebarOpened,setisSidebarOpened] = useState(true);
  const [popupContent,setPopupContent] =useState(null);
  const [notificationContent,setNotificationContent]=useState(null)


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

