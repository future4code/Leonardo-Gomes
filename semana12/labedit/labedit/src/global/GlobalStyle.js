import {createGlobalStyle} from "styled-components";
import background from "../img/background.jpg";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;    
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body{
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: cover;
    }
` 