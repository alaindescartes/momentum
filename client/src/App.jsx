import { createBrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper.jsx';
import SignIn from './routes/SignIn.jsx';
import SignUp from "./routes/SignUp.jsx";
import Dashboard from './routes/Dashboard.jsx';

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
      {
        path: 'dashboard',
        element:<Dashboard />,
      }
    ],
  },
]);

export default router;
