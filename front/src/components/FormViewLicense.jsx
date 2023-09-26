import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import licenseActions from '../store/licenses/actions'
import toast from 'react-hot-toast'

const { get_licenses } = licenseActions

const FormViewLicense = ({ licenseFound }) => {

  let inpFile = useRef(null)
  const dispatch = useDispatch()

  const sendFile = async () => {
    let response = await dispatch(get_licenses(inpFile.current.value))
    if (response?.payload?.success) {
      if (response?.payload?.response?.licenses?.length > 0) {
        toast.success(`${response?.payload?.message}`)
        licenseFound(true)
      } else {
        toast.success(`⚠️ El legajo ingresado no posee licencias`, { duration: 6000 })
        licenseFound(true)
      }
    } else {
      toast.error(response.payload.message ? response.payload.message : 'Error')
      licenseFound(false)
    }
  }

  return (
    <>
      <h1 className='text-4xl font-[600]'>Ver licencia</h1>
      <form onKeyDown={(e) => { e.code === 'Enter' ? sendFile() : null }} className="border rounded-sm w-full max-w-[600px] flex flex-wrap justify-center gap-x-2 mt-20 py-10">
        <p className="text-2xl text-center font-[500] w-full mb-8">Ingresar Legajo:</p>
        <label>
          <input ref={inpFile} className='outline-none border-b pl-1 w-[100px] text-center' type="number" name="file" id="file" placeholder='Legajo' />
        </label>
        <label>
          <input className='hidden' type="text" />
        </label>
        <label>
          <span onClick={sendFile} className='cursor-pointer'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
      </form >
    </>
  )
}

export default FormViewLicense
