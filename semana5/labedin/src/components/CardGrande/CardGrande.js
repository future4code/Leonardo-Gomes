import React from 'react';
import styled from "styled-components";

export const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

export const DimensaoImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

export const TituloNome = styled.h4 `
    margin-bottom: 15px;
`

export const ContainerTextos = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <BigcardContainer>
            <DimensaoImagem src={ props.imagem } />
            <ContainerTextos>
                <TituloNome> { props.nome } </TituloNome>
                <p>{ props.descricao }</p>
            </ContainerTextos>
        </BigcardContainer>
    )
}

export default CardGrande;