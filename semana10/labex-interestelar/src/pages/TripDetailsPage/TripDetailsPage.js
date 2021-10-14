import React from "react";
import { useHistory } from "react-router";
import {Titulo, ContainerBotoes, Botoes} from "./styled"

const TripDetailsPage = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.goBack()
    }
    return (
        <div>
            <div>
                <p>Nome</p>
                <p>Descrição</p>
                <p>Planeta</p>
                <p>Duração</p>
                <p>Dias</p>
                <ContainerBotoes>
                    <Botoes onClick={goBack}>Voltar</Botoes>
                </ContainerBotoes>
            </div>
            
            <div>
                <Titulo>Candididatos Pendentes</Titulo>
                <p>Não há candidatos pendentes</p>
            </div>

            <div>
                <Titulo>Candididatos Aprovados</Titulo>
                <ul>
                    <li> Leo </li>
                </ul>
            </div>

        </div>
    );
}

export default TripDetailsPage;