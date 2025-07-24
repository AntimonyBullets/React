import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> {
            setData(res[currency]);
            console.log(res);
        })
    }, [currency]);

    return data;
}

//the whole component is re-rendered if any changes are made to the element inside that component. And in that way our custom hook is called again and since we're using useEffect we wouldn't require to write custom logic to call useCurrencyInfo again and again, it will be called anyway on a component re-render and useEffect will also act when the currency is changed and new data will be returned automatically.

export default useCurrencyInfo;