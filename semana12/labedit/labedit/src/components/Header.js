import React, {useState} from "react";
import {NavBar, Botao, Logo, Logout, Text} from "./styled"
import logout from "../img/logout.png"
import { useHistory } from "react-router-dom";
import {LoginPage} from "../routes/coordinator"

const Header = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [botaoText, setBotaoText] = useState(token ? "Logout": "Login")
    
    return (
        <NavBar>
            <Logo>VERBUM</Logo>
            <Botao onClick={() => LoginPage(history)}><Logout src={logout} alt="logout botão"/></Botao>
            <Text>{botaoText}</Text>
        </NavBar>
    )
}

export default Header;