import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './layouts/Root';
import { Error, Home, Login } from './pages';
import { ROUTES } from './routes/routes';
import UserArea from './context/UserContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<Error />}>
    <Route path={ROUTES.home.path} element={<Home />}/>
    <Route path={ROUTES.login.path} element={<Login />}/>
  </Route>
))

function App() {
  return (
    <UserArea>
      <RouterProvider router={router} />
    </UserArea>
  )
}

export default App;
