import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Titulo, ContainerInput, ContainerBotao, BotaoEntrar, BotaoCadastrar, Input1, Input2 } from "./styled";

const LoginPage = () => {
    
    const history = useHistory()

    const RegisterPage = () => {
        history.push("/register")
    };
    
    const FeedPage = () => {
        history.push("/feed")
    };
    

    return(
        <Container>
            <Titulo>Solte o Verbo e Poste</Titulo>
            
            <ContainerInput>
                <Input1 type="text" placeholder="E-mail"></Input1>
                <Input2 type="password" placeholder="Senha"></Input2>
            </ContainerInput>
            
            <ContainerBotao>
                <BotaoEntrar onClick={FeedPage}> Entrar </BotaoEntrar>
                <BotaoCadastrar onClick={RegisterPage}> Cadastrar </BotaoCadastrar>
            </ContainerBotao>
        </Container>
    )
}

export default LoginPage; 