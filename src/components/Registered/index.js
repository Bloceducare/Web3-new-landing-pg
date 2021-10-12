import React, { useState, useEffect } from 'react';
import axios from "axios";
import useReg from './useReg';
import { Flex } from '../../view/Raffle/Raffle.style';
import Typical from 'react-typical';


const api = axios.create({
    baseURL: "https://rinkeby-testnet-tipper.herokuapp.com/api/number/2"
})

const Registered = () => {
    const {loading, error, count:hookCount} = useReg(1)
    const {loadingtwo, errortwo, count:hookCount2} = useReg(2)
    console.log(loading)
    
    return (
        <Flex>
            {!loading && !loadingtwo?
                <h5>Total number registered for{" "}
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                    `web3: ${hookCount}`, 1000,
                    `web2: ${hookCount2}`, 1000
                ]}
                />
            </h5> : <div> </div>}
        </Flex>
    )
}

export default Registered
