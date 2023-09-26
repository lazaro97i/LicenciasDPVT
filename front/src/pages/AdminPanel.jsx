import React, { useEffect } from 'react'
import TableAdminPanel from '../components/TableAdminPanel'
import userActions from '../store/users/actions'
import { useDispatch, useSelector } from 'react-redux'

const { getUsers } = userActions

const AdminPanel = () => {

  const userStore = useSelector((store) => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [userStore?.users?.success])

  // if (userStore?.usres?.length > 0) {
  //   userStore?.users?.map((u) => [
  //     users.push(u)
  //   ])
  // }

  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      <p className='text-4xl mb-10 font-[600] text-center'>Panel de administracion</p>
      <TableAdminPanel
        users={userStore?.users}
      />
    </div>
  )
}

export default AdminPanel