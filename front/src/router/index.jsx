import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts/Layout'
import SignIn from '../pages/SignIn'
import AddLicense from '../pages/AddLicense'
import NewUser from '../pages/NewUser'
import ViewLicense from '../pages/ViewLicense'
import AdminPanel from '../pages/AdminPanel'
import NewEmployee from '../pages/NewEmployee'
import ListEmployees from '../pages/ListEmployees'
import RegOfLicenses from '../pages/RegOfLicenses'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/add-license',
        element: <AddLicense />
      },
      {
        path: '/new_user',
        element: <NewUser />
      },
      {
        path: '/view_license',
        element: <ViewLicense />
      },
      {
        path: '/admin_panel',
        element: <AdminPanel />
      },
      {
        path: '/new_employee',
        element: <NewEmployee />
      },
      {
        path: '/employees',
        element: <ListEmployees />
      },
      {
        path: '/reg-licenses',
        element: <RegOfLicenses />
      },
    ]
  },
  {
    path: '/',
    element: <SignIn />
  }

])

export default router