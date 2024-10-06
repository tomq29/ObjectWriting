import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Logout from '@/pages/Logout';
import ObjectWriting from '@/pages/ObjectWriting';
import Reg from '@/pages/Reg';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'objectwriting',
    element: <ObjectWriting />,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'reg',
        element: <Reg />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
]);
