import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid black;
    width: 550px;
    height: 500px;
    margin: auto;

`

const Card = styled.div`
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

`

const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`


const Matches = () => {
    return (
        <div>
            <Container>
                <Card>
                    <img src="https://picsum.photos/500/500?=1" />
                    <h3>Nome</h3>
                    <p>Descrição</p>
                </Card>
            </Container>

            <ContainerBotoes>   
                <button>Ir para matches</button>
                <button>Limpar matches</button>
            </ContainerBotoes> 
        </div>
    );
}

export default Matches;