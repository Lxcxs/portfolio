import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3em;
    border-radius: 1em;
`

export const Box = styled.div`
    width: 24em;
    height: 18em;
    border-radius: .5em;
    overflow: hidden;
    background-color: #ffffff11;

    div {
        img {
            width: 100%;
        }
    }
`

export const InfoBox = styled.div`
    margin-top: -.3em;
    width: 100%;
    padding: .5em;
    text-align: center;

    h5 {font-family: "Bakbak One"; font-weight: 100; letter-spacing: 1.2px;}
    h6 {color: #858585; margin-bottom: .6em;}

    div {
        display: flex;
        padding: .2em;
        border-radius: .5em;
        width: 100%;
        height: 2.5em;
        align-items: stretch;
        align-content: stretch;
        justify-content: space-evenly;
        background: #88888842;
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
            cursor: default;
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

