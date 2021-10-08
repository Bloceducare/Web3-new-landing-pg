import styled from "styled-components";
import {Link} from 'react-router-dom';


export const Logo = styled.img`
    height: 70px;
    width: 200px;
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #00aee6;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-right: 30px;
    align-self: center;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #00AEE6;
    }
`