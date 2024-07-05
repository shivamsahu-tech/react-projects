import { useEffect, useState } from "react";

function CurrencyData(currency){
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/88eb9db84cefe04a0d767166/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data)
    }, [currency])
     
    return data;
}

export default CurrencyData