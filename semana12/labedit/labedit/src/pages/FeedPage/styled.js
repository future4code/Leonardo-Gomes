import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 180px;
    background-color: white;

    margin: 0 auto;
    margin-top: 30px;
    border-radius: 30px;
    box-shadow: 7px 8px 3px 5px #DE2681;

    align-items: center;
    justify-content: space-around;

`

export const Foto = styled.img`
    width: 6vw;
    height: 12vh;
    
`

export const Post = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: black;
    width: 300px;
    height: 50px;
    border: 1px solid #DE2681;
    margin-left: 30px;
`


export const ContainerCriar = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-around;


`

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 450px;
    background-color: white;

    margin: 30px;
    margin-top: 30px;
    border-radius: 30px;
    box-shadow: 7px 8px 3px 5px #DE2681;

    align-items: center;
    justify-content: space-around;

`

export const ContainerUsuario = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

`

export const PostUsuario = styled.input`
    display: flex;
    flex-direction: row;
    margin-top: 20px;

    width: 300px;
    height: 50px;
    border-radius: 20px;
    border-color: #DE2681;
    margin-left: 30px;
`

export const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

`

export const BotaoPost = styled.button`
    background-color: #DE2681;
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: white;

    margin-top: 10px;
    font-size: large;
    font-weight: 600;
    margin-left: 30px;
`

export const ComentarioBotao = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    margin-bottom: 30px;
    margin-left: 30px;

    :hover {
        background-color: grey;
        border-radius: 30px;
    }
`

export const BotaoVoltar = styled.button`
    background-color: white;
    width: 200px;
    height: 35px;
    border-color: #DE2681;
    border-radius: 50px;
    cursor: pointer;
    color: #DE2681;
    font-size: large;
    font-weight: 700;

    margin: 0 auto;
`