import React, { useEffect, useState } from "react"
import FormSignIn from "../components/FormSignIn"

const Home = () => {

  let token = localStorage.getItem('token')
  const [isToken, setToken] = useState(false)

  useEffect(() => {
    if (token) {
      setToken(true)
    }
  }, [])

  return (
    <div id="home" className="h-screen w-full flex flex-col justify-center items-center px-6">
      <h1 className="text-3xl">Registro de Asistencias</h1>
      {
        isToken ?
          null
          : <FormSignIn />
      }
    </div>
  )
}

export default Home