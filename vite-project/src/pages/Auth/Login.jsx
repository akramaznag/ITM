import React, { useState ,useEffect} from "react";
import {  Link, Navigate, useNavigate, useOutletContext } from "react-router-dom";
import { Wrench, ArrowRight, CheckCheckIcon, CheckCircle, X } from "lucide-react";
import { login } from "../../services/authServices/authService";
import Notification from "../../components/UI/Notification";
import LoginShema from "../../validations/LoginShema";
import {useDispatch, useSelector} from 'react-redux';
import { setAuth } from "../../redux/AuthSlice";

export default function Login() {
  const token = useSelector(state => state.auth?.token);
  console.log(token)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [notificationContent,setNotificationContent]=useState({
      status:null,
      message:null
  
    })

  const [formData,setFormData] =useState({
    email:'',
    password:'',
  })
  const [errors, setErrors] = useState({});

  const handleChange = (key, e) => {
      const value = key==='password'? e.target.value: e.target.value.trim();

      setFormData((prev) => ({
        ...prev,
        [key]: value
      }));

  };
 


  useEffect(() => {
      const result = LoginShema.safeParse(formData);

      if (!result.success) {
        const formattedErrors = {};

        result.error.issues.forEach((issue) => {
          const field = issue.path[0]; // important
          formattedErrors[field] = issue.message;
        });

        setErrors(formattedErrors);
      } else {
        setErrors({});
      }
    }, [formData]);



const handleSubmit = (e) => {
  e.preventDefault();

  login(formData)
  .then(res => {
          const payload ={ user:res.data.data,  token:res.data.token  }
          dispatch(setAuth(payload))
          navigate('/admin/dashboard')
        
      })
        .catch(error => {
          console.log(error);

          setNotificationContent({ status: "danger",   message: error.response?.data?.message || "Login Failed,please try again" });
        });
};

  return (
    <div className="min-h-screen flex">
      
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[hsl(var(--sidebar-bg))] items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br  bg-slate-900 to-transparent" />

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center">
              <Wrench className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">ITM</h1>
              <p className="text-sm text-gray-400">IT Management Platform</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white mb-4">
            Streamline your IT service operations
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Manage requests, track interventions, and deliver exceptional IT support — all from one powerful dashboard.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { label: "Requests Managed", val: "2,400+" },
              { label: "Avg Resolution", val: "4.2h" },
              { label: "Client Satisfaction", val: "98%" },
              { label: "Active Technicians", val: "45" },
            ].map((s) => (
              <div key={s.label} className="bg-gray-800 rounded-lg p-4">
                <p className="text-xl font-bold text-white">{s.val}</p>
                <p className="text-xs text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-100">
        <div className="w-full max-w-sm">
          
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-9 w-9 rounded-lg bg-blue-500 flex items-center justify-center">
              <Wrench className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">ITM</span>
          </div>

          <h2 className="text-2xl font-bold mb-1">
            Welcome back
          </h2>

          <p className="text-gray-500 text-sm mb-6">
              Sign in to your ITM dashboard

              
          </p>

         

          {/* Form */}
          <form onSubmit={(e)=>handleSubmit(e)} className={`${Object.keys(errors).length>0 ? 'space-y-2' : 'space-y-4'}  grid grid-cols-2  gap-x-2 w-full`}>
  
            <div className="col-span-2">
              <label className="text-sm font-medium">Email</label>
              <input onChange={(e)=>handleChange("email",e)}
                type="email"
                value={formData.email}
                placeholder="you@company.com"
                className={`mt-1.5 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm ${ errors.email?'focus:border-red-500':'focus:border-blue-500'} outline-none`}
              />
            {errors.email && <p className="text-sm font-semibold text-red-500">{errors.email}</p>}

            </div>

            <div className="col-span-2">
              <label className="text-sm font-medium">Password</label>
              <input onChange={(e)=>handleChange("password",e)}
                type="password"
                value={formData.password}
                placeholder="••••••••"
                className={`mt-1.5 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm ${ errors.password?'focus:border-red-500':'focus:border-blue-500'} outline-none`}

              />
              {errors.password && <p className="text-sm font-semibold text-red-500">{errors.password}</p>}
            </div>
           
            <div className="col-span-2">
              {
                Object.keys(errors).length>0 ?
                
                <div className={`w-full flex items-center justify-center bg-gray-300 cursor-not-allowed  text-white py-2 rounded-lg font-medium`}>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
                :
                  <button   type="submit" className={`w-full flex items-center justify-center bg-blue-500  hover:bg-blue-600 transition  text-white py-2 rounded-lg font-medium`}  >
                     Sign In
                   <ArrowRight className="ml-2 h-4 w-4" />
                   </button>
                   
              }

            </div>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {"Already have an account?  "}
            <Link to={'/auth/register'}       className="text-blue-500 font-medium hover:underline"
            >
             Sign up
            </Link>
          </p>
        </div>
      </div>
      <Notification isOpen={notificationContent.message !==null}   onClose={() => setNotificationContent({ status: null, message: null })} message={notificationContent.message} status={notificationContent.status}>
      </Notification>
    </div>
  );
}