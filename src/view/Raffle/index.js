"use strict";
import React, { Component } from 'react'
import { Image, Tab, Tabs} from 'react-bootstrap';
import { Flex, Tag1, Tag3, Tag2,LogoH, Div2} from './Raffle.style';
import {Web3ReactProvider} from '@web3-react/core';
import web3 from 'web3';
import ConnectBtn from '../../components/ConnectBtn';
import { PageDiv } from '../../components/Tag'
import ViewWinner from '../../components/ViewWinner';



const getLibrary = (provider) => {
  return new web3(provider);
}

let ans;
const Raffle = () => {

    return (
        <>
          <Web3ReactProvider getLibrary={getLibrary}>
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
              <ViewWinner />
            </Flex>
          </PageDiv>
          {/* <Div2>
            <Flex>
              <Image src={`images/raffle.svg`}/>
            </Flex>
          </Div2> */}
          </Web3ReactProvider>
        </>
    )
}

export default Raffle;
