import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    usuarios : [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Jake",
        fotoUsuario: "https://picsum.photos/50/30",
        fotoPost: "https://picsum.photos/50/30"
      },
      {
        nomeUsuario: "Briggs",
        fotoUsuario: "https://picsum.photos/50/10",
        fotoPost: "https://picsum.photos/200/152"
      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPostagem = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novasPostagens = [...this.state.usuarios, novoPost];

    this.setState({usuarios: novasPostagens});
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  }


  render() {
    const listaDeComponents = this.state.usuarios.map((usuario) => { return (
      <Post
        nomeUsuario = {usuario.nomeUsuario}
        fotoUsuario = {usuario.fotoUsuario}
        fotoPost = {usuario.fotoPost}
      /> )
    });

    return (
      <div>
          <input
            value = {this.state.valorInputNomeUsuario}
            onChange = {this.onChangeInputNomeUsuario}
            placeholder ={"Seu Nome"}
          />
          
          <input
            value = {this.state.valorInputFotoUsuario}
            onChange = {this.onChangeInputFotoUsuario}
            placeholder ={"Sua Foto de Perfil"}
          />

          <input
            value = {this.state.valorInputFotoPost}
            onChange = {this.onChangeInputFotoPost}
            placeholder ={"Seu foto postagem"}
          />

          <button onClick={this.adicionaPostagem}> Adicionar Postagem </button>

        <MainContainer>
          {listaDeComponents}
        </MainContainer>
        
      </div>
    );
  }
}

export default App;


{/* (/* render() }
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'jake'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/50/30'}
        />

        <Post
          nomeUsuario={'briggs'}
          fotoUsuario={'https://picsum.photos/50/10'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>

    );
  }
} */}

{/* export default App; */}
