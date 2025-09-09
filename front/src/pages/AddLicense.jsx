import React from 'react'
import FormLicense from '../components/FormLicense'

const AddLicense = () => {

  const typeLicense = [
    "Injustificadas",
    "Injustificadas acumuladas",
    "Tardanzas",
    "Permanencia",
    "Desc. jornada p/tardanza",
    "Dcto. colacion",
    "Just. c/pago de jornal",
    "Total desc. de jornales",
    "Ley 9254",
    'Desc. viat. "B" / serv. apoyo',
    "Reintegro de jornales",
    "Licencias anuales",
    "Licencias prorrogadas"
  ]

  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-16 pb-10'>
      <FormLicense
        licenses={typeLicense}
      />
    </div>
  )
}

export default AddLicense