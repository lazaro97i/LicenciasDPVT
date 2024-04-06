import React from 'react'

const Pagination = ({ nPages, cPage, selectPage }) => {

  const next = (e) => {
    cPage !== nPages ? selectPage(cPage + 1) : null
  }

  const prev = (e) => {
    cPage !== 1 ? selectPage(cPage - 1) : null
  }

  return (
    <div className='flex items-center gap-10 mt-10 mb-10'>
      <span onClick={prev} className=' cursor-pointer'>
        <svg width={"30px"} viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>next [#0f2942]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#0f2942"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#0f2942]"> </path> </g> </g> </g> </g></svg>
      </span>
      <p className='text-xl'>Pagina <span className=' font-bold'>{cPage}</span> de <span className='font-bold'>{nPages}</span> </p>
      <span onClick={next} className=' cursor-pointer'>
        <svg width={"30px"} viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>next [#0f2942]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#0f2942"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#0f2942]"> </path> </g> </g> </g> </g></svg>
      </span>
    </div>
  )
}

export default Pagination