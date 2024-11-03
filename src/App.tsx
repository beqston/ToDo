import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home'
import Bookmark from './Pages/Bookmark';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "bookmark",
    element: <Bookmark />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
