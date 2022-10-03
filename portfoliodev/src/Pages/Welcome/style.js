import styled from "styled-components";

export const Section = styled.section`
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    h1 {
        font-family: "Bakbak One";
        font-size: 3vw;
        color: transparent;
        background: linear-gradient(to top right, #ff5f2e, #fcbe32 );
        -webkit-background-clip: text;
        animation: slide-in-blurred-top 2.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both
    }
    @keyframes slide-in-blurred-top {
    0% {
        transform: translateY(-500px) scaleY(2.5) scaleX(0.2);
        transform-origin: 50% 0%;
        filter: blur(40px);
        opacity: 0;
    }
    100% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
    }
    }

    h4 {
        width: auto;
        font-size: 1vw;
        text-align: center;
        font-weight: normal;
        padding: 1.5em 4em;
        background: #1b1b1b;
        border-radius: 0.5em;
        animation: fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const Welcome = styled.header`
    padding-top: 5em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    z-index: 1;
`