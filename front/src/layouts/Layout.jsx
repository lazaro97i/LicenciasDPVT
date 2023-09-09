import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {

  const userStore = useSelector((store) => store.user)

  let token = localStorage.getItem('token')
  const [isToken, setToken] = useState(false)

  useEffect(() => {
    if (token) {
      setToken(true)
    }
  }, [])

  console.log(isToken)
  return (
    <div className='relative'>
      {
        isToken ?
          <Nav />
          :
          null
      }
      <Outlet />
    </div>
  )
}

export default Layout