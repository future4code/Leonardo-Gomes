import React from "react";
import {useHistory} from "react-router-dom";
import { Logo, Container, Titulo, ContainerInput,  BotaoCadastrar, Input1, Input2, Input3} from "./styled";


const RegisterPage = () => {

    const history = useHistory()

    const LoginPage = () => {
        history.push("/")
    }


    return(
        <div>
            <Logo>VERBUM</Logo>
            <Container>
                <Titulo>Cadastre - se</Titulo>
                
                <ContainerInput>
                    <Input1 type="text" placeholder="Nome do Usuário"></Input1>
                    <Input2 type="text" placeholder="E-mail"></Input2>
                    <Input3 type="password" placeholder="Senha"></Input3>
                </ContainerInput>
                
                    <BotaoCadastrar onClick={LoginPage}> Cadastrar </BotaoCadastrar>
            </Container>
        </div>
    )
}

export default RegisterPage; 
