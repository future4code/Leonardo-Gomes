import React from "react";
import { useHistory } from "react-router";
import {Titulo, Botoes, ContainerBotoes} from "./styled";
import useRequestData from "../../hooks/useRequestData";

const ListTripPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <Titulo>Lista de Viagens</Titulo>
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes onClick={goToApplicationFormPage}>Inscrever-se</Botoes>
            </ContainerBotoes>

            <div>
                <h1>CARD CRIADO</h1> 
            </div>
        </div>
        
    );
}

export default ListTripPage;