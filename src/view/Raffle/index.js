import React, { Component } from 'react'
import { Button, Col, Container, Row, Image, Tab, Tabs} from 'react-bootstrap';
import { Img, Flex, Tag1, BackgroundDiv,Tag3, Tag2, TextDiv,LogoH, Div2} from './Raffle.style';
import { Logo } from '../../components/NavBar/Navbar.style';
import {Web3ReactProvider} from '@web3-react/core';
import web3 from 'web3';
import ConnectBtn from '../../components/ConnectBtn';
import { PageDiv } from '../../components/Tag';

const getLibrary = (provider) => {
  return new web3(provider);
}


const Raffle = () => {
    return (
        <>
          <Web3ReactProvider getLibrary={getLibrary}>
          {/* <Img src={`images/backk.svg`}/> */}
          <PageDiv>
            <ConnectBtn />
            <Flex>
                <LogoH src={`images/logo-red-on-white.png`} fluid/>
            </Flex>
            <Flex>
                <Tag1>2nd Year Anniversary</Tag1>
            </Flex>
          </PageDiv>
          <PageDiv>
            <Flex>
              <Tag2>
                RAFFLE &nbsp; GIVEAWAY
              </Tag2>
            </Flex>
          </PageDiv>
          <PageDiv>
            <Flex>
              <Tag3>
                CONNECT YOUR WALLET
              </Tag3>
            </Flex>
            <Flex>
              <Tag3>
                TO CHECK YOUR RAFFLE NUMBER
              </Tag3>
            </Flex>
            <Flex>
              <Button>Check Your Raffle Number</Button>
            </Flex>
          </PageDiv>
          <Div2>
            <Flex>
              <Image src={`images/raffle.svg`}/>
            </Flex>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Home">
                
              </Tab>
              <Tab eventKey="profile" title="Profile">
                {/* <Sonnet /> */}
              </Tab>
              <Tab eventKey="contact" title="Contact">
                {/* <Sonnet /> */}
              </Tab>
            </Tabs>
          </Div2>
          </Web3ReactProvider>
        </>
    )
}

export default Raffle;
