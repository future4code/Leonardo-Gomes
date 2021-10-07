import React, {useEffect} from "react";
import {ContainerHome, ContainerHeader, LogoImg, Card, ImagemCard, Profile, TextBio, ContainerBio,
ContainerButton, ButtonDislike, ButtonLike, ButtonMatch} from "./styled"
import matches from "../img/fire.png"
import logo from "../img/Lovealarm.png"


const Home = (props) => {
    
    
    return (
        <div>
            <ContainerHome>
                <ContainerHeader>
                    <LogoImg  src={logo} alt="logo love alarm imagem"/>
                    <ButtonMatch onClick={() => props.changePage("Match")}><img src={matches} alt="fogo imagem" /></ButtonMatch>
                </ContainerHeader>
                
                <Card>
                    <ImagemCard>
                    <img src="https://picsum.photos/430/430?=1" />

                    <ContainerBio>
                        <Profile>Nome, idade</Profile>
                        <TextBio>Descrição</TextBio>
                    </ContainerBio>
                    </ImagemCard>

                    <ContainerButton>
                        <ButtonDislike>✖</ButtonDislike>
                        <ButtonLike>❤</ButtonLike>
                    </ContainerButton>
                </Card>
            </ContainerHome>
        </div>
    );
}

export default Home; 