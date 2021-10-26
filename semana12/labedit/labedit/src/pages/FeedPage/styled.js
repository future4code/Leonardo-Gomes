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

export const Foto = styled.h1`
    color: #DE2681;
    
`

export const Post = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    width: 300px;
    height: 50px;
    border-radius: 20px;
    border-color: #DE2681;
    margin-left: 30px;
`

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 250px;
    background-color: white;

    margin: 0 auto;
    margin-top: 30px;
    border-radius: 30px;
    box-shadow: 7px 8px 3px 5px #DE2681;

    align-items: center;
    justify-content: space-around;

`

export const ContainerCriar = styled.div`
    display: flex;
    margin-top: 20px;
    width: 500px;
    justify-content: space-around;

`

export const ContainerUsuario = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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

    margin-bottom: 30px;
    font-size: large;
    font-weight: 600;
    margin-left: 30px;
`

export const Comentarios = styled.button`
    background-color: #DE2681;
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    color: white;

    margin-bottom: 30px;
    font-size: large;
    font-weight: 600;
    margin-left: 30px;
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