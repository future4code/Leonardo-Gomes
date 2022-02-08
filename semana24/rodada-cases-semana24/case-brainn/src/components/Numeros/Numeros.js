import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../constants/url";

import { CoreContainer, ContainerSorteio, Sorteio, ContainerTexto, Descricao, Bola } from "./styled";

const Numeros = () => {
    
    const [sorteioConcurso, setSorteioConcurso]=useState([])

    useEffect(() => {
        getConcurso()
    }, [])

    const getConcurso = () => {
        axios.get(`${BASE_URL}/concursos${sorteioConcurso}`)
        .then(response => {
            setSorteioConcurso(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const selectConcurso = (e) => {
        setSorteioConcurso(e.target.value)
    }
    
    return (
        <CoreContainer>
            <ContainerSorteio>
                <Sorteio value={sorteioConcurso} onChange={selectConcurso}>
                    <Bola>06</Bola>
                    <Bola>09</Bola>
                    <Bola>28</Bola>
                    <Bola>33</Bola>
                    <Bola>37</Bola>
                    <Bola>40</Bola>
                </Sorteio>
            </ContainerSorteio>

            <ContainerTexto>
                <Descricao>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Descricao>
            </ContainerTexto>
            
        </CoreContainer>
    );
}

export default Numeros;