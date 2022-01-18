import React from 'react'
import { Row,Col, Card } from 'react-bootstrap'
import { Logo } from '../NavBar/Navbar.style'
import { FtTag, FtLink, FtInput, Subscribe, SubscribeBtn} from './Footer.style'
import { BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <Card bg="dark" variant="dark">
                <Card.Header>
                    <Logo href="/home" src={`images/logo.png`} />
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="mb-6" sm={12} md={6} lg={3}>
                            <FtTag>Web3Bridge</FtTag>
                            <FtLink href="/#about"> About us</FtLink>
                            <FtLink>Courses</FtLink>
                            <FtLink href="https://substack.com/profile/13380668-web3bridge">Blog</FtLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <FtTag>Support</FtTag>
                            <FtLink>Term of Service</FtLink>
                            <FtLink>Privacy Policy</FtLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <FtTag>Contact</FtTag>
                            <FtLink>support@web3bridge.com</FtLink>
                            <FtLink href="https://t.me/web3bridge"><BsTelegram /> Telegram</FtLink>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <FtTag>Follow us</FtTag>
                            <FtLink href="https://twitter.com/Web3Bridge?s=20"><BsTwitter /> &nbsp; @web3bridge</FtLink>
                            <FtLink href=""><BsInstagram /> &nbsp; @web3bridge </FtLink>
                        </Col>
                    </Row>
                    {/* <Row>
                      <Subscribe lg={12}> 
                        <form>
                            <FtInput placeholder='Email' type="text"/>
                            <SubscribeBtn>Subscribe</SubscribeBtn>
                        </form>
                      </Subscribe>
                    </Row> */}
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Row>
                        <Col lg={12}><FtTag>&copy; Copyright, Web3Bridge 2021. All rights reserved</FtTag></Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Footer;
