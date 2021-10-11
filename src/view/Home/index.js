import React from 'react'
import { Col, Container,Image,Row } from 'react-bootstrap';
import {BsShieldCheck} from 'react-icons/bs'
import { BrandImg, Hteam, RegTag1} from '../../components/Tag';
import Count from '../../components/ButtonCountdown';


const Home = () => {
    return (
        <>
        <Container id="home">
            <Row>
                <Col sm={12} lg={6}>
                    <h1> Learn, Build and Network at Web3Bridge</h1>
                    <h5>
                    Learn from Web3Bridges' top-notch resources, provided by our a poll of
                    blockchain experts and a community driven
                    platform.
                    </h5>
                    <div className="btn-div"><Count to="/">Register</Count></div>
                </Col>
                <Col sm={12} lg={6}>
                    <Image src={`images/Untitled-1.svg`} fluid></Image>
                </Col>
            </Row> 
            <Row>
                <Col sm={12} lg={6}>
                    <RegTag1>Our Achievements</RegTag1>
                    <Image src={`images/acheive.png`} fluid/>
                </Col>
                <Col sm={12} lg={6}>
                    <h1> Impact and Contributions</h1>
                    <h5>
                        Over the past 18-months we have introduced and trained 273 new developers in  Web2 and Web3 technologies
                    </h5>
                    <h5>
                        Our poll of specialist have expertise in various blockchain, web and mobile technology are contineously training and
                        grooming talents in Blockchain technologies in Nigeria and across Africa.
                    </h5>
                    <h5>
                        Our dedicated experts are ever ready to mentor and groom more talent.
                    </h5>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={6}>
                    <Row>
                        <Col>
                            <Hteam>
                                Interaction
                            </Hteam>
                        </Col>
                        <Col>
                            <Hteam>
                                Learning
                            </Hteam>
                        </Col>
                    </Row>
                    <Image src={`images/collaboration.JPG`} fluid/>
                    <Row>
                        <Col>
                            <Hteam>
                                Collaboration
                            </Hteam>
                        </Col>
                        <Col>
                            <Hteam>
                                Networking
                            </Hteam>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} lg={6}>
                    <h1>Mission and Vision</h1>
                    <div>
                        <h1>Misson</h1>
                        <h5>
                            To Identify Web3 Passions, train them in a collaborative and supportive remote environment
                            and create an African web3
                            community
                        </h5>
                    </div>
                    <div>
                        <h1>Vision</h1>
                        <h5>
                            <BsShieldCheck /> We believe repeated interactions are a great contribution to career growth.
                        </h5>
                        <h5>
                            <BsShieldCheck /> We are enthusiastic about learning and more pumped into faster life-long learning.
                        </h5>
                        <h5>
                            <BsShieldCheck /> We believe collaboration and team work greatly contribute to learning and growth.
                        </h5>
                    </div>
                </Col>
            </Row>

            <Row id="about">
                <h1> About Us</h1>
                <Col sm={12} lg={6}><a href = "https://t.me/web3bridge" target="_blank"><Image src={`images/red.png`} fluid/></a></Col>
                <Col>
                    <h1>Web3Bridge</h1> 
                    <h5>Core Objectives</h5>  
                    <h5>Web3Bridge is designed with objectives of:</h5>
                    <h5>
                        <BsShieldCheck /> Building a Sustainable web3 community in Africa.
                    </h5>
                    <h5>
                        <BsShieldCheck /> Building and supporting web3 developers and startups that will emerge from the program.
                    </h5>
                    <h5>
                       <BsShieldCheck /> Reducing barriers of entry into web3, as blockchain technology is associated with some level of difficulty.
                    </h5>           
                </Col>
            </Row>

            <Row>
                <h1>Our Team</h1>
                <Col sm={6} md={6} lg={4}><Image src={`images/image 5.png`} fluid/>
                    <Hteam>Awosika Israel Ayodeji</Hteam>
                    <p>Program Designer/Cordinator</p>
                </Col>
                <Col sm={6} md={6} lg={4}><Image src={`images/image 5 (1).png`} fluid/>
                    <Hteam>Katangole Allan</Hteam>
                    <p>Head, Techinal Training</p>
                </Col>
                <Col sm={6} md={6} lg={4}><Image src={`images/image 8.png`} fluid/>
                    <Hteam> Akinnusotu Temitayo Daniel</Hteam>
                    <p>Student-Mentor Relations</p>
                </Col>
                <Col sm={6} md={6} lg={4}><Image src={`images/image 5 (2).png`} fluid/>
                    <Hteam>Jeremiah Noah</Hteam>
                    <p>Web2 Director</p>
                </Col>
                <Col sm={6} md={6} lg={4}><Image className="marek-img" src={`images/Screenshot_20210823-215659_1.svg`} fluid/>
                <Hteam>Billy Luedtke</Hteam>
                    <p>Advisor & Angel investor
                    </p>
                </Col>
                <Col sm={6} md={6} lg={4}><Image src={`images/image 5 (3).png`} fluid/>
                <Hteam>Marek Laskowski, PhD</Hteam>
                    <p>Advisor,
                        Founder Blockchain.lab (York University).
                        Founder Blockchain Hub.
                        Vice Chair, UN/CEFACT (Methodology & Technology)
                    </p>
                </Col>
            </Row>
            <Container>
            <Row>
                <RegTag1>Brands that trust us</RegTag1>
                <Row>
                    <Col xs={6} sm={3} lg={3}><Image src={`images/Group.png`} fluid/></Col>
                    <Col xs={6} sm={3} lg={3}> <Image src={`images/Gitcoin Icon 0.png`} fluid/></Col>
                    <Col xs={6} sm={3} lg={3}> <Image src={`images/ConsenSys Academy Icon.png`} fluid/></Col>
                    <Col xs ={6} sm={3} lg={3}><Image src={`images/Cryptocurrency Jobs Icon.png`} fluid /></Col>
                    <Col xs={6} sm={4} lg={4}><Image src={`images/Epns Logo.png`} fluid/></Col>
                    <Col xs={6} sm={4} lg={4}> <BrandImg src={`images/Block.Chain.Niger Logo.png`} fluid/></Col>
                    <Col sm={4} lg={4}><BrandImg src={`images/nahmii.svg`} fluid/></Col>
                </Row>
            </Row>
            </Container>
        </Container> 
        </>
    )
}

export default Home
