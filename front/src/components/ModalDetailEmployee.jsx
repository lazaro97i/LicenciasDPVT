import React from 'react'

const ModalDetailEmployee = ({ detail, employee }) => {

  return (
    <div className='w-screen h-screen fixed z-10 top-0 flex justify-center items-center bg-[#0f2942] bg-opacity-70 backdrop-blur-sm px-6 py-10'>
      <div className='w-full h-full overflow-auto bg-[#f1f8fe] flex flex-col justify-start relative items-center py-5 max-w-[700px] rounded-md px-3'>
        <span onClick={() => { detail(false) }} className='absolute top-5 right-5 cursor-pointer'>
          <svg fill="#0f29420" width={'35px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
        </span>
        <p className='mt-20 text-3xl font-[500]'>{employee[0]?.name?.toUpperCase()}</p>
        <p className='text-start min-[600px]:text-center w-full mt-5'>Legajo: <span className='font-[500]'>{employee[0]?.fileNumber}</span></p>
        <div className='mt-10 w-full grid grid-cols-2 rounded-t-md'>
          <p className='font-[500] bg-[#e3effb] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Depto/Div:</p>
          <span className='font-[400] bg-[#e3effb] py-2 text-center pl-3'>{employee[0]?.apartDiv}</span>
          <p className='font-[500] py-2  flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Cargo:</p>
          <span className='font-[400] py-2  text-center pl-3'>{employee[0]?.position}</span>
          <p className='font-[500] bg-[#e3effb] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Funcion:</p>
          <span className='font-[400] bg-[#e3effb] py-2 text-center pl-3'>{employee[0]?.function}</span>
          <p className='font-[500] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Fecha clave:</p>
          <span className='font-[400] py-2 text-center pl-3'>{employee[0]?.keyDate}</span>
          <p className='font-[500] py-2 bg-[#e3effb] flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Zona:</p>
          <span className='font-[400] py-2 bg-[#e3effb] text-center pl-3'>{employee[0]?.zone}</span>
          <p className='font-[500] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Campamento:</p>
          <span className='font-[400] py-2 text-center pl-3'>{employee[0]?.camp}</span>
          <p className='font-[500] py-2 bg-[#e3effb] flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Viatico B:</p>
          <span className='font-[400] py-2 bg-[#e3effb] text-center pl-3'>{employee[0]?.viaticB}</span>
          <p className='font-[500] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Adscripto:</p>
          <span className='font-[400] py-2 text-center pl-3'>{employee[0]?.added}</span>
          <p className='font-[500] py-2 bg-[#e3effb] flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Desarraigo:</p>
          <span className='font-[400] py-2 bg-[#e3effb] text-center pl-3'>{employee[0]?.uprooting}</span>
          <p className='font-[500] py-2 flex justify-start min-[600px]:justify-center pl-3 gap-3 col-span-1'>Dedicacion Op.:</p>
          <span className='font-[400] py-2 text-center pl-3'>{employee[0]?.dedicationOp}</span>
        </div>
        <input onClick={() => { detail(false) }} className="mt-10 mb-5 text-xl cursor-pointer px-6 py-2 rounded-md bg-[#0f2942] text-[#f1f8fe] hover:bg-[#166eb3] transition-all duration-300" type="button" value="Atras" />
      </div>
    </div>
  )
}

export default ModalDetailEmployee