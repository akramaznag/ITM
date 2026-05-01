import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRequests from "../pages/Admin/AdminRequests"
import GetRequest from "../pages/Admin/GetRequest";
import Technicians from "../pages/Admin/Technicians";
import GetTechnecian from "../pages/Admin/GetTechnecian";
import Clients from "../pages/Admin/Clients";
import GetClient from "../pages/Admin/GetClient";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectAdminRoutes from "../components/Auth/ProtectAdminRoutes";
import Unauthorized from "../pages/Unauthorized";
import Geust from "../components/Auth/Geust";
import AdminProducts from '../pages/Admin/AdminProducts'
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  // Landing page
  {
    path: "/",
    element: <LandingPage/>,
  },

  //Not Authorized

  {
    path: "/unauthorized",
    element: <Unauthorized/>,
  },
  //Auth Routes
  {
    path:"auth/login",

    element: <Geust > <Login/>  </Geust>

  },
    {
    path:"auth/register",
    element:<Geust > <Register/> </Geust>

  },

  // Admin routes
  {
    path: "/admin",
    element:<ProtectAdminRoutes>
              <DashboardLayout />
            </ProtectAdminRoutes>,
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
        path:"products",
        element:<AdminProducts/>
      }
      ,
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