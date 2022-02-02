import React from "react";
import { ContainerSelecao, ButtonSelecao } from "./styled";

const Selecao = () => {
    return (
        <ContainerSelecao>
            <ButtonSelecao>
                <option selected data-default>SELECIONE</option>
                <option value="MEGA-SENA">MEGA-SENA</option>
                <option value="QUINA">QUINA</option>
                <option value="LOTOFÁCIL">LOTOFÁCIL</option>
                <option value="LOTOMANIA">LOTOMANIA</option>
                <option value="TIMEMANIA">TIMEMANIA</option>
                <option value="DIA DE SORTE">DIA DE SORTE</option>
            </ButtonSelecao>
        </ContainerSelecao>
    );
}

export default Selecao;