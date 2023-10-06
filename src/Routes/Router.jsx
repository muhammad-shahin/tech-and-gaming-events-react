import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => fetch('/destinations.json'),
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
