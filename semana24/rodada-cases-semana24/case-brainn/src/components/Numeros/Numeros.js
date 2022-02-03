import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {LOTERIAS_URL, CONCURSOS_URL, LOTERIAS_CONCURSOS_URL,} from "../../constants/url";

import { ContainerSorteio, Sorteio, ContainerTexto, Descricao, Bola } from "./styled";

const Numeros = () => {
    
    
    
    
    return (
        <div>
            <ContainerSorteio>
                <Sorteio>
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
            
        </div>
    );
}

export default Numeros;