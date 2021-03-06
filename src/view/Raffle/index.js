import React from 'react'
import { Image} from 'react-bootstrap';
import { Flex, Tag1, Tag3, Tag2} from './Raffle.style';
import {Web3ReactProvider} from '@web3-react/core';
import web3 from 'web3';
import ConnectBtn from '../../components/ConnectBtn';
import ViewWinner from '../../components/ViewWinner';
import {PageDiv} from '../../components/Tag';
import Countdown from 'react-countdown';



const getLibrary = (provider) => {
  return new web3(provider);
}

const renderer = ({hours, minutes, seconds, completed}) => {
  if (!completed) {
    return(
    <>
  <Web3ReactProvider getLibrary={getLibrary}>
          <PageDiv>
            <ConnectBtn />
            <Flex><Tag3> Countdown till next draw: {hours}Hr:{minutes}Min:{seconds}Sec</Tag3></Flex>
            <Flex>
                <Image src={`images/logo-red-on-white.png`} fluid/>
            </Flex>
            <Flex>
                <Tag1>2nd Anniversary</Tag1>
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
          </Web3ReactProvider>
    </>
    )
  } else {
      return (
        <>
        {/* <PageDiv>
          <Flex>
              <Image src={`images/const.svg`} fluid/>
          </Flex>
          <Flex>
            <Row>
              <Col>
                <Span1>{hours}</Span1>
                <Flex><h1>HOURS</h1></Flex>
              </Col>  
              <Col>
                <Span2>{minutes}</Span2>
                <Flex><h1>MINUTES</h1></Flex>
              </Col>
              <Col >
                <Span3>{seconds} </Span3>
                <Flex><h1>SECONDS</h1></Flex>
              </Col>
            </Row>
          </Flex>
        </PageDiv> */}
         <Web3ReactProvider getLibrary={getLibrary}>
        <PageDiv>
            <ConnectBtn />
            <Flex><Tag3> Countdown till next draw: {hours}Hr:{minutes}Min:{seconds}Sec</Tag3></Flex>
            <Flex>
                <Image src={`images/logo-red-on-white.png`} fluid/>
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
          </Web3ReactProvider>
        </>
      )
  }
}

const Raffle = () => {

    return (
        <>
      <Countdown date={'2021-10-14T20:00:00'} renderer={renderer}/>
        </>
    )
}

export default Raffle;
