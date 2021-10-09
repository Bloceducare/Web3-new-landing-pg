import React from 'react'
import { Button } from 'react-bootstrap'
import Countdown from 'react-countdown'
import { Btn } from '../Button'

const Count = () => {
    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            return <Btn to="/Register">Register</Btn>
        } else {
            return (
                <Button>
                  Registration countdown: {hours}hr : {minutes} min : {seconds} sec
                </Button>
            )
        }
      }
    return (
        <>
            <Countdown date={'2021-10-10T17:00:00'} renderer={renderer} />
        </>
    )
}

export default Count
