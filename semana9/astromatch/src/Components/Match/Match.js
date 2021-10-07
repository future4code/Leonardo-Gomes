// import React, {useEffect} from "react";
// import axios from "axios";
import {Container, Card, LogoImg, ContainerHeader, ButtonBack, CardContainer, ButtonClean} from "./styled"
import voltar from "../img/back.png"
import logo from "../img/Lovealarm.png"


const Match = (props) => {
    return (
        <div>
            <Container>
                <ContainerHeader>
                    <ButtonBack onClick={() => props.changePage("Home")}><img src={voltar} alt="seta voltar imagem" /></ButtonBack>
                    <LogoImg  src={logo} alt="logo love alarm imagem"/>
                </ContainerHeader>
                
                <CardContainer>
                    <Card>
                        <img src="https://picsum.photos/100/100?=1" />
                        <h3>Nome</h3>
                    </Card>
                    <Card>
                        <img src="https://picsum.photos/100/100?=1" />
                        <h3>Nome</h3>
                    </Card>
                    <Card>
                        <img src="https://picsum.photos/100/100?=1" />
                        <h3>Nome</h3>
                    </Card>
                </CardContainer>

                <ButtonClean>Limpar matches</ButtonClean>
            </Container>
        </div>
    );
}

export default Match; 