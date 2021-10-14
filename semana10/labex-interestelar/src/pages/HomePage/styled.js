import styled from "styled-components";

export const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 40px;
`

export const ContainerLista = styled.div`
    display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: -60px;
`

export const Titulo = styled.h1` 
		font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
		text-align: start;
		font-weight: 600;
		letter-spacing: -0.03em;
		font-size: 2.875rem;
		line-height: 2.2;
		color: rgb(255, 255, 255);
		margin-bottom: 30px;
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
	font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;

`

export const LoginBotao = styled.button`
	background-color: transparent;
	border-radius: 50px;
	border: 3px solid #ffffff;
	cursor: pointer;

	color: #ffffff;
	font-family: Arial;
	font-size: 20px;
	font-weight: bold;
	padding: 8px 14px;
	text-decoration: none;

	position:absolute;
    z-index:1;
    top:50%;
    left:50%;                             
    margin: -30px 0 0 -44px;   
	font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;

`

export const ContainerLogin = styled.div`
	position:relative;
`