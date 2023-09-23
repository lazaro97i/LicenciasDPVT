import React from 'react'
import TableAdminPanel from '../components/TableAdminPanel'

const AdminPanel = () => {
  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      <p className='text-4xl mb-10 font-[600] text-center'>Panel de administracion</p>
      <TableAdminPanel />
    </div>
  )
}

export default AdminPanel