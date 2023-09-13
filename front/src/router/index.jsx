import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import SignIn from '../pages/SignIn'
import RegLicence from '../pages/RegLicence'
import NewUser from '../pages/NewUser'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/reg_licence',
        element: <RegLicence />
      },
      {
        path: '/new_user',
        element: <NewUser />
      }
    ]
  },
  {
    path: '/',
    element: <SignIn />
  }

])

export default router