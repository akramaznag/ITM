import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRequests from "../pages/Admin/AdminRequests"
import GetRequest from "../pages/Admin/GetRequest";
import Technicians from "../pages/Admin/Technicians";
import GetTechnecian from "../pages/Admin/GetTechnecian";
import Clients from "../pages/Admin/Clients";
import GetClient from "../pages/Admin/getClient";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  // Landing page
  {
    path: "/",
    element: <h1>Landing page coming soon ...</h1>,
  },
  //Auth Routes
  {
    path:"auth/login",
    element:<Login/>

  },
    {
    path:"auth/register",
    element:<Register/>

  },

  // Admin routes
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      // default route: /admin → /admin/dashboard
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },

      // /admin/dashboard
      {
        path: "dashboard",
        element: <AdminDashboard />,
       
        
      },
      {
        path:"requests",
        element:<AdminRequests/>
      },
      {
        path:"requests/:id",
        element:<GetRequest/>
      },
      {
        path:"technicians",
        element:<Technicians/>
      },
      {
        path:"technicians/:id",
        element:<GetTechnecian/>
      },
       {
        path:"clients",
        element:<Clients/>
      },
       {
        path:"clients/:id",
        element:<GetClient/>
      },

    ],
  },
]);

export default router;