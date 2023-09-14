import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'
import { Link, useNavigate } from 'react-router-dom'

const { signOut } = userActions

const Nav = () => {

  const [nav, setNav] = useState(false)
  const [tokenLogin, setTokenLogin] = useState(false)
  const [navLicenses, setNavLicenses] = useState(false)
  const dispatch = useDispatch()

  const routes = [
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
          path: '',
          name: 'Ver licencia'
        }
      ]
    },
    {
      path: '',
      name: 'Perfil'
    }
  ]

  const signout = async (e) => {
    const response = await dispatch(signOut())
    if (response.payload.success) {
      localStorage.removeItem('token')
      setTokenLogin(true)
    }
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      location.reload()
    }
  }, [tokenLogin])

  const toggleNav = (e) => {
    setNav(!nav)
  }
  const NavContent = () => {
    return (
      <div className='fixed top-0 left-0 w-full max-w-[350px] bg-[#0f1738] border-r h-screen'>
        <div onClick={toggleNav} className='absolute w-screen h-screen bg-[#050712c6] top-0 left-[350px] [backdrop-filter:_blur(2px)]'></div>
        <ul className='w-full flex flex-col mt-20 gap-8 items-start'>
          {
            routes.map((route, i) => {
              return (
                route.path !== null
                  ? <Link className='pl-10' onClick={toggleNav} key={i} to={route.path}>{route.name}</Link>
                  :
                  <div className='relative pl-10' key={i}>
                    <div key={i} onClick={() => setNavLicenses(!navLicenses)} className='flex gap-5 items-center cursor-pointer'>
                      <li>{route.name}</li>
                      <span>
                        <svg width={'30px'} viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#f0f1ef" strokeWidth="3.5"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.384"></g><g id="SVGRepo_iconCarrier"><polyline points="48 32 32 48 16 32"></polyline><polyline points="48 16 32 32 16 16"></polyline></g></svg>
                      </span>
                    </div>
                    {
                      navLicenses
                        ? <div className='flex flex-col items-center pt-2 pb-2 gap1 absolute bg-[#f0f1ef] w-[200px] rounded-b-md'>
                          {
                            route.children.map((route, i) => {
                              return (
                                <Link className='text-[#0d1223] w-full text-center py-2 font-medium hover:bg-[#0d1223] hover:text-[#f0f1ef] transition-all duration-300' key={i} onClick={toggleNav} to={route.path}>{route.name}</Link>
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
        <span onClick={toggleNav} className='absolute top-5 right-5 cursor-pointer'>
          <svg fill="#f0f1ef" width={'45px'} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cancel2</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path> </g></svg>
        </span>
      </div >
    )
  }

  return (
    <div className='relative w-full flex justify-center'>
      <div className='absolute flex top-5 justify-between w-full px-5 max-w-[1200px]'>
        <span onClick={toggleNav} className=' cursor-pointer'>
          <svg className=' pointer-events-none' viewBox="0 0 24 24" fill="none" width={'45px'} xmlns="http://www.w3.org/2000/svg"><g className=' pointer-events-none' id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g className=' pointer-events-none' id="SVGRepo_iconCarrier"> <path className=' pointer-events-none' d="M4 6H20M4 12H20M4 18H20" stroke="#f0f1ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </span>
        <input onClick={signout} type="button" value="Cerrar sesión" className='rounded-md px-3 py-2 bg-[#a30d26] cursor-pointer' />
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