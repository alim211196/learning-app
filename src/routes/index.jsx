import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../pages/NotFound";
import AdminLayout from "../layouts/AdminLayout";

// AdminLayout is your layout with the MiniDrawer

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // Redirect to login page by default
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout /> {/* MiniDrawer layout persists */}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminDashboard />, // Default route when no specific path is selected
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const RouteIndex = () => {
  return <RouterProvider router={router} />;
};

export default RouteIndex;
