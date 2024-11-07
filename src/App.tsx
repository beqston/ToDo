import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home'
import Bookmark from './Pages/Bookmark';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "bookmark",
    element: <Bookmark />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
