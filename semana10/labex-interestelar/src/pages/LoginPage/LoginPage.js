import { useEffect } from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerLogin, ContainerBotoes, ImageLogin, Botoes} from "./styled"
import axios from "axios";
import {BaseUrl} from "../../constants/constants"
import useForm from "../../hooks/useForm";
import login from "../../img/login.png"

const LoginPage = () => {

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token !== null) {
            history.push("/admin/trips/list")
        }
    }, []);

    const {form, onChange} = useForm({email: "", password: ""})
    

    const goPageAdmin = (event) => {
        event.preventDefault()
        console.log(form)

        axios
            .post(`${BaseUrl}/login`, form)
            .then((res) => {
                console.log("Deu certo:", res.data)
                history.push("/admin/trips/list");
                localStorage.setItem("token", res.data.token)
            })
            .catch((err) => {
                alert(err.response.data.message)
                console.log("Deu erro:", err.response.data.message)
            })
    }
    
    
    const history = useHistory()

    const goHomePage = () => {
        history.push("/")
    }

    return (
        <div>
            <Titulo><ImageLogin src={login} alt="imagem login" /></Titulo>
            
            <form onSubmit={goPageAdmin}>
                <ContainerLogin>
                    <input
                    name="email"
                    type="email" 
                    placeholder="E-mail" 
                    value={form.email} 
                    onChange={onChange}
                    required
                    title={"Digite seu e-mail"}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                    />
                    
                    <input
                    name="password"
                    type="password" 
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange} 
                    required
                    pattern={"^.{6,}"}
                    title={"Sua senha deve ter no mínimo 6 caracteres"}
                    />

                </ContainerLogin>
            
            
            <ContainerBotoes>
                <Botoes onClick={goHomePage}>Voltar</Botoes>
                <Botoes>Login</Botoes>
            </ContainerBotoes>
            
            </form>
        </div>
        
    );
}

export default LoginPage;