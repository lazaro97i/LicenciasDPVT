import React, { useEffect, useState } from 'react'
import FormViewLicense from '../components/FormViewLicense'
import LicensesModal from '../components/ModalLicense'

const ViewLicense = () => {

  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <div className='w-full h-full div-contain flex flex-col items-center px-6 pt-28 pb-10'>
      <FormViewLicense
        licenseFound={setModal}
      />
      {
        modal
          ? <LicensesModal
            handleModal={handleModal}
          />
          : null
      }
    </div>
  )
}

export default ViewLicense