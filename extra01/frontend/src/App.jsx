import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status)
          console.log(error.response.data)
        }
        else {
          console.log("Error: ", error.message);
        }
      })
  }, [])

  return (
    <>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )

}

export default App
