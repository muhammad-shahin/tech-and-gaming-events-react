import Root from '../Layouts/Root';
import BookedEvents from '../Pages/BookedEvents';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PricingCard from '../Pages/Pricing';
import ServiceDetails from '../Pages/ServiceDetails';
import SignUp from '../Pages/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/booked-events',
        loader: () => fetch('/services.json'),
        element: (
          <PrivateRoute>
            <BookedEvents />
          </PrivateRoute>
        ),
      },
      {
        path: '/pricing',
        loader: () => fetch('/services.json'),
        element: (
          <PrivateRoute>
            <PricingCard />
          </PrivateRoute>
        ),
      },
    ],
  },
];

export default routes;
