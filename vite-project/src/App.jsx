import { useState } from "react";
import Header from "./pages/Header"
import SideBar from "./pages/SideBar";
function App() {
  const [isSidebarOpened,setisSidebarOpened] = useState(true);

  return (
    <>
    <div className="min-h-screen text-white overflow-hidden bg-slate-100 flex  w-full">
      <SideBar isOpen={isSidebarOpened}/>
      <div className={`flex-1 flex flex-col w-full`}>

          <Header isOpen={isSidebarOpened} toggleSideBar={()=>setisSidebarOpened(!isSidebarOpened)}/>
      </div>
    </div>
    </>
  )
}

export default App
