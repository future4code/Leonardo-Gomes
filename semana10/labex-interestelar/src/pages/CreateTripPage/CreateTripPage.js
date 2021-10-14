import React from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerBotoes, Botoes} from "./styled"

const CreateTripPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div>
            <Titulo>Criar Viagem</Titulo>
            <input>Nome</input>
            <select>Escolha um Planeta</select>
            <select>Data</select>
            <input>Descrição</input>
            <select>Dias</select>

            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes>Criar</Botoes>
            </ContainerBotoes>
        </div>
        
    );
}

export default CreateTripPage;