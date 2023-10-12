import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
import authActions from '../store/users/auth/actions'

const { signinToken } = authActions

const Layout = () => {

  const authStore = useSelector((store) => store.auth)
  const location = useLocation()
  const [isLogged, setIsLogged] = useState(false)
  const [tokenLogin, setTokenLogin] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage?.getItem('token')
    if (authStore?.success) {
      setIsLogged(true)
      setTokenLogin(token)
    } else {
      setIsLogged(false)
    }
    if (token && token !== tokenLogin) {
      dispatch(signinToken({ token: token }))
    } else if (!token) {
      setIsLogged(false)
      navigate('/')
    }
  }, [location, authStore?.auth])


  return (
    <div className='relative'>
      {
        isLogged ?
          <Nav />
          :
          window.location.pathname !== '/new_user' || window.location.pathname !== '/admin_panel'
            ? <div className='relative w-full flex justify-center mb-10 mt-5'>
              <Link to={'/'} className="mt-10 text-xl bg-lime-700 cursor-pointer px-6 py-2 rounded-md hover:bg-lime-600 transition-all text-[#f1f8fe] duration-300 absolute top-[-1rem]">Iniciar sesión</Link>
            </div>
            : null
      }
      <Outlet />
    </div>
  )
}

export default Layout