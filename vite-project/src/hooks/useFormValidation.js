import { useState,useEffect } from "react";

const useFormValidation =(shema,formData)=>{
    
    const [formErrors,setFormErrors] = useState({})

    useEffect(() => {

         const result = shema.safeParse(formData);
   
         if (!result.success) {
           const formattedErrors = {};
   
           result.error.issues.forEach((issue) => {
             const field = issue.path[0]; // important
             formattedErrors[field] = issue.message;
           });
   
           setFormErrors(formattedErrors);
         } else {
           setFormErrors({});
         }
         return ()=>setFormErrors({})
         
        }, [formData]);
        return formErrors; 
}
export default useFormValidation;