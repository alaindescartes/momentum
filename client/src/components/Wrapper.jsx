import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Wrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Wrapper;
