import React from "react";
import {useHistory} from "react-router-dom";
import { Container, Titulo, ContainerInput, ContainerBotao,  BotaoCadastrar, Input1, Input2, Input3} from "./styled";
import { FeedPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm"
import {BASE_URL} from "../../constants/url"
import axios from "axios";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const RegisterPage = (setBotaoText) => {
    useUnprotectedPage()
    const history = useHistory()
    const {form, onChange, clear} = useForm({username: "", email: "", password: ""});

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, setBotaoText)
    }

    const register = () => {
        axios
        .post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            FeedPage(history)
            clear()
            setBotaoText("Logout")
        })
        .catch((err) => {
            alert("Erro no Cadastro", err.response.data)
        })
    }


    return(
        <div>
            <Container>
                <Titulo>Cadastre-se</Titulo>
                
                <ContainerInput>
                    <form onSubmit={onSubmitForm} setBotaoText={setBotaoText}>
                    <Input1 
                        name={"username"}
                        value={form.username}
                        onChange={onChange} 
                        placeholder={"Nome de Usuário"}
                        required
                        type={"username"}
                    />
                    <Input2 
                        name={"email"}
                        value={form.email}
                        onChange={onChange} 
                        placeholder={"E-mail"}
                        required
                        type={"email"}
                    />
                    <Input3 
                        name={"password"}
                        value={form.password}
                        onChange={onChange} 
                        placeholder={"Senha"}
                        required
                        type={"password"} 
                    />
                    
                    <ContainerBotao>
                        <BotaoCadastrar type={"submit"}> Cadastrar </BotaoCadastrar>
                    </ContainerBotao>
                    </form>
                </ContainerInput>
                
            </Container>
        </div>
    )
}

export default RegisterPage; 
