import React, { useState } from 'react'
import { Button, Row, Col,Modal} from 'react-bootstrap'
import { useWeb3React} from '@web3-react/core'
import {InjectedConnector} from "@web3-react/injected-connector";
import { WalletBtn } from '../Button';
import { testers } from '../../view/Raffle/data/testers';
import { Flex } from '../../view/Raffle/Raffle.style';
import { BtnDiv,Raftag } from '../Tag';

const injected = new InjectedConnector({
    supportedChainIds:[1,3, 4, 5, 42, 97,137,80001],
})


 const ConnectBtn = () => {
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = testers;
    console.log(data, "mmm")
    let ans;

    const filtered = [...new Set(data)].map((item, index) => {
      return {
          add: item,
          index
      }
    })

  
  const getindex = () => {
    console.log(account, "gvnnnn")
    console.log(filtered, "check")
    const res = filtered.find(item => item.add == account)
    if(!res?.index){
        return setMessage("Sorry, your address is not found eligible for the draw")
    }
        return setMessage(`Congratulations, Your raffle number is ${res.index}`)
  }
     

    const {active, account, library, connector, activate, deactivate} = useWeb3React()

    const connect = async () => {
        try {
            await activate(injected)
        } catch (error){
            console.log(error)
        }
    }

    const disconnect = async () => {
        try {
            await deactivate()
        } catch (error){
            console.log(error)
        }
    }

    return (
        <>{active ? 
            <BtnDiv>
                <Row>
                    <Col lg={6} sm={6}>
                        <WalletBtn onClick={disconnect}>Disconnect</WalletBtn>
                        <div><h7>Connected with address: <b>{account}</b></h7></div>
                    </Col>
                    <Col lg={6} sm={6}>
                        <Button variant="success" onClick={(event) => [getindex(),handleShow() ]}>Check your Raffle Number</Button>
                        <div></div>
                   </Col>
                </Row>
               <Row>
                   <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Status</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <Raftag>{message}</Raftag></Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
               </Row>                
            </BtnDiv> :
            <WalletBtn onClick={connect} >Connect Your Wallet</WalletBtn>}
        </>
    )
}

export default ConnectBtn
