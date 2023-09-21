import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
import userActions from '../store/users/actions'

const { signinToken } = userActions

const Layout = () => {

  const userStore = useSelector((store) => store.user)
  const location = useLocation()
  const [isLogged, setIsLogged] = useState(false)
  const [tokenLogin, setTokenLogin] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage?.getItem('token')
    if (userStore?.success) {
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
  }, [location, userStore?.userAuth?.length])


  return (
    <div className='relative'>
      {
        isLogged ?
          <Nav />
          :
          <div className='relative w-full flex justify-center'>
            <Link to={'/'} className="mt-10 text-xl bg-lime-800 cursor-pointer px-6 py-2 rounded-md hover:bg-lime-700 transition-all duration-300 absolute top-[-1rem]">Iniciar sesión</Link>
          </div>
      }
      <Outlet />
    </div>
  )
}

export default Layout