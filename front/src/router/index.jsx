import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import SignIn from '../pages/SignIn'
import RegLicense from '../pages/RegLicense'
import NewUser from '../pages/NewUser'
import ViewLicense from '../pages/ViewLicense'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/reg_license',
        element: <RegLicense />
      },
      {
        path: '/new_user',
        element: <NewUser />
      },
      {
        path: '/view_license',
        element: <ViewLicense />
      }
    ]
  },
  {
    path: '/',
    element: <SignIn />
  }

])

export default router