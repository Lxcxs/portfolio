import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: auto;
    padding: 2em 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    a {
        color: white;
    }

    @media (max-width: 1200px) {
        width: 100%;
        margin: 0;
        padding: 5em 2em 5em 2em;
    }
    @media (max-width: 630px) {
        padding: 5em 1em;
    }
`