import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kanit', sans-serif;
        color: #dddddd;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #101010;
        opacity: 1;
        background-size: 6px 6px;
        background-image: repeating-linear-gradient(45deg, #1f1f1f 0, #1f1f1f 0.6000000000000001px, #070707 0, #070707 50%);
    }
    section {
        width: 100%;
    }
`