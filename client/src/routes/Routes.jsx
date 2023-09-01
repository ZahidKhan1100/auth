import { createBrowserRouter } from "react-router-dom";
import Register from '../components/Register';
import Password from '../components/Password';
import Profile from '../components/Profile';
import Username from '../components/Username';
import Reset from '../components/Reset';
import Recovery from '../components/Recovery';
import PageNotFound from '../components/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
