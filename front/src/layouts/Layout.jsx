import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
  return (
    <div className='relative'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout