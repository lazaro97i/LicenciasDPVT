import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

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

const authActions = {
  signinToken
}

export default authActions