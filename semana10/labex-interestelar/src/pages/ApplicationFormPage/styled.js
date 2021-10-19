import styled from "styled-components";

export const ContainerViagem = styled.div`
    background-color: transparent;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 480px;
    box-shadow: 1px 1px 10px 7px blue;
    margin: 0 auto;
    margin-top: 30px;
`

export const ContainerEscolhas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    
    input {
        margin-top: 20px;
        padding: 2px 15px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 50px;
        box-shadow: 1px 1px 7px 3px blue;
    }

    select{
        margin-top: 20px;
        padding: 2px 15px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 1px 1px 7px 3px blue;
    }

`

export const Titulo = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
` 

export const ContainerBotoes = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 35px;
    margin-top: 40px;
`

export const Botoes = styled.button`
	background-color: transparent;
	border-radius: 40px;
	border: 3px solid #ffffff;
	cursor: pointer;
	
    color: #ffffff;
	font-family: Arial;
	font-size: 20px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;

    :hover {
        border-color: #D4F113; 
        color: #D4F113;
    }
    

`