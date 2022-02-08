import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/url";

import { Logotipo, ImagemLogo, ContainerInfos, ContainerSelecao, ButtonSelecao, TitleLoteria, ContainerGame, TitleConcurso, TitleCodigo } from "./styled";
import trevo from "../../img/trevo.png"

const Loteria = () => {
    
    const [sorteios, setSorteios] = useState([])
    const [sorteioId, setSorteioId] = useState("MEGA-SENA")
    const [idConcurso, setIdConcurso]=useState([])

    useEffect(() => {
        getLoterias()
        getIdConcurso()
    }, [])


    // Loterias

    const getLoterias = () => {
        axios.get(`${BASE_URL}/loterias`)
        .then(response => {
            setSorteios(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const selectSorteio = (e) => {
        setSorteioId(e.target.value)
    }


    // Concursos

    const getIdConcurso = () => {
        axios.get(`${BASE_URL}/loterias-concursos`)
        .then(response => {
            setIdConcurso(response.data);
        }).catch(error => {
            console.log(error.response.data);
        })
    }


    return (
        <ContainerInfos>
            <ContainerSelecao>
                <ButtonSelecao value={sorteioId} onChange={selectSorteio}>
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
                <TitleLoteria>{sorteioId.toUpperCase()}</TitleLoteria>
            </Logotipo>
            
            <ContainerGame>
                <TitleConcurso>CONCURSO</TitleConcurso>
                <TitleCodigo>4513 - 02/02/2022</TitleCodigo>
            </ContainerGame>
        </ContainerInfos>
    );
}

export default Loteria;