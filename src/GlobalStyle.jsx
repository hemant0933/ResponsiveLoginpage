import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    a{
        text-decoration: none;
        color: #FFA33C;
        font-size: 15px;
        font-family: 400;
    }

    a:hover{
        color: #ED7D31;
    }

`