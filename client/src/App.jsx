import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Wrapper from './components/Wrapper.jsx';
import SignIn from './components/SignIn.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
