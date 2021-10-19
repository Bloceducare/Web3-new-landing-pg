import React from 'react';
import useReg from './useReg';
import { Flex } from '../../view/Raffle/Raffle.style';
import MovingComponent from 'react-moving-text'


const Registered = () => {
    const [,, count2]= useReg(2)
    const [,, count1]= useReg(1);
   

    console.log(count1,"one")
    console.log(count2,"two")

    
    return (
        <Flex>
            <div>
            <h5> 
           <MovingComponent
                type="typewriter"
                duration="2000ms"
                delay="17s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                dataText = {[
                    `Total number registered for web3 : ${count1}`,
                    `Total number registered for web2 : ${count2}`
                ]}>
            </MovingComponent>
            </h5>
            </div>
        </Flex>
    )
}

export default Registered
