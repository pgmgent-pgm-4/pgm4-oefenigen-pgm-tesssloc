import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Home, Error, Blog, Blogpost } from './pages';
import Root from './layouts/Root'
import { ROUTES } from './routes/routes';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<Error />}>
    <Route path={ROUTES.home.path} element={<Home />} />
    <Route path={ROUTES.about.path} element={<About />} />
    <Route path={ROUTES.contact.path} element={<Contact />} />
    <Route path={ROUTES.blog.path} element={<Blog />} />
    <Route path={ROUTES.blogPost.path} element={<Blogpost />} />
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
