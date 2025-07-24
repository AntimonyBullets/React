import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './components/InputBox.jsx'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  return (
    <>
      <InputBox
        label="From"
        amount={amount}
        selectedCurrency={fromCurrency}
        currencyOptions={options}
        onAmountChange={(newAmount) => {
          setAmount(newAmount)
        }}
        onCurrencyChange={(newCurrency) => {
          setFromCurrency(newCurrency)
        }}
      />
      <button className='mx-auto block mt-5 mb-5 bg-blue-500 border-4 border-amber-100 text-white px-4 py-2 cursor-pointer' onClick={swap}>
        Swap
      </button>
      <InputBox
        label="To"
        amount={convertedAmount}
        selectedCurrency={toCurrency}
        currencyOptions={options}
        onCurrencyChange={(newCurrency) => {
          setToCurrency(newCurrency)
        }}
        amountDisabled
      />
      <button className='mx-auto block mt-5 mb-5 bg-blue-500 border-4 border-amber-100 text-white px-4 py-2 cursor-pointer' onClick={convert}>
        Convert {fromCurrency} to {toCurrency}
      </button>
    </>
  )
}

export default App
