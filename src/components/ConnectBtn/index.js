import React from 'react'
import { Button } from 'react-bootstrap'
import { useWeb3React} from '@web3-react/core'
import {InjectedConnector} from "@web3-react/injected-connector";
import { WalletBtn } from '../Button';

const injected = new InjectedConnector({
    supportedChainIds:[1,3, 4, 5, 42, 97],
})


 const ConnectBtn = () => {

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
        <div>
            {active ? 
            <><WalletBtn onClick={disconnect}>Disconnect</WalletBtn><span>Connected with address: <b>{account}</b></span></> :
            <WalletBtn onClick={connect} >Connect Your Wallet</WalletBtn>}
        </div>
    )
}

export default ConnectBtn
