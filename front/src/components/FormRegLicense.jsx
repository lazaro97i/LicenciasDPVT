import React, { useRef } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import regLicensesActions from '../store/regLicenses/actions'

const { createRegLicense } = regLicensesActions

const FormRegLicense = () => {

  const dispatch = useDispatch()

  let legajo = useRef(null)
  let nroExpediente = useRef(null)
  let fechaDesde = useRef(null)
  let fechaHasta = useRef(null)
  let enfermedadCDDA = useRef(null)
  let enfermedadCDTA = useRef(null)
  let enfermedadLDDA = useRef(null)
  let enfermedadLDTA = useRef(null)
  let estudiosDA = useRef(null)
  let estudiosTA = useRef(null)
  let inciso9DA = useRef(null)
  let inciso9TA = useRef(null)
  let familiarEnfermoDA = useRef(null)
  let familiarEnfermoTA = useRef(null)
  let anualRegPendiente = useRef(null)
  let anualRegAcordPP = useRef(null)
  let anualRegTA = useRef(null)
  let anualRegDT = useRef(null)
  let anualRegSaldo = useRef(null)
  let diaFemDA = useRef(null)
  let diaFemTA = useRef(null)
  let anticLicDA = useRef(null)
  let anticLicTA = useRef(null)
  let licenciasDA = useRef(null)
  let licenciasTA = useRef(null)
  let parteMedDA = useRef(null)
  let parteMedTA = useRef(null)
  let accidenteTrabDA = useRef(null)
  let accidenteTrabTA = useRef(null)
  let inpObserv = useRef(null)
  let llegadasTarde = useRef(null)


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
    inpObserv.current.value = ''
    document.getElementById('daysOfLicenseSpan').classList.add('hidden')
    file.readOnly = false
  }

  const daysOfLicense = (e) => {
    let initialDate = fechaDesde.current.value.split('-')
    let finalDate = fechaHasta?.current?.value.split('-')
    let initialDateFormat = new Date(initialDate[0], initialDate[1] - 1, initialDate[2])
    let finalDateFormat = new Date(finalDate[0], finalDate[1] - 1, finalDate[2])

    //Vrifica que la fecha final no sea mayor a la inicial
    if (initialDateFormat > finalDateFormat) {
      toast.error('La fecha final debe ser mayor a la fecha de inicio', { duration: 6000 })
      fechaHasta.current.value = null
    }

    //Verifica que las fechas no inicien ni terminen un fin de semana S/D
    if (initialDateFormat.getDay() === 0 ||
      initialDateFormat.getDay() === 6) {
      toast.error('Las fechas no pueden iniciar ni finalizar un dia no laboral')
      fechaDesde.current.value = null
      document.getElementById('daysOfLicenseSpan').classList.add('hidden')
    }
    if (finalDateFormat.getDay() === 0 ||
      finalDateFormat.getDay() === 6) {
      toast.error('Las fechas no pueden iniciar ni finalizar un dia no laboral')
      fechaHasta.current.value = null
      document.getElementById('daysOfLicenseSpan').classList.add('hidden')
    }
  }

  const handleData = async (e) => {
    // console.log(fechaDesde.current.value.split('-'))

    if(legajo.current.value === "" || nroExpediente.current.value === ""){
      toast.error('Debe completar legajo y nro de expediente.')
      return;
    }

    if(fechaDesde.current.value === "" || fechaHasta.current.value === ""){
      toast.error('Debe completar fechas de utilización')
      return;
    }

    const data = {
      legajo: legajo.current.value,
      nroExpediente: nroExpediente.current.value,
      enfermedadCD: {
        diasAcordados: enfermedadCDDA.current.value,
        totalAcumulados: enfermedadCDTA.current.value
      },
      enfermedadLD: {
        diasAcordados: enfermedadLDDA.current.value,
        totalAcumulados: enfermedadLDTA.current.value
      },
      estudios: {
        diasAcordados: estudiosDA.current.value,
        totalAcumulados: estudiosTA.current.value
      },
      inciso9AnticipoLic: {
        diasAcordados: inciso9DA.current.value,
        totalAcumulados: inciso9TA.current.value
      },
      familiarEnfermo: {
        diasAcordados: familiarEnfermoDA.current.value,
        totalAcumulados: familiarEnfermoTA.current.value
      },
      anualReglamentaria: {
        pendiente: anualRegPendiente.current.value,
        acordadaPPeriodo: anualRegAcordPP.current.value,
        totalAcumulada: anualRegTA.current.value,
        diasTomados: anualRegDT.current.value,
        saldo: anualRegSaldo.current.value
      },
      diaFem: {
        diasAcordados: diaFemDA.current.value,
        totalAcumulados: diaFemTA.current.value
      },
      anticipoLic: {
        diasAcordados: anticLicDA.current.value,
        totalAcumulados: anticLicTA.current.value
      },
      licencias: {
        diasAcordados: licenciasDA.current.value,
        totalAcumulados: licenciasTA.current.value
      },
      parteMedico: {
        diasAcordados: parteMedDA.current.value,
        totalAcumulados: parteMedTA.current.value
      },
      accidenteTrab: {
        diasAcordados: accidenteTrabDA.current.value,
        totalAcumulados: accidenteTrabTA.current.value
      },
      fechaDeUtilizacion: {
        desde: {
          dia: fechaDesde.current.value.split('-')[2],
          mes: fechaDesde.current.value.split('-')[1],
          año: fechaDesde.current.value.split('-')[0]
        },
        hasta: {
          dia: fechaHasta.current.value.split('-')[2],
          mes: fechaHasta.current.value.split('-')[1],
          año: fechaHasta.current.value.split('-')[0]
        }
      },
      observaciones: inpObserv.current.value,
      llegadasTarde: llegadasTarde.current.value
    }

    const response = await dispatch(createRegLicense(data))
    console.log(response)
    if (response.payload.success) {
      toast.success('Registro agregado correctamente')
      resetForm()
    } else {
      toast.error(response.payload.message, { duration: 6000 })
    }
  }

  const CalcularAcumuladoAnualYSaldo = async (e) => {

    anualRegTA.current.value = (parseInt(anualRegPendiente.current.value) + parseInt(anualRegAcordPP.current.value))
    anualRegSaldo.current.value = (parseInt(anualRegTA.current.value) - parseInt(anualRegDT.current.value))

  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form id='formLicenses' action="post" className='w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border border-[#a6aaae] rounded-sm py-10'>
        <label className='col-span-2 md:col-span-1 lg:col-span-2 relative'>
          <label className='relative'>
            <input ref={legajo} onClick={(e) => e.target.readOnly ? e.target.readOnly = false : null} type="number" name="file" id="file" placeholder='Legajo' className='pl-7 outline-none border-b border-[#a6aaae] w-4/5 max-w-[270px] md:max-w-[350px]' />
            <span onClick={() => { resetForm(), document.getElementById('file').value = '' }} className='absolute right-10 top-[-3px] cursor-pointer'>
              <svg fill="#0f2942" width={'25px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
            </span>
          </label>
        </label>
        <label className='col-span-2 md:col-span-1 lg:col-span-2'>
          <label className='flex flex-wrap gap-x-2'>
            <span className='underline mb-3 w-full text-center'>Nro. expediente</span>
            <input ref={nroExpediente} type="number" name="nroExpediente" id="nroExpediente" placeholder='N°' className='outline-none border-b border-[#a6aaae] w-3/5 max-w-[270px] md:max-w-[350px] text-center' />
          </label>
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Enfermedad C/D</span>
          <input ref={enfermedadCDDA} type="number" name="enfermedadCDDA" id="enfermedadCDDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={enfermedadCDTA} type="number" name="enfermedadCDTA" id="enfermedadCDTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Enfermedad L/D</span>
          <input ref={enfermedadLDDA} type="number" name="enfermedadLDDA" id="enfermedadLDDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={enfermedadLDTA} type="number" name="enfermedadLDTA" id="enfermedadLDTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Estudios</span>
          <input ref={estudiosDA} type="number" name="estudiosDA" id="estudiosDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={estudiosTA} type="number" name="estudiosTA" id="estudiosTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Inciso 9° aticipo Lic.</span>
          <input ref={inciso9DA} type="number" name="inciso9DA" id="inciso9DA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={inciso9TA} type="number" name="inciso9TA" id="inciso9TA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Familiar enfermo</span>
          <input ref={familiarEnfermoDA} type="number" name="familiarEnfermoDA" id="familiarEnfermoDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={familiarEnfermoTA} type="number" name="familiarEnfermoTA" id="familiarEnfermoTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Dia femenino</span>
          <input ref={diaFemDA} type="number" name="fiaFemDA" id="fiaFemDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={diaFemTA} type="number" name="diaFemTA" id="diaFemTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Anticipo de licencia</span>
          <input ref={anticLicDA} type="number" name="anticipoDeLicenciaDA" id="anticipoDeLicenciaDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={anticLicTA} type="number" name="anticipoDeLicenciaTA" id="anticipoDeLicenciaTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Licencias</span>
          <input ref={licenciasDA} type="number" name="licenciasDA" id="licenciasDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={licenciasTA} type="number" name="licenciasTA" id="licenciasTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Parte medico</span>
          <input ref={parteMedDA} type="number" name="parteMedDA" id="parteMedDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={parteMedTA} type="number" name="parteMedTA" id="parteMedTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2 md:col-span-1'>
          <span className='underline mb-3 w-full text-center'>Accidente de trabajo</span>
          <input ref={accidenteTrabDA} type="number" name="accidenteTrabDA" id="accidenteTrabDA" placeholder='Dias Acord.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          <input ref={accidenteTrabTA} type="number" name="accidenteTrabTA" id="accidenteTrabTA" placeholder='Total Acum.' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
        </label>
        <label className='flex flex-wrap gap-x-2 col-span-2'>
          <span className='underline mb-3 w-full text-center'>Anual reglamentaria</span>
          <label className='flex gap-y-3 justify-evenly w-full flex-wrap gap-x-2'>
            <input onInput={CalcularAcumuladoAnualYSaldo} ref={anualRegPendiente} type="number" name="anualRegPendiente" id="anualRegPendiente" placeholder='Pendiente' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
            <input onInput={CalcularAcumuladoAnualYSaldo} ref={anualRegAcordPP} type="number" name="anualRegAcordPP" id="anualRegAcordPP" placeholder='Acordada P/Periodo' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
            <input ref={anualRegTA} readOnly type="number" name="anualRegTA" id="anualRegTA" placeholder='Total Acumulada' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
            <input onInput={CalcularAcumuladoAnualYSaldo} ref={anualRegDT} type="number" name="anualRegDT" id="anualRegDT" placeholder='Dias Tomados' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
            <input ref={anualRegSaldo} readOnly type="number" name="anualRegSaldo" id="anualRegSaldo" placeholder='Saldo' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
          </label>
        </label>
        <div className='w-full flex justify-center col-span-2'>
          <div className='md:col-span-2 grid grid-rows-1 grid-cols-2 w-[350px] items-center'>
            <span className=' col-span-2 w-full text-center mb-3 underline'>Fecha de utilizacion</span>
            <label className='flex flex-col'>
              <span>Desde:</span>
              <input ref={fechaDesde} onChange={daysOfLicense} type="date" name="startDate" id="startDate" className='outline-none border-b border-[#a6aaae] rounded-sm text-center' />
            </label>
            <label className='flex flex-col'>
              <span>Hasta:</span>
              <input ref={fechaHasta} onChange={daysOfLicense} type="date" name="startDate" id="startDate" className='outline-none border-b border-[#a6aaae] rounded-sm text-center' />
            </label>
            <span id='daysOfLicenseSpan' className='col-span-2 text-center mt-3'></span>
          </div>
        </div>
        <div className='w-full flex justify-center col-span-1'>
          <div className='md:col-span-2 grid grid-rows-2 grid-cols-1 w-[350px] items-center'>
            <span className=' col-span-2 w-full text-center mb-3 underline'>LLegadas tarde</span>
            <label className='flex justify-center items-center'>
              <input ref={llegadasTarde} type="number" name="llegadasTarde" id="llegadasTarde" placeholder='Cant. Dias' className='outline-none border-b border-[#a6aaae] w-[80px] text-center' />
            </label>
            <span id='daysOfLicenseSpan' className='col-span-2 text-center mt-3'></span>
          </div>
        </div>
        <label className='col-span-2 lg:col-span-4'>
          <textarea ref={inpObserv} name="textarea" id="observationsArea" placeholder='Observaciones ...' className='bg-[#d8d8d86e] resize-none w-4/5 max-w-[270px] md:max-w-[350px] h-[150px] pl-1 rounded-sm border border-[#00000035]  outline-none'></textarea>
        </label>
      </form>
      <input onClick={handleData} className="mt-10 bg-[#0f2942] text-xl cursor-pointer px-6 py-2 rounded-md text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Aceptar" />
    </div>
  )
}

export default FormRegLicense