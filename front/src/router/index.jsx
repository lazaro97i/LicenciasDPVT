import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import RegLicence from '../pages/RegLicence'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/reg_licence',
        element: <RegLicence />
      }
    ]
  }

])

export default router