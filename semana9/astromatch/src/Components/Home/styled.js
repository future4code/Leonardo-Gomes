import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`

export const ContainerHeader = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 65px;
    background-color: #FE4259;
`

export const LogoImg = styled.img`
    width: 250px;
    height: 150px;
    margin-bottom: 10px;
    margin-left: 20px;
`

export const ButtonClean = styled.button`
    background-color: #FE4259;
    color: white;
    cursor: pointer;
    width: 150px;
    height: 30px;
    font-size: medium;
    font-weight: 700;
    border-radius: 30px;
    margin-top: 15px;
    margin-left: 280px;
    :hover{
        background-color: #ff5246;
        background: linear-gradient(to bottom, #fd3569 5%, #f5978e 100%);
    }
` 

export const ButtonMatch = styled.button`
    background-color: #FE4259;
    cursor: pointer;
    border: none;
    margin: 0 auto;
    margin-right: 40px;
    justify-content: space-evenly;
    :hover{
        background-color: #ff5246;
        background: linear-gradient(to bottom, #fd3569 5%, #f5978e 100%);
        border-radius: 80px;
    }
`

export const Card = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    box-pack: end;
    justify-content: flex-end;
`

export const ImagemCard = styled.div`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    box-align: center;
    align-items: center;
`

export const ContainerBio =styled.div`
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    
    color: white;
    display: flex;
    flex-direction: column;
    box-pack: end;
    justify-content: flex-end;
    padding: 15px;
    z-index: 2;
`

export const Profile = styled.div`
    display: flex;
    box-align: baseline;
    align-items: baseline;
    font-weight: bold;
    font-size: 25px;
    
`

export const TextBio = styled.div`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bolder;
    font-size: 15px;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 13px;
`

export const ButtonDislike = styled.button`
	box-shadow: inset 0px 0px 0px 0px #f5978e;
	background: linear-gradient(to bottom, #f24537 5%, #c62d1f 100%);
	background-color: #f24537;
	border-radius: 35px;
	
    display: block;
	color: #ffffff;
	font-family: Impact;
	font-size: 28px;
	
	width: 60px; 
    height: 60px;
	text-decoration: none;
	text-shadow:0px 0px 16px #810e05;
    cursor: pointer;
	
    :hover {
	background: linear-gradient(to bottom, #c62d1f 5%, #f24537 100%);
	background-color:#c62d1f;
    }
    
    :active {
	position: relative;
	top: 1px;
    }
`

export const ButtonLike = styled.button`
    background: linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
	background-color: #44c767;
	border-radius: 42px;
	display: inline-block;
	
    cursor: pointer;
	color: #ffffff;
	font-family: Impact;
	font-size: 28px;
	
    width: 60px; 
    height: 60px;
	text-decoration: none;
	text-shadow: 0px 0px 16px #2f6627;

    :hover {
	background: linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
	background-color: #5cbf2a;
    }
    
    :active {
	position: relative;
	top: 1px;
    }
`