import React from "react";
import { Logotipo, ImagemLogo, ContainerInfos, TitleLoteria, ContainerGame, TitleConcurso, TitleCodigo } from "./styled";
import trevo from "../../img/trevo.png"

const Loteria = () => {
    return (
        <ContainerInfos>

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