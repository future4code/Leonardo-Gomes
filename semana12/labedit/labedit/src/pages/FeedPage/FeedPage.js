import React from "react";
import {useHistory} from "react-router-dom";
import {Container, Foto, ContainerCriar, ContainerUsuario, Post, PostUsuario, ContainerPost, ComentarioBotao, ContainerBotao, BotaoPost, BotaoVoltar } from "./styled";
import like from "../../img/like.png"
import dislike from "../../img/dislike.png"
import comments from "../../img/comments.png"


const FeedPage = () => {

    const history = useHistory()

    const PostPage = () => {
        history.push("/post/:id")
    }; 
    
    const HomePage = () => {
        history.push("/")
    }; 

    return(
        <div>
        
            <Container>
                <ContainerCriar>
                    <img src={like} alt="like" />
                    <Post type="text" placeholder="Postagem"></Post>
                    <BotaoPost onClick={PostPage}> Post </BotaoPost>
                </ContainerCriar>
            </Container>

            <ContainerPost>
                <ContainerUsuario>
                    <img src={like} alt="like"/>
                    <h2>Usuario</h2>
                </ContainerUsuario>

                <PostUsuario type="text" placeholder="Postagem"></PostUsuario>

                <ContainerCriar>
                    <ComentarioBotao> <img src={like} alt="like" /> </ComentarioBotao>
                    <ComentarioBotao> <img src={dislike} alt="dislike" /> </ComentarioBotao>
                    <ComentarioBotao onClick={PostPage}> <img src={comments} alt="like" /> </ComentarioBotao>
                </ContainerCriar>
            
            </ContainerPost>
                
            <ContainerBotao>
                <BotaoVoltar onClick={HomePage}> Voltar </BotaoVoltar>
            </ContainerBotao>
        
        </div>
    )
}

export default FeedPage; 
