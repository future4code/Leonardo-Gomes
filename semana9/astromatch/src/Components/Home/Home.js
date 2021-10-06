import React from "react";
import {Container, Card, ContainerBotoes} from "./styled";
import styled from "styled-components";

const Home = (props) => {
    return (
        <div>
            <Container>
                <Card>
                    <img src="https://picsum.photos/400/400?=1" />
                    <h3>Nome</h3>
                    <p>Descrição</p>
                    <ContainerBotoes>
                        <button>✖️</button>
                        <button>❤️</button>
                    </ContainerBotoes>
                </Card>
            </Container>

            <ContainerBotoes>   
                <button onClick={() => props.changePage("Matches")}>Ir para matches</button>
                <button>Limpar matches</button>
            </ContainerBotoes> 
        </div>
    );
}

export default Home;