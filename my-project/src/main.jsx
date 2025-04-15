import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>

  {/* provider ka use redux ko react se connect krne ke liye store ko pass krne ke liye */}
  <Provider store={store} >
    <App />
    <Toaster />
  </Provider>
  </BrowserRouter>
 
)
