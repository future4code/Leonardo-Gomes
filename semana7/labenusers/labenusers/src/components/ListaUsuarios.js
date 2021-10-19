import React from "react";
import styled from "styled-components";

const ContainerBlock = styled.div `

`

const ContainerUsuarios = styled.div `
    display: flex;
    min-width: 60px;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 10px 0;
`;

const DeletarBotao = styled.span`
    color: red;
    cursor: pointer;
`;


function ListaUsuarios () {
        return (
            <ContainerBlock>
                <ContainerUsuarios>
                    <h2>Usuários Cadastrados:</h2>
                
                </ContainerUsuarios>
            </ContainerBlock>
        );
}


export default ListaUsuarios;

