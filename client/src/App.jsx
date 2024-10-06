import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import Wrapper from './components/Wrapper.jsx';
import Dashboard from './routes/Dashboard.jsx';
import SignIn from './routes/SignIn.jsx';
import SignUp from './routes/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },

      //protected routes
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
