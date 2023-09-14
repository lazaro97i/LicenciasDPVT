import React, { useEffect, useRef, useState } from 'react'
import licenseActions from '../store/licenses/actions'
import employeeActions from '../store/employees/actions'
import { useDispatch, useSelector } from 'react-redux'

const { createLicense } = licenseActions
const { getEmployee } = employeeActions

const FormLicense = (licenses) => {

  const dispatch = useDispatch()
  const employeeStore = useSelector((store) => store.employee)

  let inpFile = useRef('')
  let inpName = useRef('')
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
  let inpStartDate = useRef('')
  let inpEndDate = useRef('')
  let [typeLicense, setTipeLicense] = useState(null)
  let inpObserv = useRef('')

  const handleData = async () => {
    const data = {
      fileNumber: (inpFile.current.value).toLowerCase(),
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
      typeLicense: (typeLicense).toLowerCase(),
      startDate: inpStartDate.current.value,
      endDate: inpEndDate.current.value,
      observation: (inpObserv.current.value).toLowerCase()
    }
    dispatch(createLicense(data))
  }

  const [file, setFile] = useState(null)

  useEffect(() => {
    if (file?.length === 4) {
      dispatch(getEmployee(file))
    }
  }, [file])

  useEffect(() => {
    let formInputs = document.getElementsByTagName('input')
    let file = document.getElementById('file')
    const arrayInputs = [...formInputs]
    if (employeeStore?.success) {
      arrayInputs.map((c, i) => {
        if (c.type === 'text') {
          let employee = Object.entries(employeeStore.employee)
          c.value = employee[i][1]
          c.readOnly = true
          c.classList.add('bg-[#a7a7a731]', 'rounded-t-sm')
        }
      })
      file.readOnly = true
    } else {
      arrayInputs.map((c, i) => {
        if (c.type === 'text') {
          c.value = ""
          c.readOnly = false
          c.classList.remove('bg-[#a7a7a731]')
        }
      })
      file.readOnly = false
    }
  }, [employeeStore])

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <p className='mb-10 text-3xl text-center'>Lincencias</p>
      <form id='formLicense' className='w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border rounded-lg py-10'>
        <label className='md:col-span-2 lg:col-span-4'>
          <input ref={inpFile} onClick={(e) => e.target.readOnly ? e.target.readOnly = false : null} onInput={(e) => setFile(e.target.value)} type="number" name="file" id="file" placeholder='Legajo' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label className='md:col-span-2 lg:col-span-4'>
          <input ref={inpName} type="text" name="name" id="name" placeholder='Apellido y nombre' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpApart} type="text" name="apartDiv" id="apartDiv" placeholder='Depto/Div' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpPosition} type="text" name="position" id="position" placeholder='Cargo' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpFunction} type="text" name="function" id="function" placeholder='Funcion' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpKeyDate} type="text" name="keyDate" id="keyDate" placeholder='Fecha clave' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpZone} type="text" name="zone" id="zone" placeholder='Zona' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpCamp} type="text" name="camp" id="camp" placeholder='Campamento' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpViatic} type="text" name="viaticB" id="viaticB" placeholder='Viatico "B"' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpAdded} type="text" name="added" id="added" placeholder='Adscripto' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpUprooting} type="text" name="uprooting" id="uprooting" placeholder='Desarraigo' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label>
          <input ref={inpDedication} type="text" name="dedicationOp" id="dedicationOp" placeholder='Dedicacion op.' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label className='md:col-span-2'>
          <label className='grid grid-rows-2 grid-cols-2 w-4/5 max-w-[270px] md:max-w-[450px] gap-x-3 md:gap-x-10'>
            <span className=''>Inicio de licencia:</span>
            <span>Fin de licencia:</span>
            <input ref={inpStartDate} type="date" name="startDate" id="startDate" className='outline-none border-b rounded-sm text-center max-w-[270px] md:max-w-[350px]' />
            <input ref={inpEndDate} type="date" name="endDate" id="endDate" className='outline-none border-b rounded-sm text-center max-w-[270px] md:max-w-[350px]' />
          </label>
        </label>
        <label className='flex flex-col gap-4 md:col-span-2 lg:col-span-4'>
          <span className='text-start w-4/5 max-w-[270px] md:max-w-[350px]'>Tipo de licencia:</span>
          <select onClick={(e) => setTipeLicense(e.target.value)} name="select" id="select" className='outline-none bg-transparent border-b w-4/5 max-w-[270px] md:max-w-[350px]'>
            <option value={null} className='[display:none]'>Seleccione un tipo de licencia</option>
            {
              licenses.licenses.map((l, i) => {
                return (
                  <option key={i} value={l}>{l}</option>
                )
              })
            }
          </select>
        </label>
        <label className='md:col-span-2 lg:col-span-4'>
          <textarea ref={inpObserv} name="textarea" id="observationsArea" placeholder='Observaciones ...' className='bg-[#101b436e] resize-none w-4/5 max-w-[270px] md:max-w-[350px] h-[150px] pl-1 rounded-sm border border-[#f0f1ef35]  outline-none'></textarea>
        </label>
      </form>
      <input onClick={handleData} className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[#101a50] hover:text-[#f0f1ef] transition-all duration-300" type="button" value="Aceptar" />
    </div>
  )
}

export default FormLicense