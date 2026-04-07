import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrench, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("client");

  const handleSubmit = (e) => {
    e.preventDefault();

    const routes = {
      client: "/client/dashboard",
      technician: "/technician/dashboard",
      admin: "/dashboard",
      superadmin: "/dashboard",
    };

    navigate(routes[role] || "/dashboard");
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

          {/* Role selector */}
          <div className="mb-6">
            <label className="text-xs text-gray-500 mb-2 block">
              Select role
            </label>

            <div className="grid grid-cols-4 gap-1.5">
              {["client", "technician", "admin"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`text-xs py-1.5 px-2 rounded-md font-medium capitalize transition ${
                    role === r
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
           

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1.5 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1.5 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:border-blue-500 outline-none"
              />
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
            >
            Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {"Don't have an account  "}
            <Link to={'/auth/register'}  className="text-blue-500 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}