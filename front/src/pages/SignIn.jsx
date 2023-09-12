import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SignIn = () => {

  const [isToken, setToken] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token) {
      setToken(true)
      navigate("/reg_licence")
    }
  }, [])

  return (
    <div id="home" className="div-contain h-screen w-full flex flex-col justify-center items-center px-6">
      {
        isToken ?
          null
          :
          <FormSignIn />
      }
    </div>
  )
}

export default SignIn