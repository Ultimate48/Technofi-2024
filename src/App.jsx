import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/home'
import About from './Components/Pages/about'
import Events from './Components/Pages/events'
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/home",
      element: <Home />
    },

    {
      path: "/about",
      element: <About />
    },

    {
      path: "/events",
      element: <Events />
    }
]);

function App() {
  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
    </style>
    <RouterProvider router={router} />
    </>
  )
}

export default App
