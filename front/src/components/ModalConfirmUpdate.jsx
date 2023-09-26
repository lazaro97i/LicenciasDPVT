import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import toast from 'react-hot-toast'

const { updateUser, getUsers } = userActions

const ModalConfirmUpdate = ({ employeeName, userFile, role, status, password, modalUpdate, modalEdit }) => {

  const userStore = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const data = {
    fileNumber: userFile,
  }

  if (role) {
    if (role === 'ADMIN_ROLE') {
      role = 'Admin'
      data.role = 'ADMIN_ROLE'
    } else {
      role = 'Usuario'
      data.role = 'USER_ROLE'
    }
  }
  if (userStore?.user?.user?.status.toString() === status) {
    data.status = userStore?.user?.user?.status
  } else {
    data.status = !userStore?.user?.user?.status
  }
  if (password) {
    data.password = password
  }

  const sendUpdate = async () => {

    let response = await dispatch(updateUser(data))
    if (response.payload.success) {
      toast.success('Se actualizaron los datos del usuario correctamente')
      modalEdit(false)
      modalUpdate(false)
      dispatch(getUsers())
    }
  }

  return (
    <div className='w-screen h-screen fixed z-10 top-0 flex justify-center items-center bg-[#09131d] bg-opacity-70 backdrop-blur-sm px-2 py-10'>
      <div className='bg-[#f1f8fe] w-4/5 min-w-[325px] flex flex-col justify-start items-center py-5 max-w-[500px] rounded-md px-3'>
        <p className='text-2xl mb-10'>Desea editar usuario?</p>
        <p className='text-xl font-[600] mb-2'>{employeeName}</p>
        <p>Legajo: <span className='font-[500]'>{userFile}</span></p>
        <div className='flex flex-col items-center mt-10 w-full'>
          {role ? <p className='text-[1.2rem] border-b pb-2 text-lime-600 text-end font-[500] w-full grid grid-cols-2 gap-2'>Nuevo rol: <span className='pl-3 text-start font-[400]'>{role}</span></p> : null}
          {userStore?.user?.user?.status.toString() !== status ? <p className='text-[1.2rem] border-b py-2 text-lime-600 text-end font-[500] w-full grid grid-cols-2 gap-2'>Nuevo estado: <span className='pl-3 text-start font-[400]'>{status === 'true' ? 'Activo' : 'Inactivo'}</span></p> : null}
          {password ? <p className='text-[1.2rem] border-b py-2 text-lime-600 text-end font-[500] w-full grid grid-cols-2 gap-2'>Nueva contraseña: <span className='text-center font-[400] flex items-center justify-start pl-3'>{password}</span></p> : null}
          {!role && userStore?.user?.user?.status.toString() === status && !password
            ? <p className='text-red-600 font-[500] text-xl'>No se realizaron cambios</p>
            : null
          }
        </div>
        <div className='flex flex-wrap gap-4 mt-10 mb-6 justify-center'>
          {
            !role && userStore?.user?.user?.status.toString() === status && !password
              ? null
              : <input onClick={sendUpdate} className="text-xl cursor-pointer px-3 py-2 rounded-md bg-lime-700 text-[#f1f8fe] hover:bg-lime-600 transition-all duration-300" type="button" value="Confirmar" />
          }
          <input onClick={() => { modalUpdate(false) }} className="text-xl cursor-pointer px-3 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Cancelar" />
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmUpdate