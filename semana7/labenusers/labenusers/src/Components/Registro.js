import React from "react";
import styled from "styled-components";

const ContainerRegistro = styled.div `

`

const BotaoRegistro = styled.button `

` 

const Box = styled.div `

` 

const BotaoBox = styled.button `

`


function Registro (props) {
    return (
        <ContainerRegistro>
            <BotaoRegistro>I para a Página de LIsta de Usuários</BotaoRegistro>
            <Box>
                <label>Nome</label>
                <input
                    value={props.imputNome}
                    onChange={props.onChangeimputNome}
                />
                <label>Email</label>
                <input
                    value={props.imputEmail}
                    onChange={props.onChangeimputEmail}
                />
                <BotaoBox onClick={() => this.props.createUsers}>Salvar</BotaoBox>
            </Box>
        </ContainerRegistro>
    );
}

export default Registro;