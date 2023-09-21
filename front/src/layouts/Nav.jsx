import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import { Link, useNavigate } from 'react-router-dom'

const { signOut } = userActions

const routesAdmin = [
  {
    path: '/new_user',
    name: 'Agregar usuario'
  },
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
  const userStore = useSelector((store) => store.user)
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
        <div onClick={toggleNav} className='absolute w-screen h-screen bg-[#1d2535c6] top-0 left-[250px] [backdrop-filter:_blur(2px)]'></div>
        <ul className='flex flex-col mt-28 gap-5 relative'>
          {
            userStore?.userAuth?.role === 'ADMIN_ROLE'
              ? routesAdmin.map((route, i) => {
                return (
                  route.path !== null
                    ? <Link className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 px-8 py-2' onClick={toggleNav} key={i} to={route.path}>{route.name}</Link>
                    :
                    <div className='relative hover:text-[#f1f8fe]' key={i}>
                      <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => setNavLicenses(!navLicenses)} >
                        {route.name}
                        <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                      </li>
                      {
                        navLicenses
                          ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[175px] rounded-b-md'>
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
                )
              })
              : routesUser.map((route, i) => {
                return (
                  route.path !== null
                    ? <Link className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 px-8 py-2' onClick={toggleNav} key={i} to={route.path}>{route.name}</Link>
                    :
                    <div className='relative hover:text-[#f1f8fe]' key={i}>
                      <li className='hover:bg-[#166eb3] hover:text-[#f1f8fe] font-[500] text-[1rem] rounded-md transition-all duration-200 li-license px-8 py-2 cursor-pointer flex gap-2 justify-between items-center max-h-[40px]' onClick={() => setNavLicenses(!navLicenses)} >
                        {route.name}
                        <svg className='hover:stroke-[#f1f8fe]' id='svgArrowBot' width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                      </li>
                      {
                        navLicenses
                          ? <div className='flex flex-col items-center pt-2 pb-2 gap-1 absolute bg-[#144b78] w-[175px] rounded-b-md'>
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
                )
              })
          }
        </ul>
        <span onClick={() => { toggleNav(), setNavLicenses(false) }} className='absolute top-5 right-5 cursor-pointer'>
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
            <img className='w-[50px]' src={userStore?.userAuth?.photo} alt="" />
          </div>
          <div>
            <p className='text-[#f1f8fe] font-[400] text-[1rem]'>{(userStore?.userAuth?.name)?.toUpperCase()}</p>
            <p className='text-[#f1f8fe] font-[200]'>{userStore?.userAuth?.fileNumber}</p>
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