import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'

const { signinToken } = userActions

const Layout = () => {

  const userStore = useSelector((store) => store.user)
  const location = useLocation
  const [isLogged, setIsLogged] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem("token")
    dispatch(signinToken(token))
    if (userStore?.success) {
      setIsLogged(true)
    }
  }, [location])

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