import React from "react"
import FormSignIn from "../components/FormSignIn"

const Home = () => {
  return (
    <div id="home" className="h-screen w-full flex flex-col justify-center items-center px-6">
      <h1 className="text-3xl">Registro de Asistencias</h1>
      <FormSignIn />
    </div>
  )
}

export default Home