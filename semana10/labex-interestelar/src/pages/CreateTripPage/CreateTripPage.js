import {useEffect} from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BaseUrl } from "../../constants/constants";
import {Titulo, ContainerCriar, ContainerEscolhas, ContainerInfos, ContainerBotoes, Botoes} from "./styled"


const CreateTripPage = () => {
    
    const {form, onChange, cleanFields} = useForm({ 
        planet: "",
        name: "", 
        date: "", 
        description: "", 
        durationInDays: ""
    });

    const createTrip = (event) => {
        event.preventDefault()
        console.log(form)

        const headers = {
            headers:{
                auth: localStorage.getItem("token")
            }
        }
        axios
        .post(`${BaseUrl}/trips`, form, headers)
        .then((res) => {
            console.log(res.data.trips)
            alert("Sua viagem foi criada com sucesso!")
            cleanFields()
        })
        .catch((err) => {
            alert("Erro no processo de criar viagem!", err.response.data.message)
        })
    }
    
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    
    return (
        <form onSubmit={createTrip}>
            <ContainerCriar>
                
                <Titulo>Criar Viagem</Titulo>
                
                <ContainerEscolhas>
                    
                    <ContainerInfos>
                            <input name={"name"} type="text" placeholder="Nome" value={form.name} 
                                onChange={onChange}
                                required
                                title={"Digite seu nome"}
                                

                            />
                            
                            <select name={"planet"} defaultValue={""} onChange={onChange}>
                                <option value={""} disabled>Escolha um Planeta</option>
                                <option value={"Mercúrio"}>Mercúrio</option>
                                <option value={"Vênus"}>Vênus</option>
                                <option value={"Terra"}>Terra</option>
                                <option value={"Marte"}>Marte</option>
                                <option value={"Júpiter"}>Júpiter</option>
                                <option value={"Saturno"}>Saturno</option>
                                <option value={"Urano"}>Urano</option>
                                <option value={"Netuno"}>Netuno</option>
                                <option value={"Plutão"}>Plutão</option>
                            </select>
                            
                            <input input name={"date"} type="date" placeholder="Data" 
                                value={form.date} 
                                onChange={onChange}
                                required
                                title={"Selecione uma data"}
                            />
                            
                            <input name={"description"} type="text" placeholder="Descrição" 
                                value={form.description} 
                                onChange={onChange}
                                required
                                title={"Descrição da viagem - No mínimo 30 caracteres"}
                            />
                            
                            <input name={"durationInDays"} type="number" placeholder="Duração de Dias" 
                                value={form.durationInDays} 
                                onChange={onChange}
                                required
                                title={"Selecione os dias para a viagem - No mínimo 50 dias"}
                            />

                            <ContainerBotoes>
                                <Botoes onClick={goBack}>Voltar</Botoes>
                                <Botoes>Criar</Botoes>
                            </ContainerBotoes>
                        </ContainerInfos>
                    
                </ContainerEscolhas>
            
            </ContainerCriar>
        </form>
        
    );
}

export default CreateTripPage;