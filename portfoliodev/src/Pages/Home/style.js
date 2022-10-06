import styled from "styled-components";

export const About = styled.div`

    h1 {
        padding-bottom: .5em;
        color: #ee9e09;
    }
    p {
        font-size: 1.1vw;
    }
    @media (max-width: 1200px) {
        p {
            font-size: 1em;
        }
    }
`

export const Welcome = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5em;

    h1 {
        text-align: center;
        font-family: "Bakbak One";
        font-size: 3.5em;
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
        font-size: 1em;
        text-align: center;
        font-weight: normal;
        padding: 1.5em 4em;
        background: #1b1b1b;
        border-radius: 0.5em;
    }
`
