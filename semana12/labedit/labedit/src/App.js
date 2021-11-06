import React, {useState} from "react";
import Router from "./routes/Router";
import GlobalStyle from "./global/GlobalStyle";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  const token = localStorage.getItem("token")
  const [botaoText, setBotaoText] = useState(token ? "Logout": "Login")


  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
      <Header botaoText={botaoText} setBotaoText={setBotaoText}/>
      <Router setBotaoText={setBotaoText}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
