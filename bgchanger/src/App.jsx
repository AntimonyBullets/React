import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../components/Button.jsx'

function App() {

  return (
    <>
      <div className="bg-white text-black flex justify-around w-100 p-5 rounded-2xl colorContainer shadow-md">
       <Button color="red"/>
       <Button color="blue"/>
       <Button color="green"/>
       <Button color="yellow"/>
      </div>
    </>
  )
}

export default App
