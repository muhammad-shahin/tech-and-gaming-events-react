import Root from '../Layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ServiceDetails from '../Pages/ServiceDetails';
import SignUp from '../Pages/SignUp';

const routes = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        loader: () => fetch('/services.json'),
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
      {
        path: '/service-details/:serviceId',
        loader: () => fetch('/services.json'),
        element: <ServiceDetails />,
      },
    ],
  },
];

export default routes;
