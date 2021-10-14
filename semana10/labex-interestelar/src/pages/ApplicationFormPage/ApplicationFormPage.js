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
            <input type="text" placeholder="Nome" />
            <select placeholder="Idade" />
            <input type="text" placeholder="Descrição" />
            <input type="text" placeholder="Profissão" />
            <select>Escolha um País</select>
        
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes>Enviar</Botoes>
            </ContainerBotoes>
        
        </div>
        
    );
}

export default ApplicationFormPage;