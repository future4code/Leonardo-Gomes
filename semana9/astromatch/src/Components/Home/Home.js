import React, {useState, useEffect} from "react";
import axios from "axios";
import {ContainerHome, ContainerHeader, LogoImg, Card, ImagemCard, Profile, TextBio, ContainerBio,
ContainerButton, ButtonDislike, ButtonLike, ButtonMatch} from "./styled"
import matches from "../img/fire.png"
import logo from "../img/Lovealarm.png"

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"


const Home = (props) => {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios
        .get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const cardProfile = (
        <ImagemCard>
        <img src={profile.photo} alt={profile.name}/>
        <ContainerBio>
            <Profile>{profile.name}, {profile.age}</Profile>
            <TextBio>{profile.bio}</TextBio>
        </ContainerBio>
        </ImagemCard>
    ) 
    
    return (
        <div>
            <ContainerHome>
                <ContainerHeader>
                    <LogoImg  src={logo} alt="logo love alarm imagem"/>
                    <ButtonMatch onClick={() => props.changePage("Match")}><img src={matches} alt="fogo imagem" /></ButtonMatch>
                </ContainerHeader>
                
                <Card>
                    {cardProfile}
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