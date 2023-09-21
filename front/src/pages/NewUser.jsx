import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const { signUp, signinToken } = userActions

const NewUser = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userStore = useSelector((store) => store.user)
  const inpFile = useRef(null)
  const inpPass = useRef(null)
  const inpPhoto = useRef(null)
  const [role, setRole] = useState(null)

  useEffect(() => {
    if (userStore.userAuth.length > 0 &&
      userStore.userAuth.role !== 'ADMIN_ROLE') {
      navigate('/')
    }
  }, [])

  const submitSignout = async (e) => {
    const data = {
      fileNumber: inpFile.current.value ? inpFile.current.value : null,
      password: inpPass.current.value ? inpPass.current.value : null,
      photo: inpPhoto.current.value,
      role: role
    }
    let response = await dispatch(signUp(data))
    if (response.payload.success) {
      toast.success('Usuario creado correctamente')
      dispatch(signinToken({ token: localStorage.getItem('token') }))
    } else if (response.payload.message === 'Usuario no autorizado') {
      toast.error(response.payload.message)
      dispatch(signinToken({ token: localStorage.getItem('token') }))
    } else {
      response?.payload?.message?.map((e) => {
        e.message ? toast.error(e.message) : toast.error(e)
        dispatch(signinToken({ token: localStorage.getItem('token') }))
      })
    }
  }


  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      <p className='text-4xl mb-10 font-[600]'>Agregar usuario</p>
      <form className='w-full max-w-[600px] grid grid-cols-1 gap-10 border rounded-sm py-10' >
        <label>
          <input ref={inpFile} className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' type="number" name="file" id="file" placeholder='Legajo' />
        </label>
        <label>
          <input ref={inpPass} className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' type="password" name="pass" id="pass" placeholder='Contraseña' />
        </label>
        <label>
          <input ref={inpPhoto} className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' type="url" name="photo" id="photo" placeholder='Url foto' />
        </label>
        <label className='flex flex-col gap-5 justify-center'>
          <span className='flex w-4/5 max-w-[270px] md:max-w-[350px]'>Rol de usuario:</span>
          <div className='flex gap-10 justify-center'>
            <label>
              <input onClick={(e) => { setRole(e.target.value) }} className='peer hidden' type="radio" value='ADMIN_ROLE' name='role' />
              <p className='peer-checked:bg-[#3c7720] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Admin</p>
            </label>
            <label>
              <input onClick={(e) => { setRole(e.target.value) }} className='peer hidden' type="radio" value='USER_ROLE' name='role' />
              <p className='peer-checked:bg-[#3c7720] peer-checked:text-[#f1f8fe] cursor-pointer bg-transparent py-1 w-[100px] text-center rounded-md border border-[#0f2942] peer-checked:border-[#f1f8fe]'>Usuario</p>
            </label>
          </div>
        </label>
      </form >
      <input onClick={submitSignout} className="mt-10 text-xl cursor-pointer px-6 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Agregar" />
    </div >
  )
}

export default NewUser