import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_APP_API_URL

const sendAuth = () => {

  const BEARER_TOKEN = localStorage.getItem("token")

  const config = {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`
    }
  }

  return config
}

const signIn = createAsyncThunk('signin/user', async (dataUser) => {

  try {
    const user = await axios.post(`${API_URL}/user/signin`, dataUser)
    return {
      response: user.data.response,
      message: "Usuario autenticado",
      success: user?.data?.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }
})

const signinToken = createAsyncThunk('users/signinToken', async ({ token: token }) => {
  try {
    const user = await axios.post(`
      ${API_URL}/user/token`,
      { token: token },
      sendAuth()
    )
    return {
      response: user.data.response,
      message: 'Usuario autenticado',
      success: user.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: [e.response.data.response],
      success: e.response.data.success
    }
  }
})

const signOut = createAsyncThunk('users/signOut', async () => {

  try {
    const user = await axios.put(
      `${API_URL}/user/signout`,
      {},
      sendAuth()
    )
    return {
      response: user.data.response,
      message: 'Sesion cerrada correctamente',
      success: user.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }
})

const signUp = createAsyncThunk('users/signup', async (data) => {

  try {
    const new_user = await axios.post(
      `${API_URL}/user/signup`,
      data,
      sendAuth()
    )
    return {
      response: new_user.data.response,
      message: 'Usuario creado con exito!',
      success: new_user.data.success
    }
  } catch (e) {
    console.log(e)
    return {
      response: null,
      message: e.response.data.response,
      success: e.response.data.success
    }
  }

})

const userActions = {
  signIn,
  signinToken,
  signOut,
  signUp
}

export default userActions