import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"
import { useDispatch, useSelector } from "react-redux"
import userActions from "../store/users/actions"
import { useNavigate, useLocation } from "react-router-dom"

const { signinToken } = userActions

const SignIn = () => {

  const userStore = useSelector((store) => store.user)
  const [isLogged, setIsLogged] = useState(false)
  const [tokenLogin, setTokenLogin] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setTokenLogin(token)
    } else {
      setIsLogged(false)
      navigate('/')
    }
  }, [])

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token !== tokenLogin) {
      dispatch(signinToken(token))
      if (!userStore?.success) {
        setIsLogged(false)
        navigate('/')
      } else {
        setIsLogged(true)
        navigate('/reg_license')
      }
    } else {
      setIsLogged(true)
      navigate('/reg_license')
    }
  }, [userStore?.success])

  return (
    <div id="home" className="div-contain h-screen w-full flex flex-col justify-center items-center px-6">
      {
        isLogged ?
          null
          :
          <FormSignIn />
      }
    </div>
  )
}

export default SignIn