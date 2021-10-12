import React, {useState, useEffect} from "react";
import axios from "axios";
import {Container, Card, LogoImg, ContainerHeader, ButtonBack, CardContainer, ButtonClean} from "./styled"
import voltar from "../img/back.png"
import logo from "../img/Lovealarm.png"
import {BaseUrl} from "../../constants"


const Match = (props) => {
    const [matchPerson, setMatchPerson] = useState([])
    
    const getMatches = () => {
        axios
        .get(`${BaseUrl}/matches`)
        .then((res) => {
            setMatchPerson(res.data.matches);
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getMatches()
    }, []);


    const matchList = matchPerson.map((match)=> {
        return(
            <Card>
                <img src={match.photo} alt={match.name}/>
                <p>{match.name}</p>
            </Card>
        )
    })


    const putClearMatches = () => {
        axios
        .put(`${BaseUrl}/clear`)
        .then((res) => {
            setMatchPerson([])
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    return (
        <div>
            <Container>
                <ContainerHeader>
                    <ButtonBack onClick={() => props.changePage("Home")}><img src={voltar} alt="seta voltar imagem" /></ButtonBack>
                    <LogoImg  src={logo} alt="logo love alarm imagem"/>
                    <ButtonClean onClick={putClearMatches}>Limpar matches</ButtonClean>

                </ContainerHeader>
                    {matchList}
                <CardContainer>

                </CardContainer>
                </Container>            
        </div>
    );
}

export default Match; 