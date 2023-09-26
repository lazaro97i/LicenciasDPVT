import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const API_URL = import.meta.env.VITE_APP_API_URL

const sendAuth = () => {

  let token = localStorage.getItem('token')

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return config

}

const getEmployee = createAsyncThunk('employee/getEmployee', async (file) => {
  try {
    const employe = await axios.get(
      `${API_URL}/employee/${file}`,
      sendAuth()
    )
    return {
      response: employe.data.response,
      message: 'Legajo encontrado',
      success: employe.data.success
    }
  } catch (e) {
    console.log(e.response.data.response)
    if (e.response.status === 401) {
      localStorage.removeItem('token')
      window.location.reload()
    }
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }

})

const newEmployee = createAsyncThunk('employee/newEmployee', async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/employee`,
      data,
      sendAuth()
    )
    return {
      response: response.data.response,
      message: 'Empleado agregado correctamente',
      success: response.data.success
    }
  } catch (e) {
    console.log(e)
    if (e.response.status === 401) {
      localStorage.removeItem('token')
      window.location.reload()
    }
    return {
      response: null,
      message: e.response.data.message,
      success: e.response.data.success
    }
  }
})

const employeeActions = {
  getEmployee,
  newEmployee
}

export default employeeActions