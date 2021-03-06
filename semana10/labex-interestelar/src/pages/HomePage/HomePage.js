import React from "react";
import { useHistory } from "react-router";
import {Titulo, Botoes, Container, ContainerLista, ContainerLogin, LoginBotao} from "./styled";
import loginfoto from "../../img/spacehome.png"


const HomePage = () => {
    
    const history = useHistory()

    const goToListTripsPage = () => {
        history.push("/trips/list")
    }
    
    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <Container>
                <ContainerLista>
                    <Titulo>Experiencie à viagem para o futuro!</Titulo>
                    <Botoes onClick={goToListTripsPage}>Ver Viagens</Botoes>
                </ContainerLista>
                
                <ContainerLogin>
                    <img src={loginfoto} alt="foto para login" />
                    <LoginBotao onClick={goToLoginPage}>Login</LoginBotao>
                </ContainerLogin>
            </Container>
            
        </div>
        
    );
}

export default HomePage;