import React from "react";
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    width: 550px;
    height: 600px;
    margin: auto;

`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;

`

const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`


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