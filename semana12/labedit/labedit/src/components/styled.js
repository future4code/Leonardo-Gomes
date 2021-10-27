import styled from "styled-components"

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    height: 80px;
    align-items: center;
    margin-bottom: 20px;
`

export const Logo = styled.h1`
    color: white;
    justify-content: flex-start;
    margin-right: 400px;
    margin-left: 180px;
`

export const Text = styled.h2`
    color: white;
    margin-left: 10px;
    cursor: pointer;

`

export const Logout = styled.img`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-left: 300px;
    :hover{
        background-color: white;
        border-radius: 30px;
    }
`
    
export const Botao = styled.button`
        border: none;
        background-color: transparent;
`
    
