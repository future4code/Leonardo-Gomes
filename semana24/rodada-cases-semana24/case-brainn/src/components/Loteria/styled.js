import styled from "styled-components";

// Escopo Model
export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
`

// Button Selection Loteria
export const ContainerSelecao = styled.div`
    display: flex;
    padding: 60px 0px 0px 100px;
    align-items: center;
    justify-content: left;
`

export const ButtonSelecao = styled.select`
    height: 30px;
    width: 150px;
    border-radius: 5px ;
    border: none;
    padding-left: 15px;
`


// Logo & Title Loteria
export const Logotipo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 170px 0px 0px 100px;

`

export const ImagemLogo = styled.img`
    width: 50px;
    height: 50px;

`

export const TitleLoteria = styled.h2`
    display: flex;
    align-items: center;
    margin-left: 5px;
    color: whitesmoke;
`


// Container Game Description
export const ContainerGame = styled.div`
    display: flex;
    flex-direction: column;
    padding: 200px 0px 0px 100px;
`

export const TitleConcurso = styled.h5`
    display: flex;
    align-items: center;
    color: #ededed;
`

export const TitleCodigo = styled.h3`
    display: flex;
    margin-top: 10px;
    align-items: center;
    color: whitesmoke;
`