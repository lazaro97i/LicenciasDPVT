import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"
import { useDispatch, useSelector } from "react-redux"
import userActions from "../store/users/actions"
import { useNavigate, useLocation } from "react-router-dom"

const { signinToken } = userActions

const SignIn = () => {

  const userStore = useSelector((store) => store.user)
  const [tokenLogin, setTokenLogin] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (userStore?.success) {
      setTokenLogin(token)
      if (localStorage.getItem('token')) {
        navigate('/reg_license')
      }
    }
    if (token && token !== tokenLogin) {
      dispatch(signinToken({ token: token }))
      console.log('holis');
    }
  }, [userStore?.success])

  return (
    <div id="home" className="div-contain h-screen w-full flex flex-col justify-center items-center px-6">
      <FormSignIn />
    </div>
  )
}

export default SignIn