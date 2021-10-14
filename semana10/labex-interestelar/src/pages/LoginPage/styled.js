import styled from "styled-components";

export const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 100px;
`

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px;

    input {
        margin-top: 20px;
        padding: 2px 15px;
        text-decoration: none;
        font-weight: 600;
        border-radius: 50px;
        box-shadow: 1px 1px 7px 3px blue;
        width: 450px;
        height: 50px;
    }
`

export const Titulo = styled.h1`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
` 

export const Botoes = styled.button`
	background-color: transparent;
	border-radius: 40px;
	border: 3px solid #ffffff;
	cursor: pointer;
	
    color: #ffffff;
	font-family: Arial;
	font-size: 28px;
	font-weight: bold;
	padding: 8px 24px;
	text-decoration: none;
`