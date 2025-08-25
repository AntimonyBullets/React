import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [search, setSearch] = useState('');
  const [products, error, loading] = customReactQuery("/api/products", search);


  return (
    <>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
      {loading && <h3>Loading ...</h3>}
      <h1>No. of products are: {products.length}</h1>
      {error && <h3>There is an error</h3>}
    </>
  )
}

export default App

const customReactQuery = (apiPath, query) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    ;(async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await axios.get(apiPath + "?search=" + query, {
          signal: controller.signal,  // 👈 pass abort signal
        });
        setProducts(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancelled:", query);
        } else {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [query]);
  return [products, error, loading];
}