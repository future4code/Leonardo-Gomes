import React from "react";
import Loteria from "../Loteria/Loteria";
import Numeros from "../Numeros/Numeros";
import Selecao from "../Selecao/Selecao";
import { ContainerBackground } from "./styled";

const Home = () => {
    return (
        <ContainerBackground>
            <div>
                <Selecao/>
                <Loteria/>
            </div>

            <div>
                <Numeros/>
            </div>
        </ContainerBackground>
    );
}

export default Home;