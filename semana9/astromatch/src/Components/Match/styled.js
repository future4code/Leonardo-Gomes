import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    padding: 10px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    border-radius: 20px;
    
    img{
        border-radius: 50px;
        width: 60px;
    }
    :hover{
        background: linear-gradient(to bottom, #f5978e 5%, #fd3569 100%);
    }

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
    margin-right: 40px;
    margin-bottom: 10px;
`
export const ButtonBack = styled.button`
    background-color: white;
    cursor: pointer;
    border: none;
    background-color: #FE4259;
    cursor: pointer;
    margin: 0 auto;
    margin-left: 30px;
    justify-content: space-evenly;
    img{
        width: 55px;
    }
    :hover{
        background-color: #ff5246;
        background: linear-gradient(to bottom, #fd3569 5%, #f5978e 100%);
        border-radius: 60px;
    }
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
    margin-left: 120px;
    margin-top: 50px;
    :hover{
        background-color: #ff5246;
        background: linear-gradient(to bottom, #fd3569 5%, #f5978e 100%);
    }
` 