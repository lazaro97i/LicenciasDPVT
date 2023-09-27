import React from 'react'
import TableEmployees from '../components/TableEmployees'

const ListEmployees = () => {
  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      <p className='text-4xl mb-10 font-[600] text-center'>Lista de empleados</p>
      <TableEmployees />
    </div>
  )
}

export default ListEmployees