import { useAuth } from 'context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isSignIn } = useAuth();
  const location = useLocation();

  if (!isSignIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
