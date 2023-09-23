import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'

const { getUsers } = userActions

const TableAdminPanel = () => {

  const userStore = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [filterFile, setFilterFile] = useState('')

  useEffect(() => {
    dispatch(getUsers())
  }, [])


  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='mb-5'>
        <label className='flex items-center justify-center flex-wrap gap-x-4'>
          <span className='w-full'>Buscar legajo:</span>
          <input onInput={(e) => { setFilterFile(e.target.value) }} className='border rounded-sm mt-2 w-[150px] pl-2 py-1 outline-none' type="search" name="searchFile" id="searchFile" />
          <span className='mt-2'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
      </form>
      <table className='text-center w-full max-w-[700px]'>
        <thead className='border-b-2'>
          <tr className='grid grid-cols-4 gap-x-6 w-full py-1 bg-[#0f2942] rounded-t-md'>
            <th className='text-[#f1f8fe]'>Legajo</th>
            <th className='text-[#f1f8fe]'>Rol</th>
            <th className='text-[#f1f8fe]'>Estado</th>
            <th className='text-[#f1f8fe]'>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            userStore?.users?.filter((f) => f.fileNumber.toString().includes(filterFile)).length > 0
              ? userStore?.users?.filter((f) => f.fileNumber.toString().includes(filterFile))
                .map((u, i) => {
                  return (
                    <tr key={i} className={`grid grid-cols-4 gap-x-6 w-full border-b mt- py-2 ${i % 2 === 0 ? 'trPair' : ''}`}>
                      <td>{u.fileNumber}</td>
                      <td className={u.role === 'ADMIN_ROLE' ? 'text-lime-600' : ''}>{u.role === 'ADMIN_ROLE' ? 'Admin' : 'Usuario'}</td>
                      <td className={u.status ? 'text-lime-600' : 'text-red-600'} >{u.status ? 'Activo' : 'Inactivo'}</td>
                      <td className='border-l flex justify-center cursor-pointer'>
                        <svg width={'25px'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0f2942"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                      </td>
                    </tr>
                  )
                })
              : <tr>
                <td className='pt-10'>No se encontraron resultados</td>
              </tr>
          }
        </tbody>
      </table>
    </div >
  )
}

export default TableAdminPanel