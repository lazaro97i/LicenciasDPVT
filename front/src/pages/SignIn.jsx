import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"
import { useDispatch, useSelector } from "react-redux"
import userActions from "../store/users/actions"
import { useNavigate } from "react-router-dom"

const { signinToken } = userActions

const SignIn = () => {

  const userStore = useSelector((store) => store.user)
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (localStorage.getItem('token')) {
      setIsLogged(true)
      navigate("/reg_licence")
    } else {
      setIsLogged(false)
    }
  }, [])

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