import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import ListaUsuarios from "./components/ListaUsuarios";
import Background from './components/img/background.jpg'



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

import axios from "axios";
import Registro from "./Components/Registro";
import ListaUsuarios from "./Components/ListaUsuarios";

const headers = {
  headers: {
  Authorization: "leonardo-gomes-maryam" 
  }
}


class App extends React.Components {
  
  state = {
    listaDeUsuarios: [],
    inputNome: "",
    inputEmail: ""
  };

  componentDidMount() {
    this.getAllUsers();
  };
  
  onChangeinputNome = (event) => {
    this.setState({inputNome: event.target.value});
  };
  
  onChangeinputEmail = (event) => {
    this.setState({inputEmail: event.target.value});
  };

  createUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.imputNome,
      email: this.state.imputEmail
    }

    axios.post(url, body, headers)
      .then((response) => {
        this.setState({inputNome: response.data})
        this.setState({inputEmail: response.data})
        this.getAllUsers();
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
      .then((response) => {
        console.log({listaDeUsuarios: response.data})
        this.setState({ listaDeUsuarios: response.data})
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

  render() {
      return (
      <div>
        <Registro
          inputNome={this.state.inputNome}
          inputEmail={this.state.imputEmail}
          onChangeinputNome={this.onChangeinputNome}
          onChangeinputEmail={this.onChangeinputEmail}
          listaDeUsuarios={this.state.listaDeUsuarios}
          createUsers={this.createUsers}
          />
        <ListaUsuarios
          inputNome={this.state.inputNome}
          inputEmail={this.state.imputEmail}
          onChangeinputNome={this.onChangeinputNome}
          onChangeinputEmail={this.onChangeinputEmail}
          listaDeUsuarios={this.state.listaDeUsuarios}
          createUsers={this.createUsers}
          />
      </div>
    );
  }
}

export default App;


