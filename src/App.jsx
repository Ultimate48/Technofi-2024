import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Pages/Home';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

function App() {
  return (
    <div className=''>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
