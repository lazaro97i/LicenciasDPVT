import React from "react"

const Home = () => {
  return (
    <div id="home" className="h-screen w-full flex flex-col justify-center items-center px-6">
      <h1 className="text-3xl">Registro de Asistencias</h1>
      <form className="border rounded-lg w-full max-w-[800px] flex flex-col items-center mt-20 py-10 gap-10 bg-transparent" action="post">
        <p className="text-2xl">Iniciar Sesion</p>
        <label htmlFor="user" className="flex flex-col bg-transparent w-[250px] gap-1">
          Usuario
          <input className="border-b outline-none py-1 pl-2" type="text" name="user" id="user" />
        </label>
        <label htmlFor="password" className="flex flex-col bg-transparent w-[250px] gap-3">
          Contraseña
          <input className="border-b outline-none py-1 pl-2" type="password" name="password" id="password" />
        </label>
      </form>
      <p className="underline w-full max-w-[800px] mt-2">Olvide la contraseña</p>
      <input className="mt-10 text-xl border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff]" type="button" value="Acceder" />
    </div>
  )
}

export default Home