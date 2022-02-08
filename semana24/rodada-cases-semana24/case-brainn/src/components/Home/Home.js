import React from "react";
import Loteria from "../Loteria/Loteria";
import Numeros from "../Numeros/Numeros";
import { ContainerBackground } from "./styled";

const Home = () => {
    return (
        <ContainerBackground>
            <div>
                <Loteria/>
            </div>

            <div>
                <Numeros/>
            </div>
        </ContainerBackground>
    );
}

export default Home;