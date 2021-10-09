import { testers } from '../../view/Raffle/data/testers';
import React from 'react'
import { Button } from 'react-bootstrap';
import { getConfig } from '@testing-library/dom';
import { useWeb3React} from '@web3-react/core'
import {InjectedConnector} from "@web3-react/injected-connector";
var ans;

const injected = new InjectedConnector({
    supportedChainIds:[1,3, 4, 5, 42, 97],
})


const GetIndex = () => {
    

    const {active, account, library, connector, activate, deactivate} = useWeb3React()
    const data = testers.testers;

    const filtered = [...new Set(data)].map((item, index) => {
        return {
            add: item,
            index
            }
    })

    const theindex = () => {
        const res = filtered.find(item => item.add == account)
        ans = res.index
        console.log(res.index, "show")
        return res.index;
    }

    return (
        <div>
            <Button onClick={get}>raffle</Button>
            <span>{ans}</span>
        </div>
    )
}

export default GetIndex
