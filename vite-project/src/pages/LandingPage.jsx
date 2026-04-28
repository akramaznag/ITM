// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Wrench,
//   Shield,
//   Clock,
//   Users,
//   BarChart3,
//   Headphones,
//   Star,
//   ArrowRight,
//   CheckCircle2,
//   Menu,
//   X,
// } from "lucide-react";

// const features = [
//   { icon: Wrench, title: "Smart Ticket Management", description: "Automate request routing and resolve issues faster." },
//   { icon: Shield, title: "Enterprise Security", description: "Role-based access and secure data protection." },
//   { icon: Clock, title: "Real-Time Tracking", description: "Track interventions with live updates." },
//   { icon: BarChart3, title: "Advanced Analytics", description: "Powerful dashboards and reports." },
//   { icon: Users, title: "Team Collaboration", description: "Assign tasks and collaborate easily." },
//   { icon: Headphones, title: "24/7 Support", description: "Always available when you need help." },
// ];

// const stats = [
//   { value: "2,400+", label: "Requests Managed" },
//   { value: "4.2h", label: "Avg Resolution" },
//   { value: "98%", label: "Satisfaction" },
//   { value: "150+", label: "Companies" },
// ];

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">

//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          
//           <div className="flex items-center gap-2">
//             <div className="h-9 w-9 bg-blue-600 rounded-lg flex items-center justify-center">
//               <Wrench className="text-white h-5 w-5" />
//             </div>
//             <span className="font-bold text-lg">ITM</span>
//           </div>

//           <div className="hidden md:flex gap-8 text-sm text-gray-600">
//             <a href="#features" className="hover:text-gray-900">Features</a>
//             <a href="#pricing" className="hover:text-gray-900">Pricing</a>
//           </div>

//           <div className="hidden md:flex gap-3 items-center">
//             <button onClick={() => navigate("/login")} className="text-gray-600 hover:text-gray-900">
//               Sign In
//             </button>

//             <button
//               onClick={() => navigate("/login")}
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
//             >
//               Get Started <ArrowRight className="h-4 w-4" />
//             </button>
//           </div>

//           <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden p-4 space-y-3 border-t">
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               Get Started
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Hero */}
//       <section className="text-center py-20 px-4">
//         <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-6">
//           <CheckCircle2 className="h-3 w-3" /> Trusted by 150+ companies
//         </span>

//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           IT Service Management <br />
//           <span className="text-blue-600">Made Simple</span>
//         </h1>

//         <p className="mt-6 text-gray-500 max-w-xl mx-auto">
//           Manage requests, track interventions, and deliver exceptional IT support.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
//           <button
//             onClick={() => navigate("/login")}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 justify-center"
//           >
//             Start Free Trial <ArrowRight className="h-4 w-4" />
//           </button>

//           <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
//             Watch Demo
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
//           {stats.map((s) => (
//             <div key={s.label} className="bg-white border rounded-xl p-4 shadow-sm">
//               <p className="text-xl font-bold text-blue-600">{s.value}</p>
//               <p className="text-xs text-gray-500">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features */}
//       <section id="features" className="py-20 bg-gray-100 px-4">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Everything you need
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {features.map((f) => (
//             <div key={f.title} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md">
//               <f.icon className="text-blue-600 mb-4" />
//               <h3 className="font-semibold mb-2">{f.title}</h3>
//               <p className="text-sm text-gray-500">{f.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 text-gray-500 text-sm">
//         © {new Date().getFullYear()} ITM
//       </footer>

//     </div>
//   );
// };

// export default LandingPage;