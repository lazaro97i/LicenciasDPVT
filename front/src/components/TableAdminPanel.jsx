import React, { useState } from 'react'
import ModalEditUser from '../components/ModalEditUser'
import { useDispatch } from 'react-redux'
import userActions from '../store/users/actions'
import ModalConfirmDelete from './ModalConfirmDelete'

const { getUsers } = userActions

const TableAdminPanel = ({ users }) => {

  const [filterFile, setFilterFile] = useState('')
  const [filterSelect, setFilterSelect] = useState('')
  const [edit, setEdit] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [fileUserEdit, setFileUserEdit] = useState(null)
  const dispatch = useDispatch()

  const filterRole = (e) => {
    switch (e?.target?.value) {
      case 'adminRole':
        setFilterSelect('ADMIN_ROLE')
        break
      case 'userRole':
        setFilterSelect('USER_ROLE')
        break
      case 'all':
        setFilterSelect('')
        break
    }
  }
  const handleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='mb-5 w-full max-w-[700px] flex flex-col justify-center relative'>
        <span className='self-center mr-20'>Buscar legajo:</span>
        <label className='flex items-center justify-center flex-wrap gap-x-4'>
          <input onInput={(e) => { setFilterFile(e.target.value) }} className='border rounded-sm mt-2 w-[150px] pl-2 py-1 outline-none' type="search" name="searchFile" id="searchFile" />
          <input type="text" className='hidden' />
          <span className='mt-2'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
        <label htmlFor='role' className='flex justify-center gap-5 items-start pt-5 self-start pl-4'>
          <span>Rol: </span>
          <select onChange={filterRole} className='outline-none px-2 bg-transparent border-b' name="selectRole" id="selectRole" defaultValue='all'>
            <option value='all'>Todos</option>
            <option value='adminRole'>Administradores</option>
            <option value='userRole'>Usuarios</option>
          </select>
        </label>
        <span onClick={() => { dispatch(getUsers()) }} className='absolute bottom-0 right-[6.5%] cursor-pointer'>
          <svg className=' pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM5.46058 11.0833C5.83333 7.79988 8.62406 5.25 12.0096 5.25C13.9916 5.25 15.7702 6.12471 16.9775 7.50653C17.25 7.81846 17.2181 8.29226 16.9061 8.56479C16.5942 8.83733 16.1204 8.80539 15.8479 8.49347C14.9136 7.42409 13.541 6.75 12.0096 6.75C9.45215 6.75 7.33642 8.63219 6.97332 11.0833H7.33654C7.63998 11.0833 7.91353 11.2662 8.02955 11.5466C8.14558 11.8269 8.08122 12.1496 7.86651 12.364L6.69825 13.5307C6.40544 13.8231 5.93113 13.8231 5.63832 13.5307L4.47005 12.364C4.25534 12.1496 4.19099 11.8269 4.30701 11.5466C4.42304 11.2662 4.69658 11.0833 5.00002 11.0833H5.46058ZM17.3018 10.4693C17.5947 10.1769 18.069 10.1769 18.3618 10.4693L19.53 11.636C19.7448 11.8504 19.8091 12.1731 19.6931 12.4534C19.5771 12.7338 19.3035 12.9167 19.0001 12.9167H18.5395C18.1668 16.2001 15.376 18.75 11.9905 18.75C10.0085 18.75 8.22995 17.8753 7.02263 16.4935C6.7501 16.1815 6.78203 15.7077 7.09396 15.4352C7.40589 15.1627 7.87968 15.1946 8.15222 15.5065C9.08654 16.5759 10.4591 17.25 11.9905 17.25C14.548 17.25 16.6637 15.3678 17.0268 12.9167H16.6636C16.3601 12.9167 16.0866 12.7338 15.9705 12.4534C15.8545 12.1731 15.9189 11.8504 16.1336 11.636L17.3018 10.4693Z" fill="#0f2942"></path> </g></svg>
        </span>
      </form>
      <table className='text-center w-full max-w-[700px]'>
        <thead className='border-b-2'>
          <tr className='grid grid-cols-4 gap-x-6 w-full py-1 bg-[#0f2942] rounded-t-md'>
            <th className='text-[#f1f8fe]'>Legajo</th>
            <th className='text-[#f1f8fe]'>Rol</th>
            <th className='text-[#f1f8fe]'>Actividad</th>
            <th colSpan={2} className='text-[#f1f8fe]'>Editar</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.filter(u => u.role.includes(filterSelect)).filter(u => u.fileNumber.toString().includes(filterFile)).length > 0
              ?
              users?.filter(u => u.role.includes(filterSelect)).filter(u => u.fileNumber.toString().includes(filterFile)).map((u, i) => {
                if (u.status) {
                  return (
                    <tr key={i} className={`grid grid-cols-4 gap-x-6 w-full border-b py-2`}>
                      <td>{u.fileNumber}</td>
                      <td className={u.role === 'ADMIN_ROLE' ? 'text-lime-600' : ''}>{u.role === 'ADMIN_ROLE' ? 'Admin' : 'Usuario'}</td>
                      <td className={`${u.isOnline ? 'text-lime-600' : 'text-red-600'}`} >{u.isOnline ? 'Online' : 'Offline'}</td>
                      <td className='border-l flex justify-center gap-5'>
                        <span className='flex justify-center items-center cursor-pointer' onClick={() => { handleEdit(), setFileUserEdit(u.fileNumber) }}>
                          <svg className=' pointer-events-none' width={'25px'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0f2942"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#0f2942" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                        </span>
                        <span onClick={() => { setConfirmDelete(true), setFileUserEdit(u.fileNumber) }} className='hidden min-[500px]:flex justify-center items-center cursor-pointer'>
                          <svg className=' pointer-events-none' width={'30px'} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>delete_2_line</title> <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="System" transform="translate(-576.000000, -192.000000)" fillRule="nonzero"> <g id="delete_2_line" transform="translate(576.000000, 192.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fillRule="nonzero"> </path> <path d="M14.2792,2 C15.1401,2 15.9044,2.55086 16.1766,3.36754 L16.7208,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55227 20.5523,6.99998 20,7 L19.9975,7.07125 L19.9975,7.07125 L19.1301,19.2137 C19.018,20.7837 17.7117,22 16.1378,22 L7.86224,22 C6.28832,22 4.982,20.7837 4.86986,19.2137 L4.00254,7.07125 C4.00083,7.04735 3.99998,7.02359 3.99996,7 C3.44769,6.99998 3,6.55227 3,6 C3,5.44772 3.44772,5 4,5 L7.27924,5 L7.82339,3.36754 C8.09562,2.55086 8.8599,2 9.72076,2 L14.2792,2 Z M17.9975,7 L6.00255,7 L6.86478,19.0712 C6.90216,19.5946 7.3376,20 7.86224,20 L16.1378,20 C16.6624,20 17.0978,19.5946 17.1352,19.0712 L17.9975,7 Z M10,10 C10.51285,10 10.9355092,10.386027 10.9932725,10.8833761 L11,11 L11,16 C11,16.5523 10.5523,17 10,17 C9.48715929,17 9.06449214,16.613973 9.00672766,16.1166239 L9,16 L9,11 C9,10.4477 9.44771,10 10,10 Z M14,10 C14.5523,10 15,10.4477 15,11 L15,16 C15,16.5523 14.5523,17 14,17 C13.4477,17 13,16.5523 13,16 L13,11 C13,10.4477 13.4477,10 14,10 Z M14.2792,4 L9.72076,4 L9.38743,5 L14.6126,5 L14.2792,4 Z" id="形状" fill="#c00c0c"> </path> </g> </g> </g> </g></svg>
                        </span>
                      </td>
                    </tr>
                  )
                }
              })
              : <tr>
                <td className='pt-10'>Sin resultados</td>
              </tr>
          }
        </tbody>
      </table>
      {
        edit
          ? <ModalEditUser
            userFile={fileUserEdit}
            edit={handleEdit}
          />
          : null
      }
      {
        confirmDelete
          ? <ModalConfirmDelete
            userFile={fileUserEdit}
            modalDelete={setConfirmDelete}
          />
          : null
      }
    </div >
  )
}

export default TableAdminPanel