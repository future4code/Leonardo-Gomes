import React from 'react';
import styled from "styled-components";
import Etapa1 from './components/Etapa1';


export const Home = styled.div`
    font-family: sans-serif;
    text-align: center;
`

export default class App extends React.Component {
  
  state = {
    etapa: 1,

    respostas: [{
      nome: "",
      idade: "",
      email: "",
      escolaridade: ""
    }
  ],

    inputNome: "",
    inputIdade: "",
    inputEmail: "",
    inputEscolaridade: ""
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputIdade = (event) => {
    this.setState({ valorInputIdade: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };
  onChangeInputEscolaridade = (event) => {
    this.setState({ valorInputEscolaridade: event.target.value });
  };

renderizaEtapa = () => {
  switch(this.state.etapa){
    case 1:
      return <Etapa1 />;
    // case 2:
    //   return <Etapa2 />;
    // case 3:
    //   return <Etapa3 />;
    // case 4:
    //   return <Final />
  }
};

irParaProximaEtapa = () => {
  const etapaAtual = Number(this.state.etapa)
  const proximaEtapa = etapaAtual + 1
  this.setState({etapa: proximaEtapa})
}

render() {
  return (
    <Home>
      {this.renderizaEtapa}
      <button onClick={this.irParaProximaEtapa}> Próxima Etapa</button>
    </Home>
  );
}
}