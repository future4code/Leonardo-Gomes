import styled from "styled-components";

export const ContainerBotoes = styled.div`
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-auto-flow: column;
    gap: 150px;
    margin-top: 60px;
`


export const Botoes = styled.button`
	background-color: transparent;
	border-radius: 40px;
	border: 3px solid #ffffff;
	cursor: pointer;
    width: 230px;
	
    color: #ffffff;
	font-size: 28px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;
    
    
    :hover {
        border-color: #D4F113; 
        color: #D4F113;
    }
    `
export const BotaoLogout = styled.button`
    background-color: transparent;
	border-radius: 40px;
	border: 3px solid #D4F113;
	cursor: pointer;
	
    color: #ffffff;
	font-family: Arial;
	font-size: 28px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;
    
    :hover {
        border-color: white; 
        color: #D4F113;
    }
`
export const BotaoDetalhe = styled.button`
    background-color: transparent;
	border-radius: 40px;
	border: 3px solid #ffffff;
	cursor: pointer;
    width: 300px;
	
    color: #ffffff;
	font-size: 28px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;
    margin-left: 40px;
    margin-bottom: 20px;

    :hover {
        border-color: #D4F113; 
        color: #D4F113;
    }
    `

export const BotaoDeletar = styled.button`
    background-color: transparent;
	border-radius: 40px;
	border: 3px solid #ffffff;
	cursor: pointer;
    width: 230px;
	
    color: #ffffff;
	font-size: 28px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;
    width: 90px;
    margin-left: 20px;
    margin-top: 45px;
    
    
    :hover {
        border-color: #D4F113; 
        color: #D4F113;
    }
`

    export const ContainerCard = styled.div`
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        gap: 70px;
        background-color: #021221;
        width: 500px;
        height: 150px;
        border-radius: 50px;
    
    `