import React from "react";
import GlobalStyle from "./Global";
import styled from "styled-components";
import Router from "./routes/Router";

const Titulo = styled.h1 `
    color: white;
    transition: 0.3s;
    text-transform: uppercase;

    :hover{
    color: #D4F113;
    
    }

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    
`

const App = () => {
  return (  
      <div>  
        <GlobalStyle />
        <Titulo>INTERESTELAR</Titulo>
        <Router />
      </div>
      
  );
}

export default App;