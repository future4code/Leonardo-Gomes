import React from "react";
import {useHistory} from "react-router-dom";
import {Container, Foto, ContainerCriar, ContainerUsuario, Post, PostUsuario, ContainerPost, Comentarios, ContainerBotao, BotaoPost, BotaoVoltar } from "./styled";

const FeedPage = () => {

    const history = useHistory()

    const PostPage = () => {
        history.push("/post")
    }; 
    
    const HomePage = () => {
        history.push("/")
    }; 

    return(
        <div>
        
            <Container>
                <ContainerCriar>
                    <Foto>Usuário</Foto>
                    <Post type="text" placeholder="Postagem"></Post>
                    <BotaoPost onClick={PostPage}> Post </BotaoPost>
                </ContainerCriar>
            </Container>

            <ContainerPost>
                <ContainerUsuario>
                    <h2>Foto</h2>
                    <h2>Usuario</h2>
                </ContainerUsuario>

                <PostUsuario type="text" placeholder="Postagem"></PostUsuario>

                <ContainerCriar>
                    <Foto> Likes </Foto>
                    <Comentarios onClick={PostPage}> Comentarios </Comentarios>
                </ContainerCriar>
            
            </ContainerPost>
                
            <ContainerBotao>
                <BotaoVoltar onClick={HomePage}> Voltar </BotaoVoltar>
            </ContainerBotao>
        
        </div>
    )
}

export default FeedPage; 
