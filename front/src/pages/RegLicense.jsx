import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormLicense from '../components/FormLicense'

const RegLicense = () => {

  const navigate = useNavigate()

  const typeLicense = [
    "Injustificadas",
    "Injustificadas acumuladas",
    "Tardanzas",
    "Permanencia",
    "Desc. jornada p/tardanza",
    "Dcto. colación",
    "Just. c/pago de jornal",
    "Total desc. de jornales",
    'Desc. viat. "B" / serv. apoyo',
    "Presentismo",
    "Reintegro de jornales",
    "Dias hábiles"
  ]

  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-28 pb-10'>
      <FormLicense
        licenses={typeLicense}
      />
    </div>
  )
}

export default RegLicense