import React from "react";
import axios from "axios";
import styled from "styled-components";
import GlobalStyle from "./global";
import Pokemon from "./img/pokedex.png"

/// Background

const Container = styled.div `
  background-image: url(${Pokemon});
  width: 800px;
  height: 534px;
  margin-top: 25px;;
  margin-left: 280px;
`
const Titulo = styled.h1`
  font-family: MV Boli;
  margin-left: 250px;
`


/// Card de Seleção

const Selecao = styled.select`
    padding: 2px 15px;
    text-decoration: none;
    font-family: cursive;
    text-transform: uppercase;
    font-weight: 600;
    background-color: #38b855;
    border-radius: 50px;
    cursor: pointer;

    position: fixed;
    margin-left: 485px;
    margin-top: 57px;
`
const PokeFoto = styled.img`
    width: 160px;
    background: none;

    margin-left: 155px;
    margin-top: 5px;
`

/// Distância Container

const ContainerInfos = styled.div`
    display: grid;
    background: none;
    margin-top: 140px;
    
`


export default class Pokedex extends React.Component {
  
  state = {
    pokemons: [],
    photo: ""
  }

  componentDidMount() {
    this.getPokemons();
  }
  
  getPokemons = async() => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
        this.setState({pokemons: response.data.results})
  }
  
  getPokePhoto = async(event) => {
    const url = event.target.value
    const response = await axios.get(`${url}`);
    this.setState({photo: response.data.sprites.front_default})
  }

  render() {
    
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      )
    })

    
    return (
          <div>
            <GlobalStyle />
            <Container>
              <Titulo>Escolha seu Pokémon</Titulo>
              
              <ContainerInfos>
                
                {this.state.photo &&
                  <PokeFoto src={this.state.photo} alt="foto pokémon"></PokeFoto>
                }

                <Selecao onChange={this.getPokePhoto}>
                  <option>Pokedex</option>
                  {pokeList}
                </Selecao>
              
              </ContainerInfos>

            </Container>    
          </div>
        
      );
  }
}
