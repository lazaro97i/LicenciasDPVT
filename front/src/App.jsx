import { Provider } from "react-redux"
import { RouterProvider } from "react-router"
import store from "./store/store"
import router from './router'
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <Provider store={store}>
      <Toaster
      />
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
