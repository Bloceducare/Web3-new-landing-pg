

import { useEffect, useState } from "react";
import axios from 'axios'

const useReg = (val)=>{
    const [count, setCount] = useState()
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(false)
    // const fetchData = async() => {
    //     setError(false)
    //     setLoading(true)
    //     console.log(loading, "fff")
    //     // try {0
    //         console.log(loading, "vhh")
    //         setLoading(false)
    //         fetch(`https://rinkeby-testnet-tipper.herokuapp.com/api/number/${val}`)
    //         .then( data =>data.json())
    //         .then(info => setCount(info.number))
    //         .then(setLoading(false)).then(console.log(loading))
    //         .catch(setLoading)
    //     // } catch (error) {
    //     //     setError(false)
    //     //     setLoading(false)
    //     // }
    // }

    const fdata = async ()=>{
        setLoading(true)
        console.log('loading before try', loading)
        try {
            
            const result = await  axios(`https://rinkeby-testnet-tipper.herokuapp.com/api/number/${val}`)
            console.log(result.data)
            setCount(result.data)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            setError(false)
            
        }
    }
    useEffect(()=>{
        if(!val) return;
        fdata()
    //  fetchData()
    },[])

    return {loading, error, count}
}

export default useReg;