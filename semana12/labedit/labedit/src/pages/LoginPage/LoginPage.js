import React, {useEffect} from "react";
import { Logo, Container, Titulo, ContainerInput, ContainerBotao, BotaoEntrar, BotaoCadastrar, Input1, Input2 } from "./styled";
import { useHistory } from "react-router-dom";
import {RegisterPage, FeedPage} from "../../routes/coordinator"
import useForm from "../../hooks/useForm";
import {BASE_URL} from "../../constants/url"
import axios from "axios";


const LoginPage = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({email:"" , password:""});


    const onSubmitForm = (event) => {
        event.preventDefault()
        console.log(form)
    }

    return(
        <div>
            <Logo>VERBUM</Logo>
            <Container>
                <Titulo>Solte o Verbo e Poste</Titulo>
                
                <ContainerInput>
                    <form onSubmit={onSubmitForm}>
                        <Input1 
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            required
                            type={"email"}
                        />

                        <Input2 
                            name={"password"}
                            value={form.password}
                            onChange={onChange} 
                            placeholder="Senha"
                            required
                            type={"password"}
                        />

                        <BotaoEntrar type={"submit"} onClick={() => FeedPage(history)}> Entrar </BotaoEntrar>
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