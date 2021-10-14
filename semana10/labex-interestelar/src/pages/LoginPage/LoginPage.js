import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerLogin, ContainerBotoes, Botoes} from "./styled"
import axios from "axios";
import {BaseUrl} from "../../constants/constants"

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    
    const onSubmitLogin = (event) => {
        console.log(email, password);
        const body = {
            email: email,
            password: password
        };

        axios
            .post(`${BaseUrl}/login` , body)
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem("token", res.data.token)
                history.push("/");
            })
            .catch((err) => {
                console.log(err.res)
            })
    }
    
    
    
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
            
            <ContainerLogin>
                <input
                type="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={onChangeEmail}
                />
                
                <input
                type="password" 
                placeholder="Senha"
                value={password}
                onChange={onChangePassword} 
                />
            </ContainerLogin>
            
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes onClick={goAdminHomePage} onSubmit={onSubmitLogin}>Entrar</Botoes>
            </ContainerBotoes>
        </div>
        
    );
}

export default LoginPage;