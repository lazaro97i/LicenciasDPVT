import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import userActions from '../store/users/actions'

const { signIn, signinToken } = userActions

const FormSignIn = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inpUser = useRef(null)
  const inpPass = useRef(null)

  const sendUser = async (e) => {
    e.preventDefault()

    const dataUser = {
      email: inpUser.current.value,
      password: inpPass.current.value
    }

    if (!inpUser.current.value.length || !inpPass.current.value.length) {
      alert("Debe completar los datos")
    } else {
      let response = await dispatch(signIn(dataUser))
      if (response.payload.success) {
        let token = await localStorage.setItem('token', response.payload.response.token)
        dispatch(signinToken({ token: token }))
        navigate('/reg_licence')
      }
    }
  }

  return (
    <>
      <h1 className='text-3xl'>Registro de licencias</h1>
      <form className="border rounded-lg w-full max-w-[600px] flex flex-col items-center mt-20 py-10 gap-10 bg-transparent" action="post">
        <p className="text-2xl">Iniciar Sesion</p>
        <label className="flex flex-col bg-transparent w-[250px]">
          <input ref={inpUser} className="border-b outline-none py-1 pl-2" type="text" name="user" id="user" placeholder='Usuario' />
        </label>
        <label className="flex flex-col bg-transparent w-[250px]">
          <input ref={inpPass} className="border-b outline-none py-1 pl-2" type="password" name="password" id="password" placeholder='Contraseña' />
        </label>
      </form>
      <div className="w-full max-w-[600px] flex mt-3"><p className="underline cursor-pointer self-start">Olvide la contraseña</p></div>
      <input onClick={sendUser} className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[#101a50] hover:text-[#f0f1ef] transition-all duration-300" type="button" value="Acceder" />
    </>
  )
}

export default FormSignIn