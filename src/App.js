import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PerfumePage from './pages/PerfumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'perfume',
        element: <PerfumePage />,
      },
      {
        path: 'about',
        element: <div>This is About Page</div>,
      },
      {
        path: 'brands',
        element: <div>This is Brands Page</div>,
      },

      {
        path: 'news',
        element: <div>This is News Page</div>,
      },
      {
        path: 'sales',
        element: <div>This is Sales Page</div>,
      },
      {
        path: 'offers',
        element: <div>This is Offers Page</div>,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
