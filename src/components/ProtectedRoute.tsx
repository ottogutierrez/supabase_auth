import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/authHook";

const ProtectedRoute = () => {
  const { session } = useAuth();

  if (!session) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
