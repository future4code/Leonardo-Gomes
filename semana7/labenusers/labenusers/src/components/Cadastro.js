import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerBloco = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 300px;
    width: 40%;
    margin: 0 auto;
    border-radius: 5%;
    align-items: center;

`

const BotaoPaginas = styled.button`
    padding: 2px 15px;
    text-decoration: none;
    font-family: inherit;
    font-weight: 600;
    background-color: #b76a75;
    border-radius: 50px;
    color: white;
    transition: all .2s ease;
    margin-top: 40px;
  
`

const BotaoCadastro = styled.button`
    padding: 2px 15px;
    text-decoration: none;
    font-family: inherit;
    font-weight: 600;
    background-color: #b76a75;
    border-radius: 50px;
    color: white;
    transition: all .2s ease;
    margin-top: 40px;

`

export default class Cadastro extends React.Component {

    state = {
      nome: "",
      email: ""
    }

    recebeNome = (event) => {
      this.setState({nome: event.target.value})
    }
    
    recebeEmail = (event) => {
      this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
        name: this.state.nome,
        email: this.state.email
      }
      axios.post(url, body, {
        headers: {
          Authorization: "leonardo-gomes-maryam"
        }
      })
      .then((res) => {
        alert("Usuário(a) cadastrado com sucesso!")
        this.setState({nome: "", email: ""})
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    }



    render() {
      return (
        <div>
          <ContainerBloco>
              
                <BotaoPaginas onClick={this.props.irParaLista}> Ir para Lista de Usuários </BotaoPaginas>
                <h2> Cadastro </h2>
                <input 
                  placeholder={"Nome"}
                  value={this.state.nome}
                  onChange={this.recebeNome}
                />
                <input 
                  placeholder={"E-mail"} 
                  value={this.state.email}
                  onChange={this.recebeEmail}
                />
                <BotaoCadastro onClick={this.fazerCadastro}>Cadastrar</BotaoCadastro>
              
          </ContainerBloco>
        </div>
    
    )
  }
}
