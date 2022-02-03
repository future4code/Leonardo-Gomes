import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {LOTERIAS_URL, CONCURSOS_URL, LOTERIAS_CONCURSOS_URL,} from "../../constants/url";

import { Logotipo, ImagemLogo, ContainerInfos, ContainerSelecao, ButtonSelecao, TitleLoteria, ContainerGame, TitleConcurso, TitleCodigo } from "./styled";
import trevo from "../../img/trevo.png"

const Loteria = () => {
    
    
    
    
    
    return (
        <ContainerInfos>
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

            <Logotipo>
                <ImagemLogo src={trevo} alt="logo loteria" />
                <TitleLoteria>MEGA-SENA</TitleLoteria>
            </Logotipo>
            
            <ContainerGame>
                <TitleConcurso>CONCURSO</TitleConcurso>
                <TitleCodigo>4513 - 02/02/2022</TitleCodigo>
            </ContainerGame>
        </ContainerInfos>
    );
}

export default Loteria;