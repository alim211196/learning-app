import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import SignIn from "../components/signIn";
import Dashboard from "../components/dashboard";
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
        <SignIn />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
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
