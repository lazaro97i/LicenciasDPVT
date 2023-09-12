import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import SignIn from '../pages/SignIn'
import RegLicence from '../pages/RegLicence'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <SignIn />
      },
      {
        path: '/reg_licence',
        element: <RegLicence />
      }
    ]
  }

])

export default router