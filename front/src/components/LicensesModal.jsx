import React from 'react'
import { useSelector } from 'react-redux'

const LicensesModal = ({ handleModal }) => {

  const licenseStore = useSelector((store) => store.license)
  console.log(licenseStore)
  return (
    <div className='w-full max-w-[600px] h-auto flex flex-col justify-center items-center rounded-sm py-5 bg-[#121541] px-3 mt-10'>
      {
        licenseStore?.licenses
          ? <>
            <p className='text-2xl font-medium mb-5'>{licenseStore.licenses.employee.name}</p>
            <p className='self-start mb-5 md:ml-[3.8rem] text-lime-400 text-2xl font-[300] flex items-center gap-3'>Cantidad de licencias: <span className='text-lime-400'>{licenseStore?.licenses?.licenses?.length}</span></p>
            <div className='w-full max-h-[380px] flex flex-col items-center'>
              <table className='w-full max-w-[450px]'>
                <thead className='bg-[#2a48a159]'>
                  <tr>
                    <th className='font-[500] py-2 pl-2 text-start'>Tipo de licencia</th>
                    <th className='font-[500] py-2'>Inicio</th>
                    <th className='font-[500] py-2'>Final</th>
                    <th className='font-[500] hidden md:[display:block] py-2'>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    licenseStore.licenses.licenses.map((li, i) => {
                      return (
                        <tr key={i} className='py-2 border-collapse'>
                          <td className='text-start py-2 border-y pl-2'>{li?.typeLicense}</td>
                          <td className='text-center p-2 border-y text-[.8rem]'>{li?.startDate.split('-').reverse().join('/')}</td>
                          <td className='text-center p-2 border-y text-[.8rem]'>{li?.endDate.split('-').reverse().join('/')}</td>
                          <td className='text-center p-2 text-[.8rem] hidden md:[display:block] bg-[#2a48a159] border'>
                            <span className='flex justify-center cursor-pointer'>
                              <svg width={'30px'} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#f0f1ef"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="icon" fill="#f0f1ef" transform="translate(42.666667, 85.333333)"> <path d="M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M362.666667,213.333333 L234.666667,213.333333 L234.666667,245.333333 L362.666667,245.333333 L362.666667,213.333333 Z M125.333333,155.733333 L109.333333,155.733333 C78.4053873,155.733333 53.3333333,181.333333 53.3333333,213.333333 L53.3333333,213.333333 L181.333333,213.333333 C181.333333,181.333333 156.16,155.733333 125.333333,155.733333 L125.333333,155.733333 Z M362.666667,149.333333 L234.666667,149.333333 L234.666667,181.333333 L362.666667,181.333333 L362.666667,149.333333 Z M117.333333,78.62624 C101.86936,78.62624 89.3333333,91.162267 89.3333333,106.62624 C89.3333333,122.090213 101.86936,134.62624 117.333333,134.62624 C132.797306,134.62624 145.333333,122.090213 145.333333,106.62624 C145.333333,91.162267 132.797306,78.62624 117.333333,78.62624 Z M362.666667,85.3333333 L234.666667,85.3333333 L234.666667,117.333333 L362.666667,117.333333 L362.666667,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>
                            </span>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </>
          : null
      }
    </div >
  )
}

export default LicensesModal


// {
//   licenses?.map((li, i) => {
//     return (
//       <div key={i} className='border rounded-md w-[calc(1_/_%100)] flex flex-col items-start justify-center py-5 px-4 absolute top-0 left-0 col-span-1'>
//         {/* <p>Tipo de licencia: {li?.typeLicense}</p>
//         <p className=' self-center mt-5 mb-2'>Observacion:</p>
//         <span className='self-center text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis totam, sunt minima deserunt delectus esse eum nisi eaque expedita iusto, soluta ea quae facere nobis nihil fuga fugit iste!</span>
//         <div className='w-full flex justify-center mt-5 gap-12'>
//           <p className='flex flex-col items-center'>Inicio: <span>{li?.startDate}</span></p>
//           <p className='flex flex-col items-center'>Finalizacion: <span>{li?.endDate}</span></p>
//         </div>
//         <p className='pt-5'>Registrada por: {li?.userId}</p> */}

//       </div>
//     )
//   })
// }