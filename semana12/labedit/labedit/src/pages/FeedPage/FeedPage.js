import React from "react";
import {useHistory} from "react-router-dom";
import {Container, Foto, ContainerCriar, ContainerUsuario, Post, PostUsuario, ContainerPost, ComentarioBotao, ContainerBotao, BotaoPost, BotaoVoltar } from "./styled";
import like from "../../img/like.png"
import dislike from "../../img/dislike.png"
import comments from "../../img/comments.png"
import {LoginPage, PostPage} from "../../routes/coordinator"
import useProtectedPage from "../../hooks/useProtoctedPage"
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/url"


const FeedPage = (props) => {
    useProtectedPage()
    const posts = useRequestData([], `${BASE_URL}/posts`)
    const history = useHistory()

    const onClickCard = (id) => {
        PostPage(history, id)
    };

    const postCards = posts.map((post) => {
        return(
            <ContainerPost
                key={post.id}
                body={post.body}
                title={post.title}
                createdAt={post.createdAt}
                userId={post.userId}
                voteSum={null}
                commentCount={null}
                userVote={null}
                onClick={onClickCard}
            />
        )
    })

    return(
        <div>
        
            <Container>
                <ContainerCriar>
                    <Foto src={like} alt="like" />
                    <Post>Postagem</Post>
                    <BotaoPost onClick={() => PostPage(history)}> Post </BotaoPost>
                </ContainerCriar>
            </Container>

            {postCards}

            <ContainerPost>
                
                <ContainerUsuario>
                    <img src={like} alt="like"/>
                    <h2>Usuario</h2>
                </ContainerUsuario>

                <PostUsuario type="text" placeholder="Postagem"></PostUsuario>

                <ContainerCriar>
                    <ComentarioBotao> <img src={like} alt="like" /> </ComentarioBotao>
                    <ComentarioBotao> <img src={dislike} alt="dislike" /> </ComentarioBotao>
                    <ComentarioBotao onClick={() => PostPage(history)}> <img src={comments} alt="like" /> </ComentarioBotao>
                </ContainerCriar>
            
            </ContainerPost>


            <ContainerBotao>
                <BotaoVoltar onClick={() => LoginPage(history)}> Voltar </BotaoVoltar>
            </ContainerBotao>
        
        </div>
    )
}

export default FeedPage; 
