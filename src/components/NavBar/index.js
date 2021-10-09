import {React, useState} from 'react'
import { Navbar, Nav, Container, Modal, Button, NavDropdown} from 'react-bootstrap';
import {Logo} from './Navbar.style';
import Count from '../ButtonCountdown';
import { Btn } from '../Button';

export const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <>
        <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
          <Container fluid = "md">
            <Navbar.Brand href="/"><Logo src={`images/logo-red-on-white.png`}></Logo></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="/Raff">Training</Nav.Link> */}
              <Nav.Link href="/#about">About us</Nav.Link>
              <NavDropdown title="Contact us" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://t.me/web3bridge">Telegram</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/Web3Bridge?s=20">Twitter</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" onClick={handleShow}>Sign in</Nav.Link>
              <Nav.Link href="/Raffle">Raffle</Nav.Link>
              <Count/>
            </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>SORRY</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This Feature is currently unavailable please try again later.
            </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default NavBar;