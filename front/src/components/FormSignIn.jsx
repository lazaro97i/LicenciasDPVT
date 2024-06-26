import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import userActions from '../store/users/actions'
import toast from 'react-hot-toast'
import Loader from './Loader'

const { signIn } = userActions

const FormSignIn = () => {

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inpUser = useRef(null)
  const inpPass = useRef(null)

  const sendUser = async () => {

    const dataUser = {
      fileNumber: inpUser.current.value,
      password: inpPass.current.value
    }

    if (!inpUser.current.value.length || !inpPass.current.value.length) {
      alert("Debe ingresar usuario y contraseña.")
    } else {
      try {
        setLoading(true)
        let response = await dispatch(signIn(dataUser))
        if (response.payload.success) {
          localStorage.setItem('token', response.payload.response.token)
          navigate('/add-license')
          toast.success('Usuario autenticado')
        } else {
          toast.error(response.payload.message)
        }
      } catch (e) {
        console.log(e);
        toast.error(response.payload.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center bg-[#f1f8fe] py-10 rounded-lg md:max-w-[700px] px-6'>
      <form onKeyDown={(e) => { e.code === 'Enter' ? sendUser() : null }} className="border rounded-sm w-full max-w-[600px] flex flex-col items-center py-10 gap-10 bg-transparent" action="post">
        <p className="text-2xl font-[500]">Iniciar Sesion</p>
        <label className="flex flex-col bg-transparent w-[250px]">
          <input ref={inpUser} className="border-b outline-none py-1 pl-2" type="number" name="user" id="user" placeholder='Legajo' />
        </label>
        <label className="flex flex-col bg-transparent w-[250px]">
          <input ref={inpPass} className="border-b outline-none py-1 pl-2" type="password" name="password" id="password" placeholder='Contraseña' />
        </label>
      </form>
      <div className="w-full max-w-[600px] flex mt-3"><p className="underline cursor-pointer self-start">Olvide la contraseña</p></div>
      {
        loading
          ? <span className=''>
            <Loader />
          </span>
          : <input onClick={sendUser} className="mt-10 text-xl cursor-pointer px-6 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Iniciar sesion" />
      }
    </div>
  )
}

export default FormSignIn