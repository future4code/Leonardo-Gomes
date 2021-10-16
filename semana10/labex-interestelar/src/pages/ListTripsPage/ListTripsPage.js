import {useState, useEffect} from "react";
import { useHistory } from "react-router";
import {BaseUrl} from "../../constants/constants"
import axios from "axios";
import {Titulo, Botoes, ContainerBotoes, ContainerTrips, ContainerInfos} from "./styled";

const ListTripPage = () => {
    const [data, setData] = useState([])
    
    const getTrips = () => {
        axios
        .get(`${BaseUrl}/trips`)
        .then((res) => {
            setData(res.data.trips);
            console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getTrips()
    
    }, [])


    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
    const goToApplicationFormPage = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <Titulo>Lista de Viagens</Titulo>
            
            <ContainerBotoes>
                <Botoes onClick={goBack}>Voltar</Botoes>
                <Botoes onClick={goToApplicationFormPage}>Inscrever-se</Botoes>
            </ContainerBotoes>

            {data.map((trip) => {
                return (
                <ContainerTrips key={trip.id}>
                    <ContainerInfos>
                        <p><b>Nome:</b> {trip.name}</p>
                        <p><b>Descrição:</b> {trip.description}</p>
                        <p><b>Planeta:</b> {trip.planet}</p>
                        <p><b>Duração:</b> {trip.durationInDays}</p>
                        <p><b>Data:</b> {trip.date}</p>
                    </ContainerInfos>
                </ContainerTrips>
                )
            })}

        </div>
        
    );
}

export default ListTripPage;