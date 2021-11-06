import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    height: 480px;
    background-color: white;

    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 7px 8px 3px 5px #DE2681;

    align-items: center;
    justify-content: center;

`

export const Logo = styled.h1`
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 150px;
    
`

export const Titulo = styled.h1`
    color: #DE2681;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

export const Input1 = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    height: 30px;
    border-radius: 10px;
    border-color: #DE2681;
    width: 300px;
    padding-left: 1.5vw;
`
    
export const Input2 = styled.input`
    display: flex;
    flex-direction: column;

    height: 30px;
    border-radius: 10px;
    border-color: #DE2681;
    width: 300px;
    padding-left: 1.5vw;
    
`

export const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BotaoEntrar = styled.button`
    background-color: #DE2681;
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: white;

    margin-top: 50px;
    margin-bottom: 30px;
    font-size: large;
    font-weight: 600;

    :hover{
        background: black;
        border-radius: 30px;
    }
`

export const BotaoCadastrar = styled.button`
    background-color: white;
    width: 200px;
    height: 35px;
    border-color: #DE2681;
    border-radius: 50px;
    cursor: pointer;
    color: #DE2681;
    font-size: large;
    font-weight: 600;

    :hover{
        background: black;
        color: white;
        border-radius: 30px;
        border: none;
    }
`