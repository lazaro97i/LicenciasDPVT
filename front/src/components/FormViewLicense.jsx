import React from 'react'

const FormViewLicense = () => {

  return (
    <>
      <h1 className='text-3xl'>Ver licencia</h1>
      <form className="border rounded-lg w-full max-w-[600px] flex flex-col items-center mt-20 py-10 gap-10 bg-transparent">
        <p className="text-2xl">Ingresar Legajo:</p>
        <label className="flex flex-col bg-transparent w-[250px]">
          <input className="border-b outline-none py-1 pl-2" type="text" name="user" id="user" placeholder='Legajo' />
        </label>
      </form>
      <input className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[#101a50] hover:text-[#f0f1ef] transition-all duration-300" type="submit" value="Ver" />
    </>
  )
}

export default FormViewLicense