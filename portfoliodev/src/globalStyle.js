import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "IBM Plex Mono",monospace;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background-color: #0a0a0a;
    }
    section {
        width: 100%;
    }
`