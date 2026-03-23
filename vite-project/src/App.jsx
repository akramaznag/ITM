import { useState } from "react";
import Header from "./pages/Header"
import SideBar from "./pages/SideBar";
function App() {
  const [isSidebarOpened,setisSidebarOpened] = useState(true);

  return (
    <>
    <div className="min-h-screen text-white overflow-hidden bg-slate-100 flex  w-full">
      <SideBar isOpen={isSidebarOpened}/>
       {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpened && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setisSidebarOpened(false)}
        ></div>
      )}
      <div className={`flex flex-col w-full z-30`}>

          <Header isOpen={isSidebarOpened} toggleSideBar={()=>setisSidebarOpened(!isSidebarOpened)}/>
      </div>
    </div>
    </>
  )
}

export default App
