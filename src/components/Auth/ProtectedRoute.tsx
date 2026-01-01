import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }:any) => {
  const user = JSON.parse(localStorage.getItem("userEmail") || "{}");

  if (!user?.email) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
