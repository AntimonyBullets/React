import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  return (
    <>
      <h2 className='bg-amber-300 ml-10 p-4 text-black w-50 mt-10 rounded-xl text-3xl'>Tailwind test</h2>
      <div className='w-full flex items-center justify-evenly'>
        <Card name="Ryan Canute"/>
        <Card name="Thorgil"/>
        <Card />
      </div>
    </>
  )
}

export default App
