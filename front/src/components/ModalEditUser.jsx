import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import ModalConfirmDelete from './ModalConfirmDelete'

const { getUser, getUsers } = userActions

const ModalEditUser = ({ edit, userFile }) => {

  const userStore = useSelector((store) => store.user)
  const [newRole, setNewRole] = useState(userStore?.response?.user?.role)
  const [newStatus, setNewStatus] = useState(userStore?.response?.user?.status)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(userFile))
  }, [])

  // defaultChecked = { userStore?.response?.user?.role === 'ADMIN_ROLE' ? true : false

  if (document.getElementById('formEdit')) {
    if (userStore?.response?.user?.role === 'ADMIN_ROLE') {
      document.getElementById('adminRole').defaultChecked = true
    } else {
      document.getElementById('userRole').defaultChecked = true
    }
    if (userStore?.response?.user?.status) {
      document.getElementById('statusActive').defaultChecked = true
    } else {
      document.getElementById('statusInactive').defaultChecked = true
    }
  }


  return (
    <div className='w-screen h-screen fixed z-10 top-0 flex justify-center items-center bg-[#0f2942] bg-opacity-70 backdrop-blur-sm px-6 py-10'>
      <div className='w-full h-full overflow-auto bg-[#f1f8fe] flex flex-col justify-start relative items-center py-5 max-w-[700px] rounded-md px-3'>
        <span onClick={() => { edit(), dispatch(getUsers()) }} className='absolute top-5 right-5'>
          <svg fill="#0f29420" width={'35px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
        </span>
        <p className='w-full text-center text-2xl font-[600] mt-16 mb-5'>{userStore?.response?.employee?.name.toUpperCase()}</p>
        <p className='w-full max-w-[500px] mb-5'>Legajo: <span className='font-[500] pl-2'>{userStore?.response?.user?.fileNumber}</span></p>
        <form id='formEdit' className='flex flex-col justify-center items-center w-full'>
          <label className='flex flex-col max-w-[500px] w-full gap-5 justify-center border py-5'>
            <span className='flex w-4/5 max-w-[270px] md:max-w-[350px]'>Actualizar rol de usuario:</span>
            <div className='flex gap-10 justify-center'>
              <label>
                <input onClick={(e) => { setNewRole(e.target.value) }} className='peer hidden' type="radio" value='ADMIN_ROLE' name='role' id='adminRole' />
                <p className='peer-checked:bg-[#3c7720] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Admin</p>
              </label>
              <label>
                <input onClick={(e) => { setNewRole(e.target.value) }} className='peer hidden' type="radio" value='USER_ROLE' name='role' id='userRole' />
                <p className='peer-checked:bg-[#3c7720] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Usuario</p>
              </label>
            </div>
          </label>
          <label className='flex flex-col max-w-[500px] gap-5 py-5 border-x justify-center w-full'>
            <span className='flex w-4/5 max-w-[270px] md:max-w-[350px]'>Actualizar estado:</span>
            <div className='flex gap-10 justify-center'>
              <label>
                <input onClick={(e) => { setNewStatus(e.target.value) }} className='peer hidden' type="radio" value={true} name='status' id='statusActive' />
                <p className='peer-checked:bg-[#3c7720] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Activo</p>
              </label>
              <label>
                <input onClick={(e) => { setNewStatus(e.target.value) }} className='peer hidden' type="radio" value={false} name='status' id='statusInactive' />
                <p className='peer-checked:bg-[#94081f] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Inactivo</p>
              </label>
            </div>
          </label>
          <label className='flex flex-col max-w-[500px] gap-y-5 w-full border py-5'>
            <span className='flex w-4/5 max-w-[270px] md:max-w-[350px]'>Actualizar contraseña:</span>
            <input className='border-b w-[250px] outline-none pl-1' type="password" name='pass' id='pass' placeholder='Contraseña actual' />
            <input className='border-b w-[250px] outline-none pl-1' type="password" name='pass2' id='pass2' placeholder='Nueva contraseña' />
            <input className='border-b w-[250px] outline-none pl-1' type="password" name='pass3' id='pass3' placeholder='Confirmar nueva contraseña' />
          </label>
        </form>
        <input className="mt-10 mb-5 text-xl cursor-pointer px-6 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Editar" />
        <input onClick={() => { setConfirmDelete(true) }} className="text-xl cursor-pointer px-6 py-2 rounded-md bg-red-600 text-[#f1f8fe] hover:bg-red-500 transition-all duration-300" type="button" value="Eliminar usuario" />
      </div>
      {
        confirmDelete
          ? <ModalConfirmDelete
            employeeName={userStore?.response?.employee?.name.toUpperCase()}
            userFile={userFile}
            modal={setConfirmDelete}
          />
          : null
      }
    </div>
  )
}

export default ModalEditUser