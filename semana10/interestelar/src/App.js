import GlobalStyle from "./global";
import styled from "styled-components";
import background from "./img/estrelas.gif"

const Fundo = styled.img `
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
`

const Titulo = styled.h1 `
    color: black;
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Fundo src={background} alt="background"/>
      <Titulo>Interestelar</Titulo>
    </div>
  );
}

export default App;
