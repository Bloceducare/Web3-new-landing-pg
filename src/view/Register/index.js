import React from "react";
import { Col,Row,Container,Button} from "react-bootstrap";
import { Links } from "../../components/Link";
import { RegTag1,RegTag2} from "../../components/Tag";
import Registered from "../../components/Registered";

const Register = () => {
    return (
        <>
        <Container>
            <Registered />
           <Row>
               <RegTag1>List of Track/Courses</RegTag1>
               <Col sm={12} md={6} lg={6}>
                    <RegTag2>Web2 Introduction</RegTag2>
                    <p>
                        Web2 introduction track will be introducing no-coders to Web2(HTML,CSS, Javascript). 
                        The track will be building on the result of the pilot program to increase the impact and
                        the reach of the track
                    </p>
                    <Button variant="info" href="https://forms.gle/3nPRxXTcFn9prSNv9"  target="_blank" >Register</Button>
               </Col>
               <Col sm={12} md={6} lg={6}>
                    <RegTag2>Web3 Track</RegTag2>
                    <p>
                        Web3bridge track is the core of the program as it focuses on migrating web2 developers into the web3 ecosystem.
                        We will be opening the cohort for one hundred and fifty(150)
                        web2 developers with the goal of graduating seventy(70) developers and a minimum of three(3) projects/dapps.
                    </p>
                    <Links href="https://docs.google.com/forms/d/1wpkcdvhobpTQnZz7q85DfLMpHvqxX0PU9fvc9V6eZkI/edit" target="_blank">Register</Links>
               </Col>
           </Row>
           <Row>
               <Col sm={12}>
                    <RegTag2>Web3 Garage</RegTag2>
                    <p>
                        With the number of web3 developers we have trained since the cohort started and those that have been 
                        motivated by our vision and have self-taught themselves, We are opening up a "Web3 Garage"!.
                        The garage will be focused on learning product life cycle user research, community engagement,
                        marketing and within 12 weeks will be breaking and fixing codes to launch projects/ products
                    </p>
                    <Button variant="info" href="https://forms.gle/JMU8jKUsnzT7QxcD6"    target="_blank">Register</Button>
               </Col>
           </Row>
        </Container> 
        </>
    )
}

export default Register
