import {ContainerBotoes, Botoes, BotaoDetalhe, BotaoDeletar, ContainerCard, BotaoLogout} from "./styled";
import {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { BaseUrl } from "../../constants/constants"
import axios from "axios";
import useProtocolPage from "../../hooks/useProtocolPage";
import logout from "../../img/logout.png"

const AdminHomePage = () => {
    
    useProtocolPage()

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(`${BaseUrl}/trips`)
        .then((res) => {
            setData(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    };

    const goToLoginPage = () => {
        localStorage.removeItem("token")
        history.push("/login")
    };
    
    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    };

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    };
    
    return (
        <div>

            <ContainerBotoes>
                <Botoes onClick={goToHomePage}>Voltar</Botoes>
                <Botoes onClick={goToCreateTripPage}>Criar Viagem</Botoes>
                <BotaoLogout onClick={goToLoginPage}><img src={logout} alt="imagem login" /></BotaoLogout>
            </ContainerBotoes>

            {data.map((trips) => {
                return (
                    <ContainerCard>
                        <BotaoDetalhe onClick={goToTripDetailsPage}>
                            {trips.name}
                        </BotaoDetalhe>
                        <BotaoDeletar>X</BotaoDeletar>
                    </ContainerCard>
                )
            })}
            
        </div>
        
    );
}

export default AdminHomePage;