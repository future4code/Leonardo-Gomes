import React from "react";
import { useHistory } from "react-router";
import {Titulo, Botoes, ContainerBotoes} from "./styled"

const ApplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    
    return (
        <div>
            <Titulo>Inscreva-se para uma Viagem</Titulo>
            
            <select>Escolha uma Viagem</select>
            <input>Nome</input>
            <select>Idade</select>
            <input>Texto de Candidatura</input>
            <input>Profissão</input>
            <select>Escolha um País</select>
        
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes>Enviar</Botoes>
            </ContainerBotoes>
        
        </div>
        
    );
}

export default ApplicationFormPage;