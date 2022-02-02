import React from "react";

const Selecao = () => {
    return (
        <div>
            <select>
            <option selected data-default>SELECIONE</option>
            <option value="MEGA-SENA">MEGA-SENA</option>
            <option value="QUINA">QUINA</option>
            <option value="LOTOFÁCIL">LOTOFÁCIL</option>
            <option value="LOTOMANIA">LOTOMANIA</option>
            <option value="TIMEMANIA">TIMEMANIA</option>
            <option value="DIA DE SORTE">DIA DE SORTE</option>
            </select>
        </div>
    );
}

export default Selecao;