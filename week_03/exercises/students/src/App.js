import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css';
import { Detail, Home } from './pages';
import { ROUTES } from './routes/routes';
import Root from './layouts/Root';
import Error from './pages/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<Error />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.detail.path} element={<Detail />} />
  </Route>
))

function App() {
    return <RouterProvider router={router} />
}

export default App;