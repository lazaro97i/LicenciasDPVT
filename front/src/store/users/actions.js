import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

const API_URL = import.meta.env.VITE_APP_API_URL

const signIn = createAsyncThunk('signin/user', async (dataUser) => {

  try {
    const user = await axios.post(`${API_URL}/signin`, dataUser)
    return {
      response: user.data.response,
      message: "User authenticated :)",
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

const userActions = {
  signIn
}

export default userActions