import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userActions from '../store/users/actions'

const { getUsers } = userActions

const TableAdminPanel = () => {

  const userStore = useSelector((store) => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  console.log(userStore)

  return (
    <div>

    </div>
  )
}

export default TableAdminPanel