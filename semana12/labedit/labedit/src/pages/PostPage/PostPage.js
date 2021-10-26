import React from "react";
import {useHistory} from "react-router-dom";
import {Container, Foto, ContainerCriar, ContainerUsuario, Post, PostUsuario, ContainerPost, Comentarios, ContainerBotao, BotaoPost, BotaoVoltar } from "./styled";


const PostPage = () => {

    const history = useHistory()

    const LoginPage = () => {
        history.push("/")
    };


    return(
        <div>

            <ContainerPost>
                <ContainerUsuario>
                    <Foto>Foto</Foto>
                    <Comentarios>Usuario</Comentarios>
                </ContainerUsuario>

                <PostUsuario type="text" placeholder="Postagem"></PostUsuario>

                <ContainerCriar>
                    <Foto> Likes </Foto>
                    <Comentarios> Comentarios </Comentarios>
                </ContainerCriar>
            
            </ContainerPost>
                
            <ContainerBotao>
                <BotaoVoltar onClick={LoginPage}> Voltar </BotaoVoltar>
            </ContainerBotao>

        </div>
    )
}

export default PostPage; 