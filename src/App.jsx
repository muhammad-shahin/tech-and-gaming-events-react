import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Routes/Router';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
