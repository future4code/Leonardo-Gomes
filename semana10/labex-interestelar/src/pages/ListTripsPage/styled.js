import styled from "styled-components";

export const ContainerBotoes = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 70px;
    margin-top: 70px;
    align-items: center;
    justify-content: center;
`

export const Titulo = styled.h1`
    color: #D4F113;
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
    width: 220px;

    :hover {
        border-color: #D4F113; 
        color: #D4F113;
    }
`

export const ContainerTrips = styled.div`
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        margin-top: 70px;
        margin-bottom: 80px;
        gap: 70px;
        background-color: blue;
        width: 500px;
        height: 170px;
        border-radius: 40px;
`

export const ContainerInfos = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 50px;
        background-color: #F5F6FA;
        border-radius: 40px;
    

        p{
            align-items: center;
            justify-content: center;
            font-size: bold;
            padding: 10px 10px;
        }
`