import {useState,useEffect} from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import {Titulo, ContainerDetalhes, ContainerCandidatos, ContainerBotoes, Botoes} from "./styled"
import {BaseUrl} from "../../constants/constants"
import axios from "axios";

const TripDetailsPage = () => {
    const params = useParams();
    const token = localStorage.getItem("token")
    const [tripDetails, setTripDetails] = useState([])
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const headers = {
            headers: {
                auth: token
            }
        }
    
        axios
        .post(`${BaseUrl}/trip/${params.id}`, headers)
        .then((res) => {
            console.log(res.data.trips)
            setTripDetails(res.data.trip)
            setCandidates(res.data.trip.candidates)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [params.id, setTripDetails, setCandidates])
    

    const history = useHistory();
    
    const goBack = () => {
        history.goBack()
    }
    
    const details = 
        <div>
            <p><b>Nome:</b> {tripDetails.name}</p>
            <p><b>Descrição:</b> {tripDetails.description}</p>
            <p><b>Planeta:</b> {tripDetails.planet}</p>
            <p><b>Data:</b> {tripDetails.date}</p>
            <p><b>Duração:</b> {tripDetails.durationInDays}</p>
        </div>
    
    const pendignCandidates = candidates.map((candidate) => {
        return (
            <div key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>País:</b> {candidate.country}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
            </div>
        )
    })

    return (
        
        <div>

            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
            </ContainerBotoes>

            <Titulo> Informações da Viagem </Titulo>
                <ContainerDetalhes>
                    {details}
                </ContainerDetalhes>
            
                
                    {pendignCandidates}
                    
                    <ContainerBotoes>
                        <Botoes>Reprovar</Botoes>
                        <Botoes>Aprovar</Botoes>
                    </ContainerBotoes>
                

                <div>
                    <Titulo>Candididatos Pendentes</Titulo>
                    <p>Não há candidatos pendentes</p>
                </div>

                <div>
                    <Titulo>Candididatos Aprovados</Titulo>
                </div>

        </div>
        
    );
}

export default TripDetailsPage;