import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/HomePage/home'
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/home",
      element: <Home />
    }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
