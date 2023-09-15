import React, { useState } from 'react'
import FormViewLicense from '../components/FormViewLicense'

const ViewLicense = () => {

  const [file, setFile] = useState(false)

  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-28 pb-10'>
      <FormViewLicense />
    </div>
  )
}

export default ViewLicense