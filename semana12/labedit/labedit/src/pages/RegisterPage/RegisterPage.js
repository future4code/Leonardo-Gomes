import React from "react";
import {useHistory} from "react-router-dom";
import { Logo, Container, Titulo, ContainerInput,  BotaoCadastrar, Input1, Input2, Input3} from "./styled";
import { LoginPage } from "../../routes/coordinator";
import useForm from "../../hooks/useForm"
import {BASE_URL} from "../../constants/url"
import axios from "axios";


const RegisterPage = () => {
    const history = useHistory()

    const [form, onChange, clear] = useForm({username: "", email: "", password: ""});


    const onSubmitForm = () => {

    }

    return(
        <div>
            <Logo>VERBUM</Logo>
            <Container>
                <Titulo>Cadastre - se</Titulo>
                
                <ContainerInput>
                    <form onSubmit={onSubmitForm}>
                    <Input1 
                        name={"username"}
                        value={form.username}
                        onChange={onChange} 
                        label={"Nome de Usuário"}
                        required
                        type={"username"}
                    />
                    <Input2 
                        name={"email"}
                        value={form.email}
                        onChange={onChange} 
                        label={"E-mail"}
                        required
                        type={"email"}
                    />
                    <Input3 
                        name={"password"}
                        value={form.password}
                        onChange={onChange} 
                        placeholder="Senha"
                        required
                        type={"password"} 
                    />
                    
                    <BotaoCadastrar onClick={() => LoginPage(history)}> Cadastrar </BotaoCadastrar>
                    </form>
                </ContainerInput>
                
            </Container>
        </div>
    )
}

export default RegisterPage; 
