import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextProvider from './context/UseContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <Login/>
    <Profile/>
  </UserContextProvider>
)
