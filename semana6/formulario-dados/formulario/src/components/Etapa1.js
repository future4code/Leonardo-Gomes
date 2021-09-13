import React from "react";
import styled from "styled-components"

export const Home = styled.div`
    font-family: sans-serif;
    text-align: center;

`

export default class Etapa1 extends React.Component {
    render() {
        return (
            <><Home>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>

                <input
                    value={this.props.valorInputNome}
                    onChange={this.onChangeInputNome}
                    placeholder="Nome" />

                <p>2. Qual sua idade?</p>
                <input
                    value={this.props.valorInputIdade}
                    onChange={this.onChangeInputIdade}
                    placeholder="Idade" />

                <p>3. Qual seu email?</p>
                <input
                    value={this.props.valorInputEmail}
                    onChange={this.onChangeInputEmail}
                    placeholder="Email" />

                <p>4. Qual a sua escolaridade?</p>
                <input
                    value={this.props.valorInputEscolaridade}
                    onChange={this.onChangeInputEscolaridade}
                    placeholder="Escolaridade" />

            </Home>
            <button>Próxima etapa</button>
            </>
            );
        }
}
