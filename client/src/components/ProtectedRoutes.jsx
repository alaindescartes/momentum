import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}

export default ProtectedRoutes;
