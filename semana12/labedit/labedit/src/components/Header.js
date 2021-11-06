import React from "react";
import {NavBar, Botao, Logo, Logout, Text} from "./styled"
import logoutfoto from "../img/logout.png"
import { useHistory } from "react-router-dom";
import {LoginPage} from "../routes/coordinator"

const Header = ({botaoText, setBotaoText}) => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    
    const logout = () => {
        localStorage.removeItem("token")
    }
    
    const botaoAction =  () => {
        if (token){
            logout()
            setBotaoText("Login")
            LoginPage(history)
        } else {
            LoginPage(history)
        }
    }
    
    return (
        <NavBar>
            <Logo>VERBUM</Logo>
            <Botao onClick={botaoAction}><Logout src={logoutfoto} alt="logout botão"/></Botao>
            <Text>{botaoText}</Text>
        </NavBar>
    )
}

export default Header;