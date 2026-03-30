import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminRequests from "../pages/Admin/AdminRequests"

const router = createBrowserRouter([
  // Landing page
  {
    path: "/",
    element: <h1>Landing page coming soon ...</h1>,
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
      }

    ],
  },
]);

export default router;