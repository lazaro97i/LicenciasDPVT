import React from "react"

const Home = () => {
  return (
    <div id="home" className="h-screen w-full flex flex-col justify-center items-center px-6">
      <h1 className="text-3xl">Registro de Asistencias</h1>
      <form className="border rounded-lg w-full max-w-[600px] flex flex-col items-center mt-20 py-10 gap-10 bg-transparent" action="post">
        <p className="text-2xl">Iniciar Sesion</p>
        <label htmlFor="user" className="flex flex-col bg-transparent w-[250px]">
          Usuario
          <input className="border-b outline-none py-1 pl-2" type="text" name="user" id="user" />
        </label>
        <label htmlFor="password" className="flex flex-col bg-transparent w-[250px]">
          Contraseña
          <input className="border-b outline-none py-1 pl-2" type="password" name="password" id="password" />
        </label>
      </form>
      <div className="w-full max-w-[600px] flex mt-3"><p className="underline cursor-pointer self-start">Olvide la contraseña</p></div>
      <input className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[#101a50] hover:text-[#f0f1ef] transition-all duration-300" type="button" value="Acceder" />
    </div>
  )
}

export default Home