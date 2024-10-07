import { Toaster } from '@/components/ui/sonner';
import useAuth from '@/utils/useAuth.js';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Wrapper = () => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const { loading } = useAuth();
  return (
    <>
      <Toaster />
      {isAuthenticated && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Wrapper;
