import {useState, useEffect} from "react";
import { useHistory } from "react-router";
import {ContainerViagem, ContainerEscolhas, ContainerInfos, Titulo, Botoes, ContainerBotoes} from "./styled"
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BaseUrl } from "../../constants/constants";


const ApplicationFormPage = () => {
    
    const {form, onChange, cleanFields} = useForm({
        trip: null, 
        name: "", 
        age: "", 
        applicationText: "", 
        profession: "", 
        country: ""
    });

    const getTrips = () => {
        axios.get(`${BaseUrl}/trips`)
        .then((res) => {
            console.log(res.data.trips)
        })
    }

    useEffect(() => {
        getTrips()
    }, [])


    const goSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        cleanFields();
    

        axios
        .post(`${BaseUrl}/trips/:id/apply`, form)
        .then((res) => {
            console.log("Deu certo:", res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log("Deu erro:", err.response.data.message)
        })
    }

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    
    return (
        <form goSubmit>
            <ContainerViagem>
                
                <Titulo>Inscreva-se para uma Viagem</Titulo>
                
                <ContainerEscolhas>
                    <form onClick={goSubmit}>
                    <ContainerInfos>
            
                        <select name= "trip" type="text" placeholder="Escolha sua Viagem" value={form.trip}
                            required
                            title="Escolha sua Viagem"
                            onChange={onChange}
                        />
                        
                        <input name= "name" type="text" placeholder="Nome" title="Digite seu nome"
                        required
                        onChange={onChange}
                        pattern={"[a-z]"}
                        value={form.name} 
                        />
                        
                        <select name= "age" type="number" placeholder="Idade" title="Selecione sua idade"
                            required
                            value={form.age}
                            onChange={onChange}
                        />
                        
                        <input name= "applicationText" type="text" placeholder="Descrição"  title="Explique porque você é um bom candidato"
                        required
                        onChange={onChange}
                        pattern={"[a-z]"}
                        value={form.applicationText} 
                        />
                        
                        <input name= "profession" type="text" placeholder="Profissão" title="Digite sua profissão"
                        required
                        onChange={onChange}
                        pattern={"[a-z]"}
                        value={form.profession} 
                        />
                        
                        <select name= "country" type="text" placeholder="País"
                            required
                            title="Selecione seu país"
                            value={form.country}
                            onChange={onChange}
                        />
                    
                    </ContainerInfos>
                    </form>
                </ContainerEscolhas>

                <ContainerBotoes>
                    <Botoes onClick={goBack}>Voltar</Botoes>
                    <Botoes>Enviar</Botoes>
                </ContainerBotoes>
            
            </ContainerViagem>
        </form>
    );
}

export default ApplicationFormPage;