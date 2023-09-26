import React, { useEffect } from 'react'
import userActions from '../store/users/actions'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const { softDelete, getUsers, getUser } = userActions

const ModalConfirmDelete = ({ userFile, modalDelete, modalEdit }) => {

  const dispatch = useDispatch()
  const userStore = useSelector((store) => store.user)

  useEffect(() => {
    if (!modalEdit) {
      dispatch(getUser(userFile))
    }
  }, [])

  const deleteUser = async () => {
    let response = await dispatch(softDelete(userFile))
    if (response?.payload?.success) {
      toast.success('Usuario eliminado correctamente')
      modalDelete(false)
      if (modalEdit) {
        modalEdit(false)
      }
      dispatch(getUsers())
    }
  }

  return (
    <div className='w-screen h-screen fixed z-10 top-0 flex justify-center items-center bg-[#09131d] bg-opacity-70 backdrop-blur-sm px-6 py-10'>
      <div className='bg-[#f1f8fe] flex flex-col justify-start items-center py-5 max-w-[700px] rounded-md px-3'>
        <p className='text-2xl mb-10'>Desea eliminar usuario?</p>
        <p className='text-xl font-[600] mb-2'>{userStore?.user?.employee?.name.toUpperCase()}</p>
        <p>Legajo: <span className='font-[500]'>{userFile}</span></p>
        <div className='flex flex-wrap gap-4 mt-10 mb-6 justify-center'>
          <input onClick={deleteUser} className="text-xl cursor-pointer px-3 py-2 rounded-md bg-red-700 text-[#f1f8fe] hover:bg-red.600 transition-all duration-300" type="button" value="Confirmar" />
          <input onClick={() => { modalDelete(false), modalEdit ? null : dispatch(getUsers()) }} className="text-xl cursor-pointer px-3 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Cancelar" />
        </div>
      </div>
    </div>
  )
}

export default ModalConfirmDelete