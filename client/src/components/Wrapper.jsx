import { Toaster } from '@/components/ui/sonner';
import useAuth from '@/utils/useAuth.js';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Wrapper = () => {
  const { isAuthenticated, loading } = useAuth();
  console.log(isAuthenticated);
  return (
    <>
      <Toaster />
      {isAuthenticated ? <Header /> : null}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Wrapper;
