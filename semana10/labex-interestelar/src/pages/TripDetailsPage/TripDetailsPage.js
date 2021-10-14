import {useEffect} from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import {Titulo, ContainerBotoes, Botoes} from "./styled"
import {BaseUrl} from "../../constants/constants"
import axios from "axios";


const TripDetailsPage = () => {
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`${BaseUrl}/trip/:id`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    
    const history = useHistory();
    
    const goBack = () => {
        history.goBack()
    }
    return (
        <div>
            <div>
                <p>Nome</p>
                <p>Descrição</p>
                <p>Planeta</p>
                <p>Duração</p>
                <p>Dias</p>
                <ContainerBotoes>
                    <Botoes onClick={goBack}>Voltar</Botoes>
                </ContainerBotoes>
            </div>
            
            <div>
                <Titulo>Candididatos Pendentes</Titulo>
                <p>Não há candidatos pendentes</p>
            </div>

            <div>
                <Titulo>Candididatos Aprovados</Titulo>
                <ul>
                    <li> Leo </li>
                </ul>
            </div>

        </div>
    );
}

export default TripDetailsPage;