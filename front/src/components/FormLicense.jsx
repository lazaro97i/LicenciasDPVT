import React, { useEffect, useRef, useState } from 'react'
import licenseActions from '../store/licenses/actions'
import employeeActions from '../store/employees/actions'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

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

  const handleData = async (e) => {
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
    let response = await dispatch(createLicense(data))
    if (response?.payload?.success) {
      toast.success('Licencia creada exitosamente')
    } else {
      toast.error(response?.payload?.message)
    }
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

  const daysOfLicense = (e) => {
    let initialDate = inpStartDate.current.value.split('-')
    let finalDate = inpEndDate.current.value.split('-')
    let initialDateFormat = new Date(initialDate[0], initialDate[1] - 1, initialDate[2])
    let finalDateFormat = new Date(finalDate[0], finalDate[1] - 1, finalDate[2])
    let days = Math.floor((finalDateFormat - initialDateFormat) / (1000 * 60 * 60 * 24)) + 1
    let daysOfLicense = 0

    if (initialDateFormat > finalDateFormat) {
      toast.error('El fin de licencia debe ser una fecha mayor a la fecha de inicio', { duration: 6000 })
      inpEndDate.current.value = null
    }
    if (initialDateFormat.getDay() === 0 ||
      finalDateFormat.getDay() === 0 ||
      initialDateFormat.getDay() === 6 ||
      finalDateFormat.getDay() === 6) {
      toast.error('Las licencias no pueden iniciar ni finalizar un dia no laboral')
      inpStartDate.current.value = null
      inpEndDate.current.value = null
      document.getElementById('daysOfLicenseSpan').classList.add('hidden')
    }

    for (let i = 0; i < days; i++) {
      if (initialDateFormat > finalDateFormat) {
        break
      }
      if (initialDateFormat.getDay() !== 0 && initialDateFormat.getDay() !== 6) {
        daysOfLicense++
      } else {
        days = days + 1
      }
      initialDateFormat.setDate(initialDateFormat.getDate() + 1)
    }
    document.getElementById('daysOfLicenseSpan').textContent = `${daysOfLicense} dias de 
    licencia`
    if (daysOfLicense > 0) {
      document.getElementById('daysOfLicenseSpan').classList.remove('hidden')
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <p className='mb-10 text-3xl text-center'>Agregar lincencia</p>
      <form action="post" className='w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border rounded-lg py-10'>
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
            <input ref={inpStartDate} onChange={daysOfLicense} type="date" name="startDate" id="startDate" className='outline-none border-b rounded-sm text-center max-w-[270px] md:max-w-[350px]' />
            <input ref={inpEndDate} onChange={daysOfLicense} type="date" name="endDate" id="endDate" className='outline-none border-b rounded-sm text-center max-w-[270px] md:max-w-[350px]' />
            <span id='daysOfLicenseSpan' className='col-span-2 text-center mt-3'></span>
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
      <input onClick={handleData} className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[z] hover:text-[#f0f1ef] transition-all duration-300" type="button" value="Aceptar" />
    </div>
  )
}

export default FormLicense