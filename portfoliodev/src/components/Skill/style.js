import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    padding: 2em;
    border-radius: .8em;
    background-color: #1f1f1f;
    box-shadow: 0 2px 4px black;
    border: 1px solid #00000041;
    
    div {
        flex-grow: 1;
        margin: 0 auto;
        width: 20vw;
        min-width: 12em;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding: .5em 1em;
        border-radius: .5em;
        border: 2px solid black;
        box-shadow: 0 3px 3px #000000b6;
        transition: all .2s;
        background-color: #1f1f1f;
        opacity: 1;
        background-size: 6px 6px;
        background-image: repeating-linear-gradient(45deg, #000000 0, #000000 0.6000000000000001px, #1f1f1f 0, #1f1f1f 50%);

        
        img {
            min-width: 2em;
            width: 2.4em;
        }
        h6 {
            font-family: "Bakbak One";
            font-size: 1em;
            letter-spacing: 1.4px;
            text-shadow: 0 2px 3px black;
        }

        &:hover {
            background:#ffffff0c;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
        gap: .7em;
        padding: .7em;
        div {
            width: 100%;
            img {
                width: 1em;
            }
            h6 {
                font-size: .8em;
            }
        }
    }
`
