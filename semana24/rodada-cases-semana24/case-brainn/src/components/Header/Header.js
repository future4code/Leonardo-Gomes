import React from "react";
import Loteria from "../Loteria/Loteria";
import Numeros from "../Numeros/Numeros";
import Selecao from "../Selecao/Selecao";
import { ContainerBackground } from "./styled";

const Header = () => {
    return (
        <ContainerBackground>
            <Selecao/>
            <Loteria/>
            <Numeros/>
        </ContainerBackground>
    );
}

export default Header;