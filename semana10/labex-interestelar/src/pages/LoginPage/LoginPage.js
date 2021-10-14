import React from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerBotoes, Botoes} from "./styled"


const LoginPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goAdminHomePage = () => {
        history.push("/admin/trips/list")
    }

    return (
        <div>
            <Titulo>Login</Titulo>
            <input type="text" />
            <input type="text" />
            
            
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes onClick={goAdminHomePage}>Entrar</Botoes>
            </ContainerBotoes>
        </div>
        
    );
}

export default LoginPage;