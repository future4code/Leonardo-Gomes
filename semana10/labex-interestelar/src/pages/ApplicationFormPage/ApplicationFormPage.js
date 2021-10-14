import React from "react";
import { useHistory } from "react-router";
import {ContainerViagem, ContainerEscolhas, ContainerInfos, Titulo, Botoes, ContainerBotoes} from "./styled"

const ApplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    
    return (
        <ContainerViagem>
            
            <Titulo>Inscreva-se para uma Viagem</Titulo>
            
            <ContainerEscolhas>
                <ContainerInfos>
                    <select><option> Escolha uma Viagem </option></select>
                    <input type="text" placeholder="Nome" />
                    <select> <option> Idade </option> </select>
                    <input type="text" placeholder="Descrição" />
                    <input type="text" placeholder="Profissão" />
                    <select><option> Escolha um País </option></select>
                </ContainerInfos>
            </ContainerEscolhas>

            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes>Enviar</Botoes>
            </ContainerBotoes>
        
        </ContainerViagem>
        
    );
}

export default ApplicationFormPage;