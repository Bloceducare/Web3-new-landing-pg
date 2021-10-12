

import { useEffect, useState } from "react";

const useReg = (val)=>{
    const [count, setCount] = useState(null)
     const [loading, setLoading] = useState(true)
     const [error, setError] = useState(false)
    const fetchData = async() => {
        setError(false)
        setLoading(true)
        try {
            const result = fetch(`https://rinkeby-testnet-tipper.herokuapp.com/api/number/${val}`)
            .then( data =>data.json())
            .then(info => setCount(info.number))
            .then(setLoading(false))
        } catch (error) {
            setError(false)
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(!val) return;
     fetchData()
    },[])

    return {loading, error, count}
}

export default useReg;