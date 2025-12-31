import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userEmail") || "{}");

  // ❌ Not logged in
  if (!user?.email) {
    return <Navigate to="/" replace />;
  }

  // ✅ Logged in
  return children;
};

export default ProtectedRoute;
