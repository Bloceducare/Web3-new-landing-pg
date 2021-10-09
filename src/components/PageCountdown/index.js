import React from 'react'
import { Image } from 'react-bootstrap'
import { Flex } from '../../view/Raffle/Raffle.style'
import Countdown from 'react-countdown'
import App from '../../App'

const Page = () => {
    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            <App />
        } else {
            return (
                <div>
                    <Flex>
                        <Image src={`images/const.svg`}/>
                    </Flex>
                    <Flex>
                        <span>{hours}hr </span>: {minutes} min : {seconds} sec
                    </Flex>
                </div>
            )
        }
      }

    return (
        <div>
            <Countdown date={74878} renderer={renderer}/>
        </div>
    )
}

export default Page;
