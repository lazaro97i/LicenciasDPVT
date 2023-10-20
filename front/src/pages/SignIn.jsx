import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router-dom"
import authActions from "../store/users/auth/actions"

const { signinToken } = authActions

const SignIn = () => {

  const authStore = useSelector((store) => store.auth)
  const [tokenLogin, setTokenLogin] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (authStore?.success) {
      setTokenLogin(token)
      if (localStorage.getItem('token')) {
        navigate('/add-license')
      }
    }
    if (token && token !== tokenLogin) {
      dispatch(signinToken({ token: token }))
    }
  }, [authStore?.auth])

  return (
    <div id="home" className="w-screen h-full flex flex-col overflow-auto justify-start items-center px-6 pt-10 pb-20 bg-[#0f2942]">
      <h1 className='text-4xl md:text-5xl text-[#f1f8fe] text-center9 font-[700] mb-14 mt-20'>Licencias DPVT</h1>
      <FormSignIn />
    </div>
  )
}

export default SignIn