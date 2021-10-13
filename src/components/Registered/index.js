import React, { useState, useEffect } from 'react';
import axios from "axios";
import useReg from './useReg';
import { Flex } from '../../view/Raffle/Raffle.style';
import Typical from 'react-typical';


const api = axios.create({
    baseURL: "https://rinkeby-testnet-tipper.herokuapp.com/api/number/2"
})

const Registered = () => {
    const {loadingtwo, errortwo, hookCount2} = useReg(2);
    const {loading, error, hookCount} = useReg(1);
   
    console.log(hookCount2?.number,"one")

    
    return (
        // <Flex>
        //     {(loading && loadingtwo) ?
        //         null : <div> 
        //             <h5>Total number registered for{" "}
        //         <Typical
        //             loop={Infinity}
        //             wrapper="b"
        //             steps={[
        //             `web3: ${hookCount?.number===0 ? 'checking' :hookCount?.number}`, 1000,
        //             `web2: ${hookCount2?.number===0 ? 'checking 2':hookCount2?.number}`, 1000]} />
        //     </h5>
        //             </div>}
        //            two {hookCount2?.number}
        //            <br />
        //             three{hookCount?.number}
            {/* {(loading && loadingtwo) && 'loading'}
            {hookCount?.number && hookCount?.number} */}
        // </Flex>
    )
}

export default Registered
