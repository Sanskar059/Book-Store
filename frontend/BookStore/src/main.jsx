import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './components/context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
 <div className='bg-white text-black  dark:bg-slate-900 dark:text-white'>
   <BrowserRouter>
     <AuthProvider>
     <App />
     </AuthProvider>
  </BrowserRouter>
 </div>
 
 
)
