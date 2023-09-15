import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
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
    } else {
      if (!token) {
        setIsLogged(false)
        navigate('/')
      }
    }
  }, [location, userStore?.success])


  return (
    <div className='relative'>
      {
        isLogged ?
          <Nav />
          :
          null
      }
      <Outlet />
    </div>
  )
}

export default Layout