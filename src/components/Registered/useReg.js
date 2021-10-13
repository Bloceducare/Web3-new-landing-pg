import { useEffect, useState } from "react";
import axios from 'axios'

const useReg = (val)=>{
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fdata = async ()=>{
        setLoading(true)
        console.log('loading before try', loading)
        try {
            const result = await  axios(`https://rinkeby-testnet-tipper.herokuapp.com/api/number/${val}`)
            console.log(result.data.number, "what")
            setCount(result.data.number)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(false)
            
        }
    }
    useEffect(()=>{
        if(!val) return;
        fdata()
    },[])
    console.log(count, "this")
    return [loading, error, count]
}

export default useReg;