import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FormNewUser from '../components/FormNewUser'


const NewUser = () => {

  const authStore = useSelector((store) => store.auth)
  const [isAdmin, setIsAdmin] = useState(null)

  useEffect(() => {
    if (authStore?.auth?.role) {
      if (authStore?.auth?.role === 'ADMIN_ROLE') {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  }, [authStore?.auth])

  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      {
        isAdmin
          ? <FormNewUser />
          : null
      }
    </div >
  )
}

export default NewUser