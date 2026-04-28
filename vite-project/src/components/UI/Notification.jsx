import React, { useEffect, useState } from 'react';
import { Wrench, ArrowRight, CheckCheckIcon, CheckCircle, X, XCircle, TriangleAlert, CircleAlert } from "lucide-react";


export default function Notification({ isOpen, onClose, message,status }) {
  const notificationStatusStyle = {
    "success":{
      bgColor:"bg-emerald-50",
      titleColor:" text-emerald-800",
      iconColor:"text-emerald-500",
      borderColor:"border-green-300"
    },
    "danger":{
      bgColor:"bg-red-50",
      titleColor:"text-red-800",
      iconColor:"text-red-500",
      borderColor:"border-red-300"
    },
    "warning":{
      bgColor:"bg-amber-50",
      titleColor:"text-amber-800",
      iconColor:"text-amber-500",
      borderColor:"border-amber-300"
    },
    "info":{
      bgColor:"bg-blue-50",
      titleColor:"text-blue-800",
      iconColor:"text-blue-500",
      borderColor:"border-blue-300"
    },
    
  
  };
  const style =notificationStatusStyle[status];

  const notificationContent = {
    "success":{
      title:"Operation Successful",
      icon:<CheckCircle className={`w-5 h-5 font-semibold ${style?.iconColor}`}/>,
      content:message,
    },
    "danger":{
      title:"Error Occurred",
      icon:<XCircle className={`w-5 h-5 font-semibold ${style?.iconColor}`}/>,
      content:message,
    },
    "warning":{
      title:"Warning",
      icon:<TriangleAlert className={`w-5 h-5 font-semibold ${style?.iconColor}`}/>,
      content:message,
    },
    "info":{
      title:"info",
      icon:<CircleAlert className={`w-5 h-5 font-semibold ${style?.iconColor}`}/>,
      content:message,
    },
    
  
  };
  
  const content = notificationContent[status];
  
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
          setIsVisible(true);
          setTimeout(()=>{
            onClose()

            },5000)
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 200); // match animation duration

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

if (!isVisible || !status) return null;
  return (
    <div className="fixed inset-0 z-30  ">
      

      {/* Content */}
      <div className="w-full h-screen flex items-start justify-end p-5">
        <div className={`${style?.bgColor} border ${style?.borderColor}  rounded-xl w-full md:w-[30%] h-auto p-4 shadow-md ${ isOpen ? 'notification-in' : 'popup-close'}`}>
            <div className="flex items-start justify-between gap-x-2">
              <div className="flex gap-x-3">
                  <div className="relative top-1">
                    {content?.icon}

                  </div>
                  <div className="flex flex-col gap-y-1">
                    <h1 className={`text-sm ${style?.titleColor} font-semibold capitalize`}>{content?.title}</h1>
                    <p className="text-xs first-letter:capitalize text-black">{message}</p>

                  </div>

              </div>
              <div onClick={onClose}>
                <X className="w-4 h-4 text-gray-500 hover:text-black transition-text ease-in duration-100" />
              </div>

        </div>
        </div>
      </div>
    </div>
  );
}