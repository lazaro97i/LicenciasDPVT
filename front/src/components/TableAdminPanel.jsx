import React, { useState } from 'react'
import ModalEditUser from '../components/ModalEditUser'
import { useDispatch } from 'react-redux'
import userActions from '../store/users/actions'

const { getUsers } = userActions

const TableAdminPanel = ({ users }) => {

  const [filterFile, setFilterFile] = useState('')
  const [filterSelect, setFilterSelect] = useState('')
  const [edit, setEdit] = useState(false)
  const [fileUserEdit, setFileUserEdit] = useState(null)
  const dispatch = useDispatch()

  const filterRole = (e) => {
    switch (e?.target?.value) {
      case 'adminRole':
        setFilterSelect('ADMIN_ROLE')
        break
      case 'userRole':
        setFilterSelect('USER_ROLE')
        break
      case 'all':
        setFilterSelect('')
        break
    }
  }
  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='mb-5 w-full max-w-[700px] flex flex-col justify-center relative'>
        <span className='self-center mr-20'>Buscar legajo:</span>
        <label className='flex items-center justify-center flex-wrap gap-x-4'>
          <input onInput={(e) => { setFilterFile(e.target.value) }} className='border rounded-sm mt-2 w-[150px] pl-2 py-1 outline-none' type="search" name="searchFile" id="searchFile" />
          <input type="text" className='hidden' />
          <span className='mt-2'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
        <label htmlFor='role' className='flex justify-center gap-5 items-start pt-5 self-start pl-4'>
          <span>Rol: </span>
          <select onChange={filterRole} className='outline-none px-2 bg-transparent border-b' name="selectRole" id="selectRole" defaultValue='all'>
            <option value='all'>Todos</option>
            <option value='adminRole'>Administradores</option>
            <option value='userRole'>Usuarios</option>
          </select>
        </label>
        <span onClick={() => { dispatch(getUsers()) }} className='absolute bottom-0 right-[6.5%] cursor-pointer'>
          <svg className=' pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM5.46058 11.0833C5.83333 7.79988 8.62406 5.25 12.0096 5.25C13.9916 5.25 15.7702 6.12471 16.9775 7.50653C17.25 7.81846 17.2181 8.29226 16.9061 8.56479C16.5942 8.83733 16.1204 8.80539 15.8479 8.49347C14.9136 7.42409 13.541 6.75 12.0096 6.75C9.45215 6.75 7.33642 8.63219 6.97332 11.0833H7.33654C7.63998 11.0833 7.91353 11.2662 8.02955 11.5466C8.14558 11.8269 8.08122 12.1496 7.86651 12.364L6.69825 13.5307C6.40544 13.8231 5.93113 13.8231 5.63832 13.5307L4.47005 12.364C4.25534 12.1496 4.19099 11.8269 4.30701 11.5466C4.42304 11.2662 4.69658 11.0833 5.00002 11.0833H5.46058ZM17.3018 10.4693C17.5947 10.1769 18.069 10.1769 18.3618 10.4693L19.53 11.636C19.7448 11.8504 19.8091 12.1731 19.6931 12.4534C19.5771 12.7338 19.3035 12.9167 19.0001 12.9167H18.5395C18.1668 16.2001 15.376 18.75 11.9905 18.75C10.0085 18.75 8.22995 17.8753 7.02263 16.4935C6.7501 16.1815 6.78203 15.7077 7.09396 15.4352C7.40589 15.1627 7.87968 15.1946 8.15222 15.5065C9.08654 16.5759 10.4591 17.25 11.9905 17.25C14.548 17.25 16.6637 15.3678 17.0268 12.9167H16.6636C16.3601 12.9167 16.0866 12.7338 15.9705 12.4534C15.8545 12.1731 15.9189 11.8504 16.1336 11.636L17.3018 10.4693Z" fill="#0f2942"></path> </g></svg>
        </span>
      </form>
      <table className='text-center w-full max-w-[700px]'>
        <thead className='border-b-2'>
          <tr className='grid grid-cols-4 min-[500px]:grid-cols-5 gap-x-6 w-full py-1 bg-[#0f2942] rounded-t-md'>
            <th className='text-[#f1f8fe]'>Legajo</th>
            <th className='text-[#f1f8fe]'>Rol</th>
            <th className='text-[#f1f8fe]'>Estado</th>
            <th className='text-[#f1f8fe] hidden min-[500px]:inline'>Actividad</th>
            <th className='text-[#f1f8fe]'>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.filter(u => u.role.includes(filterSelect)).filter(u => u.fileNumber.toString().includes(filterFile)).length > 0
              ?
              users?.filter(u => u.role.includes(filterSelect)).filter(u => u.fileNumber.toString().includes(filterFile)).map((u, i) => {
                if (!u.isDeleted) {
                  return (
                    <tr key={i} className={`grid grid-cols-4 min-[500px]:grid-cols-5 gap-x-6 w-full border-b mt- py-2 ${i % 2 === 0 ? 'trPair' : ''}`}>
                      <td>{u.fileNumber}</td>
                      <td className={u.role === 'ADMIN_ROLE' ? 'text-lime-600' : ''}>{u.role === 'ADMIN_ROLE' ? 'Admin' : 'Usuario'}</td>
                      <td className={u.status ? 'text-lime-600' : 'text-red-600'} >{u.status ? 'Activo' : 'Inactivo'}</td>
                      <td className={`${u.isOnline ? 'text-lime-600' : 'text-red-600'} hidden min-[500px]:inline`} >{u.isOnline ? 'Online' : 'Offline'}</td>
                      <td onClick={() => { handleEdit(), setFileUserEdit(u.fileNumber) }} className='border-l flex justify-center cursor-pointer'>
                        <svg width={'25px'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0f2942"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                      </td>
                    </tr>
                  )
                }
              })
              : <tr>
                <td className='pt-10'>Sin resultados</td>
              </tr>
          }
        </tbody>
      </table>
      {
        edit
          ? <ModalEditUser
            userFile={fileUserEdit}
            edit={handleEdit}
          />
          : null
      }
    </div >
  )
}

export default TableAdminPanel