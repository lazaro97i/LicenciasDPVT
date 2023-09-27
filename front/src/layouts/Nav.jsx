import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import { Link, useNavigate } from 'react-router-dom'

const { signOut } = userActions

const routesAdmin = [
  {
    path: null,
    name: 'Licencias',
    children: [
      {
        path: '/reg_license',
        name: 'Agregar licencia'
      },
      {
        path: '/view_license',
        name: 'Ver licencia'
      }
    ]
  },
  {
    path: null,
    name: 'Empleados',
    children: [
      {
        path: '/new_employee',
        name: 'Agregar empleado'
      },
      {
        path: '/employees',
        name: 'Listar empleados'
      }
    ]
  },
  {
    path: '/new_user',
    name: 'Agregar usuario'
  },
  {
    path: 'admin_panel',
    name: 'Administracion'
  }
]
const routesUser = [
  {
    path: null,
    name: 'Licencias',
    children: [
      {
        path: '/reg_license',
        name: 'Agregar licencia'
      },
      {
        path: '/view_license',
        name: 'Ver licencia'
      }
    ]
  },
  {
    path: '',
    name: 'Perfil'
  }
]

const Nav = () => {

  const [nav, setNav] = useState(false)
  const [navLicenses, setNavLicenses] = useState(false)
  const [navEmployee, setNavEmployee] = useState(false)
  const authStore = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const signout = async (e) => {
    const response = await dispatch(signOut())
    if (response.payload.success) {
      localStorage.removeItem('token')
      location.reload()
    }
  }
  const toggleNav = (e) => {
    setNav(!nav)
  }

  const NavContent = () => {
    return (
      <div className='fixed top-0 left-0 w-full max-w-[250px] bg-[#e3effb] border-r h-screen flex justify-center z-10'>
        <div onClick={() => { toggleNav(), setNavLicenses(false) }} className='absolute w-screen h-screen bg-[#1d2535c6] top-0 left-[250px] [backdrop-filter:_blur(2px)]'></div>
        <ul className='flex flex-col mt-28 gap-5 relative'>
          {
            authStore?.auth?.role === 'ADMIN_ROLE'
              ? routesAdmin.map((route, i) => {
                return (
                  route.path
                    ? <Link className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 px-8 py-2' onClick={() => { toggleNav(), setNavLicenses(false) }} key={i} to={route.path}>{route.name}</Link>
                    : route.name === 'Licencias'
                      ? <div className='relative hover:text-[#f1f8fe]' key={i}>
                        <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => { setNavLicenses(!navLicenses), setNavEmployee(false) }} >
                          {route.name}
                          <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f2942" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#0f2942" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                        </li>
                        {
                          navLicenses
                            ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[194.77px] rounded-b-md mt-1 z-10'>
                              {
                                route.children.map((route, i) => {
                                  return (
                                    <Link className='text-[#f1f8fe] w-full text-center py-2 font-medium hover:bg-[#166eb3] hover:text-[#f0f1ef] transition-all duration-300' key={i} onClick={() => { toggleNav(), setNavLicenses(!navLicenses) }} to={route.path}>{route.name}</Link>
                                  )
                                })
                              }
                            </div>
                            : null
                        }
                      </div>
                      : <div className='relative hover:text-[#f1f8fe]' key={i}>
                        <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => { setNavLicenses(false), setNavEmployee(!navEmployee) }} >
                          {route.name}
                          <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f2942" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#0f2942" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                        </li>
                        {
                          navEmployee
                            ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[194.77px] rounded-b-md mt-1'>
                              {
                                route.children.map((route, i) => {
                                  return (
                                    <Link className='text-[#f1f8fe] w-full text-center py-2 font-medium hover:bg-[#166eb3] hover:text-[#f0f1ef] transition-all duration-300' key={i} onClick={() => { toggleNav(), setNavEmployee(!navEmployee) }} to={route.path}>{route.name}</Link>
                                  )
                                })
                              }
                            </div>
                            : null
                        }
                      </div>
                )
              })
              : routesUser.map((route, i) => {
                return (
                  route.path
                    ? <Link className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 px-8 py-2' onClick={() => { toggleNav(), setNavLicenses(false) }} key={i} to={route.path}>{route.name}</Link>
                    : route.name === 'Licencias'
                      ? <div className='relative hover:text-[#f1f8fe]' key={i}>
                        <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => { setNavLicenses(!navLicenses), setNavEmployee(false) }} >
                          {route.name}
                          <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f2942" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#0f2942" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                        </li>
                        {
                          navLicenses
                            ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[194.77px] rounded-b-md mt-1 z-10'>
                              {
                                route.children.map((route, i) => {
                                  return (
                                    <Link className='text-[#f1f8fe] w-full text-center py-2 font-medium hover:bg-[#166eb3] hover:text-[#f0f1ef] transition-all duration-300' key={i} onClick={() => { toggleNav(), setNavLicenses(!navLicenses) }} to={route.path}>{route.name}</Link>
                                  )
                                })
                              }
                            </div>
                            : null
                        }
                      </div>
                      : <div className='relative hover:text-[#f1f8fe]' key={i}>
                        <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => { setNavLicenses(false), setNavEmployee(!navEmployee) }} >
                          {route.name}
                          <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0f2942" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#0f2942" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                        </li>
                        {
                          navEmployee
                            ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[194.77px] rounded-b-md mt-1'>
                              {
                                route.children.map((route, i) => {
                                  return (
                                    <Link className='text-[#f1f8fe] w-full text-center py-2 font-medium hover:bg-[#166eb3] hover:text-[#f0f1ef] transition-all duration-300' key={i} onClick={() => { toggleNav(), setNavEmployee(!navEmployee) }} to={route.path}>{route.name}</Link>
                                  )
                                })
                              }
                            </div>
                            : null
                        }
                      </div>
                )
              })
          }
        </ul>
        <span onClick={() => { toggleNav(), setNavLicenses(false), setNavEmployee(false) }} className='absolute top-5 right-5 cursor-pointer'>
          <svg fill="#0f2942" width={'45px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
        </span>
        <input onClick={signout} type="button" value="Cerrar sesión" className='rounded-md px-3 py-2 bg-[#a30d26] hover:bg-[#a9293a] cursor-pointer absolute bottom-32 text-[#f1f8fe]' />
      </div >
    )
  }

  return (
    <div className='relative w-full flex justify-center h-[90px] bg-[#0f2942]'>
      <div className='absolute flex top-5 justify-between w-full px-5 max-w-[1200px]'>
        <span onClick={toggleNav} className=' cursor-pointer'>
          <svg className=' pointer-events-none' viewBox="0 0 24 24" fill="none" width={'45px'} xmlns="http://www.w3.org/2000/svg"><g className=' pointer-events-none' id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g className=' pointer-events-none' id="SVGRepo_iconCarrier"> <path className=' pointer-events-none' d="M4 6H20M4 12H20M4 18H20" stroke="#f1f8fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </span>
        <div className='flex items-center justify-center gap-5'>
          <div className=''>
            <img className='w-[50px]' src={authStore?.auth?.photo} alt="" />
          </div>
          <div>
            <p className='text-[#f1f8fe] font-[400] text-[1rem]'>{(authStore?.auth?.name)?.toUpperCase()}</p>
            <p className='text-[#f1f8fe] font-[200]'>{authStore?.auth?.fileNumber}</p>
          </div>
        </div>
      </div>
      <div>
        {
          nav ?
            <NavContent />
            :
            null
        }
      </div>
    </div >
  )
}

export default Nav