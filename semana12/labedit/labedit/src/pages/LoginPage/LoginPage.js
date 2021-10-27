import React, {useEffect} from "react";
import { Container, Titulo, ContainerInput, ContainerBotao, BotaoEntrar, BotaoCadastrar, Input1, Input2 } from "./styled";
import { useHistory } from "react-router-dom";
import {RegisterPage, FeedPage} from "../../routes/coordinator"
import useForm from "../../hooks/useForm";
import {BASE_URL} from "../../constants/url"
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const LoginPage = () => {
    
    const history = useHistory()
    const {form, onChange, clear} = useForm({email:"" , password:""});

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form)
    }
    
    const login = () => {
        axios
        .post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            FeedPage(history)
            clear()
        })
        .catch((err) => {
            alert("Usuário não cadastrado", err.response.data.message)
        })
    }


    return(
        <div>
            <Container>
                <Titulo>Solte o Verbo e Poste</Titulo>
                
                <ContainerInput>
                    <form onSubmit={onSubmitForm}>
                        <Input1 
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            placeholder={"E-mail"}
                            required
                            type={"email"}
                            title={"Digite seu e-mail"}
                        />

                        <Input2 
                            name={"password"}
                            value={form.password}
                            onChange={onChange} 
                            placeholder={"Senha"}
                            required
                            type={"password"}
                            title={"Digite sua senha"}
                        />

                        <ContainerBotao>
                            <BotaoEntrar type={"submit"}> Entrar </BotaoEntrar>
                        </ContainerBotao>
                    </form>
                </ContainerInput>
                    
                    <ContainerBotao>
                        <BotaoCadastrar onClick={() => RegisterPage(history)}> Cadastrar </BotaoCadastrar>
                    </ContainerBotao>
            </Container>
        </div>
    )
}

export default LoginPage; 