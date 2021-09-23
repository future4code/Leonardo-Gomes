import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import ListaUsuarios from "./components/ListaUsuarios";
import Background from './components/img/background.jpg'
import axios from "axios";


const ContainerSite = styled.div `
  background-image: url(${Background});
  width: 100%;
  height: 609px;
  background-size: cover;
  background-attachment: fixed;
`


export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <Cadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
      return <div>Erro! Página não encontrada</div>
      }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }
  
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  
    render() {
        return (
        <ContainerSite>
          {this.escolheTela()}
        </ContainerSite>
      );
    }
  }

