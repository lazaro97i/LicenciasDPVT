import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import employeeActions from '../store/employees/actions'
import toast from 'react-hot-toast'

const { newEmployee } = employeeActions

const FormNewEmployee = () => {

  let inpFile = useRef('')
  let inpName = useRef('')
  let inpCuil = useRef('')
  let inpApart = useRef('')
  let inpPosition = useRef('')
  let inpFunction = useRef('')
  let inpKeyDate = useRef('')
  let inpZone = useRef('')
  let inpCamp = useRef('')
  let inpViatic = useRef('')
  let inpAdded = useRef('')
  let inpUprooting = useRef('')
  let inpDedication = useRef('')

  const dispatch = useDispatch()

  const resetForm = () => {
    let formInputs = document.getElementsByTagName('input')
    let file = document.getElementById('file')
    const arrayInputs = [...formInputs]

    arrayInputs.map((c, i) => {
      if (c.type !== 'button' && c.id !== 'file') {
        c.value = ""
        c.readOnly = false
        c.classList.remove('bg-[#a7a7a731]')
      }
    })
    file.readOnly = false
  }

  const sendData = async (e) => {
    let response
    let data = {
      fileNumber: inpFile.current.value,
      name: (inpName.current.value).toLowerCase(),
      apartDiv: (inpApart.current.value).toLowerCase(),
      position: (inpPosition.current.value).toLowerCase(),
      function: (inpFunction.current.value).toLowerCase(),
      keyDate: (inpKeyDate.current.value).toLowerCase(),
      zone: (inpZone.current.value).toLowerCase(),
      camp: (inpCamp.current.value).toLowerCase(),
      viaticB: (inpViatic.current.value).toLowerCase(),
      added: (inpAdded.current.value).toLowerCase(),
      uprooting: (inpUprooting.current.value).toLowerCase(),
      dedicationOp: (inpDedication.current.value).toLowerCase(),
      cuil: inpCuil.current.value
    }
    response = await dispatch(newEmployee(data))
    console.log(response)
    if (response.payload.success) {
      toast.success('Empleado agregado correctamente')
      resetForm()
    } else {
      toast.error(response.payload.message)
    }
    console.log(response)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <p className='mb-10 text-4xl font-[600] text-center'>Agregar empleado</p>
      <form id='formLicenses' action="post" className='w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border border-[#a6aaae] rounded-sm py-10'>
        <label className='md:col-span-2 lg:col-span-4 relative'>
          <label className='relative'>
            <input ref={inpFile} onClick={(e) => e.target.readOnly ? e.target.readOnly = false : null} type="number" name="file" id="file" placeholder='Legajo' className='pl-7 outline-none border-b border-[#a6aaae] w-4/5 max-w-[270px] md:max-w-[350px]' />
            <span onClick={() => { resetForm(), document.getElementById('file').value = '' }} className='absolute right-10 top-[-3px] cursor-pointer'>
              <svg fill="#0f2942" width={'25px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
            </span>
          </label>
        </label>
        <label className='md:col-span-2'>
          <input ref={inpName} type="text" name="name" id="name" placeholder='Apellido y nombre' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label className='md:col-span-2'>
          <input ref={inpCuil} type="number" name="cuil" id="cuil" placeholder='Nro. Cuil' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpApart} type="text" name="apartDiv" id="apartDiv" placeholder='Depto/Div' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpPosition} type="text" name="position" id="position" placeholder='Cargo' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpFunction} type="text" name="function" id="function" placeholder='Funcion' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpKeyDate} type="text" name="keyDate" id="keyDate" placeholder='Fecha clave' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpZone} type="text" name="zone" id="zone" placeholder='Zona' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpCamp} type="text" name="camp" id="camp" placeholder='Campamento' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpViatic} type="text" name="viaticB" id="viaticB" placeholder='Viatico "B"' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpAdded} type="text" name="added" id="added" placeholder='Adscripto' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpUprooting} type="text" name="uprooting" id="uprooting" placeholder='Desarraigo' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpDedication} type="text" name="dedicationOp" id="dedicationOp" placeholder='Dedicacion op.' className='outline-none border-b border-[#a6aaae] pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
      </form>
      <input onClick={sendData} id='addButton' className="mt-10 bg-[#0f2942] text-xl cursor-pointer px-6 py-2 rounded-md text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Agregar" />
    </div>
  )
}

export default FormNewEmployee