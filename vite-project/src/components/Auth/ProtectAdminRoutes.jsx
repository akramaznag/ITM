import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectAdminRoutes({children}) {
  const user=useSelector(state=>state.auth.user);
  console.log(user)
  
  if(!user){
    return <Navigate to={'/auth/login'}/>
  }
  if(user?.role !== 'ADMIN'){
      return <Navigate to="/unauthorized" replace />;

  }
  return children;


}
