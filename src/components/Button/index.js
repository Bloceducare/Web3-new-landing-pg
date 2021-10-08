
import styled from "styled-components"
import { Link } from "react-router-dom"

export const Btn = styled(Link)`
border-radius: 4px;
background: #00aee6;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #00AEE6;
    border: 1px solid #000;
}
`

export const WalletBtn = styled.button`
    padding: 10px 30px;
    background-color: rgba(255, 0, 98, 0.87);
    border-radius: 8px;
    margin: 10px 10px;
    outline: none;
    align-items: flex-end;
    justify-content: flex-end;
    
    &:hover{
        background-color: rgba(255, 0, 98, 0.397);
    }
`