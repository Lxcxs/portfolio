import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3em;
    padding: 2em 0;
    border-radius: 1em;
    background: linear-gradient(145deg, #212121, #1c1c1c);
    box-shadow: 0px 2px 5px black;
    

    @media (max-width: 900px) {
        gap: 1em;
        padding: 1em;
    }
`

export const Box = styled.div`
    width: 24em;
    height: auto;
    padding: .5em;
    border-radius: .5em;

    background-color: #101010;
    opacity: 1;
    background-size: 6px 6px;
    background-image: repeating-linear-gradient(45deg, #1f1f1f 0, #1f1f1f 0.6000000000000001px, #101010 0, #101010 50%);
    box-shadow: 0 2px 3px black;
    border: 1px solid black;

    div {
        img {
            width: 100%;
            border-radius: .5em;
            box-shadow: 0px 2px 3px black;
        }
    }

    @media (max-width: 850px) {
        width: 18em;
        height: auto;
    }
    @media (max-width: 650px) {
        width: 100%;
        height: auto;
    }
`

export const InfoBox = styled.div`
    margin-top: -.3em;
    width: 100%;
    padding: 1em 0 .2em 0;
    text-align: center;

    h5 {font-family: "Bakbak One"; font-weight: 100; letter-spacing: 1.2px;}
    h6 {color: #858585; margin-bottom: .6em; font-weight: 600;}

    div {
        display: flex;
        padding: .2em;
        border-radius: .5em;
        width: 100%;
        height: 2.5em;
        align-items: stretch;
        align-content: stretch;
        justify-content: space-evenly;
        background: #424242;
        gap: .3em;

    }
    aside:nth-child(1) {
        width: 100%;
        flex: 1;
    }
    aside {
        flex: 8;
        background-color: #0a0a0a;
        border-radius: .5em;
        display: flex;
        align-items: stretch;
        align-content: stretch;
        justify-content: center;
        border-radius: inherit;
        overflow: hidden;
        transition: all .2s;
        
        a {
            cursor: pointer;
            width: 100%;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &:hover {
            background-color: #0a0a0ad7;
        }
    }
`

