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

export const Titulo = styled.h1`
    color: #DE2681;
    
`

export const Logo = styled.h1`
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-right: 150px;
    
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 50px;

    width: 300px;
`

export const Input1 = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    height: 30px;
    border-radius: 20px;
    border-color: #DE2681;
`
    
export const Input2 = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    height: 30px;
    border-radius: 20px;
    border-color: #DE2681;

`

export const Input3 = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    height: 30px;
    border-radius: 20px;
    border-color: #DE2681;

`

export const BotaoCadastrar = styled.button`
    background-color: #DE2681;
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: white;
    font-size: large;
    font-weight: 600;
    margin-bottom: 20px;

    :hover{
        background: black;
        border-radius: 30px;
    }
`