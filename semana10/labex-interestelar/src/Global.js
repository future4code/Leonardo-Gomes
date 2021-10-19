import {createGlobalStyle} from "styled-components";
import background from "./img/estrelas.gif"


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
        font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;

    }

    body{
        background-image: url(${background});
    }
` 