import React from "react";
import {ContainerError, ErrorImage, Titulo} from "./styled"
import error from "../../img/error.png"

const ErrorPage = () => {
    return (
        <ContainerError>
            <ErrorImage src={error} alt="imagem de erro"/>
            <Titulo>Erro 404 - Página Não Encontrada</Titulo>
        </ContainerError>
    )
}

export default ErrorPage;