import React from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerBotoes, Botoes} from "./styled";


const AdminHomePage = () => {
    
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToCreateTripPage = () => {
        history.push("")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }
    
    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    }
    
    return (
        <div>
            <Titulo>Painel Adm</Titulo>
            
            <ContainerBotoes>
                <Botoes onClick={goToHomePage}>Voltar</Botoes>
                <Botoes onClick={goToCreateTripPage}>Criar Viagem</Botoes>
                <Botoes onClick={goToLoginPage}>Logout</Botoes>
            </ContainerBotoes>

            <div>
                <Botoes onClick={goToTripDetailsPage}>Viagem</Botoes>
                <button>Excluir</button>
            </div>
        </div>
        
    );
}

export default AdminHomePage;