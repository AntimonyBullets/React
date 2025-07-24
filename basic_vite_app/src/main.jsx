import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Xyz from './xyz.jsx'
import React from 'react'

const anotherElement = (
  <a href='https://www.india.gov.in'>Indian Government Website</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://hal-india.co.in/', target: "_blank"},
  "HAL website"
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Xyz />
    {anotherElement}
    <br />
    {reactElement}
  </StrictMode>,
)
