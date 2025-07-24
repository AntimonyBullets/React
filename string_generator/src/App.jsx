import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [str, setStr] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);

  const strGenerator = useCallback(()=>{
    let str = "";
    let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbers) sample += "0123456789";
    if(characters) sample += "!@#$%^&*-_+=[]{}~`";

    for(let i = 0; i < length; i++){
      let charIndex = Math.floor(Math.random() * sample.length + 1);
      str += sample[charIndex];
    }

    setStr(str);
  }, [length, numbers, characters]);

  const strRef = useRef(null);

  const copyStringToClipboard = useCallback(()=>{
    strRef.current?.select();
    window.navigator.clipboard.writeText(str);
  }, [str])

  useEffect(()=>{
    strGenerator();
  }, [strGenerator]);

  return (
    <>
      <div className='w-[50%] px-[10px] py-[7px] border-[2px] border-white text-white mx-auto mt-[20px]'>
        <div className='mt-[7px]'>String Generator</div>
        <div className='mt-[10px] mb-[10px]'>
          <input 
          type="text"
          value={str}
          readOnly
          className='bg-white text-black w-[80%] px-2 py-1'
          ref = {strRef}
          />
           <button className='bg-blue-500 text-white px-2 py-1 cursor-pointer ' onClick={copyStringToClipboard}>
            Copy
           </button>
        </div>
        <div className='flex items-center justify-left mb-[7px]'>
          <input 
          type="range"
          min="1"
          max="50"
          value={length}
          onChange={(e)=> {setLength(e.target.value)}}
          className='cursor-pointer w-60 mr-[10px]'
          />
          <label className='mr-[15px]'>Length : {length}</label>
          <label htmlFor='numbers'>Numbers</label>
          <input 
          type="checkbox"
          onChange={()=>{
            setNumbers((prev)=>!prev)
          }}
          className='ml-[5px] mt-[5px] mr-[15px]'
          id='numbers'
          />
          <label htmlFor='characters'>Characters</label>
          <input 
          type="checkbox"
          onChange={()=>{
            setCharacters((prev)=>!prev)
          }}
          className='ml-[5px] mt-[5px]'
          id='characters'
          />
        </div>
      </div>
    </>
  )
}

export default App
