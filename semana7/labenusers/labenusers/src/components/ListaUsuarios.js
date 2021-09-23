import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerBloco = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 550px;
    width: 70%;
    margin: 0 auto;
    border-radius: 5%;
    align-items: center;
`

const CardUsuario = styled.div`
    display: flex;
    padding: 10px;
    margin: 10px;
    justify-content: space-between;
`

const BotaoPaginas = styled.button`
    padding: 2px 15px;
    text-decoration: none;
    font-family: inherit;
    font-weight: 600;
    background-color: #b76a75;
    border-radius: 50px;
    color: white;
    transition: all .2s ease;
    margin-top: 40px;
`

export default class ListaUsuarios extends React.Component {
    
    state = {
        usuarios: [],
    }

    componentDidMount() {
        this.pegarUsuarios()
    }


    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "leonardo-gomes-maryam"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    
    }
    
    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "leonardo-gomes-maryam"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro tente novamente")
        })
    }
    
    render() {

        const listaUsuarios = this.state.usuarios.map((user) => {
            return( 
            <CardUsuario key={user.id}>
                {user.name} 
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuario>
            )
        })

        return (
        <div>
            <ContainerBloco>
                
                <BotaoPaginas onClick={this.props.irParaCadastro}>Ir para Cadastro</BotaoPaginas>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}

            </ContainerBloco>
        </div>
        );
    }
}