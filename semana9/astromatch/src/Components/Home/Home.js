import React, {useState, useEffect} from "react";
import axios from "axios";
import {ContainerHome, ContainerHeader, LogoImg, Card, ImagemCard, Profile, TextBio, ContainerBio,
ContainerButton, ButtonDislike, ButtonLike, ButtonMatch} from "./styled"
import matches from "../img/fire.png"
import logo from "../img/Lovealarm.png"
import {BaseUrl} from "../../constants"

const Home = (props) => {
    const [profile, setProfile] = useState({})
    const [chooseProfile, setChooseProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios
        .get(`${BaseUrl}/person`)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err)
        })
    }


    const likeMatch = (choice) => {
        const body = {
            id: profile.id,
            choice: choice
        };
        
        axios
        .post(`${BaseUrl}/choose-person`, body)
        .then((res) => {
            getProfileToChoose();
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
    };



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
                        <ButtonDislike onClick={() => likeMatch(false)}>✖</ButtonDislike>
                        <ButtonLike onClick={() => likeMatch(true)}>❤</ButtonLike>
                    </ContainerButton>
                </Card>
            </ContainerHome>
        </div>
    );
}

export default Home; 