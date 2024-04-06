import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import employeeActions from '../store/employees/actions'
import ModalDetailEmployee from './ModalDetailEmployee'
import Pagination from './Pagination'

const { getEmployees } = employeeActions

const TableEmployees = () => {

  const [filterFile, setFilterFile] = useState('')
  const [filterName, setFilterName] = useState('')
  const [detail, setDetail] = useState(false)
  const [cPage, setCP] = useState(1)
  const [fileEmployee, setFileEmployee] = useState(null)
  const dispatch = useDispatch()
  const employeeStore = useSelector((store) => store.employee)

  let employee = employeeStore?.response?.filter(e => e.fileNumber === fileEmployee)

  const indexFinal = cPage * 10
  const indexInicial = indexFinal - 10

  useEffect(() => {
    dispatch(getEmployees())
  }, [])

  const dataLength = employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName)).length > 0
    ? employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName)).sort((a, b) => a.fileNumber - b.fileNumber).length : 0

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='mb-5 w-full max-w-[700px] flex flex-col justify-center items-center relative'>
        <label className='flex items-center justify-center flex-wrap gap-x-4'>
          <span className='w-full text-start pl-[20%] '>Buscar legajo:</span>
          <input onInput={(e) => { setFilterFile(e.target.value) }} className='border rounded-sm mt-2 w-[150px] pl-2 py-1 outline-none' type="search" name="searchFile" id="searchFile" />
          <input type="text" className='hidden' />
          <span className='mt-2'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
        <label className='flex mt-10 self-start w-full gap-x-4'>
          <span className='w-[130px]'>Buscar nombre:</span>
          <input onInput={(e) => { setFilterName((e.target.value.toUpperCase())) }} className='border rounded-sm pl-2 py-1 outline-none w-[50%]' type="search" name="searchName" id="searchName" />
          <input type="text" className='hidden' />
          <span onClick={() => { dispatch(getEmployees()) }} className='cursor-pointer'>
            <svg viewBox="0 0 24 24" width={'35px'} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 16.9706 7.02944 21 12 21C14.3051 21 16.4077 20.1334 18 18.7083L21 16M21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168L3 8M21 21V16M21 16H16M3 3V8M3 8H8" stroke="#0f2942" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
      </form>
      <div className=' h-auto w-full max-w-[700px]'>
        <table className='text-center w-full max-w-[700px] h-auto'>
          <thead className='top-0 left-0 border-b-2'>
            <tr className='grid grid-cols-7 gap-x-4 w-full py-1 px-2 bg-[#0f2942] rounded-t-md'>
              <th className='text-[#f1f8fe] col-span-2'>Legajo</th>
              <th className='text-[#f1f8fe] text-center min-[600px]:text-start col-span-3'>Nombre</th>
              <th colSpan={2} className='text-[#f1f8fe] col-span-2'>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName)).length > 0
                ? employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName)).sort((a, b) => a.fileNumber - b.fileNumber).slice(indexInicial, indexFinal)
                  .map((e, i) => {
                    return (
                      <tr key={i} className={`grid grid-cols-7 gap-x-3 w-full border-b py-2 hover:bg-[#e3effb]`}>
                        <td className=' flex items-center justify-center col-span-2'>{e.fileNumber}</td>
                        <td onClick={() => { setDetail(true), setFileEmployee(e.fileNumber) }} className=' flex items-center justify-start font-[500] cursor-pointer col-span-3 overflow-clip whitespace-nowrap'>{e.name.toUpperCase()}</td>
                        <td className=' flex items-center justify-center border-l col-span-2 white'>
                          <span onClick={() => { setDetail(true), setFileEmployee(e.fileNumber) }} className='flex justify-center items-center cursor-pointer'>
                            <svg width={'30px'} fill="#0f2942" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path></g></svg>
                          </span>
                        </td>
                      </tr>
                    )
                  })
                : <tr><td className='text-red-600 py-10 font-[500]'>NO SE ENCONTRARON RESULTADOS</td></tr>
            }
          </tbody>
        </table>
      </div>
      {
        detail
          ? <ModalDetailEmployee
            employee={employee}
            detail={setDetail}
          />
          : null
      }
      <Pagination
        nPages={Math.ceil(dataLength / 10)}
        cPage={cPage}
        selectPage={setCP}
      />
    </div>
  )
}

export default TableEmployees