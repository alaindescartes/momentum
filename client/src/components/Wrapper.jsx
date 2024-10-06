import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Wrapper = () => {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Wrapper;
