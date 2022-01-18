import styled from "styled-components";


export const FtLink = styled.a`
    display: flex;
    color: grey;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    &::hover{
        color: #00aee6;
    }
`

export const FtTag = styled.h6`
    color: #fff;
    text-align: center;
    margin-top: 2.5rem;
`

export const FtInput = styled.input`
    width: 500px;
    border-radius: 80px;
    padding: 16px 18px;
    outline: none;
    margin-right: 10px;
`
export const Subscribe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SubscribeBtn = styled.button`
    border-radius: 80px;
    padding: 16px 22px;
    -webkit-transition-property: none;
    transition-property: none;
    color: #fff;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;
    background-color:#00aee6;
    -webkit-transition: -webkit-transform 350ms ease;
    transition: -webkit-transform 350ms ease;
    transition: transform 350ms ease;
    transition: transform 350ms ease, -webkit-transform 350ms ease;

    &:hover{
    background: #fff;
    color: #00AEE6;
    border: 1px solid #000;
    -webkit-transform: scale3d(0.94, 0.94, 1.01);
    transform: scale3d(0.94, 0.94, 1.01);
}
`