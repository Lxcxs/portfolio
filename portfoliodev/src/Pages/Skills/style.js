import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: 5em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 1em;
    padding: 2em;
    border-radius: .8em;
    background-color: #ffffff11;
    
    div {
        flex-grow: 1;
        padding: 1em 2em;
        background:#ffffff1c;
        border-radius: .5em;
        align-self: center;
        text-align: center;
        transition: all .5s;

        img {
            min-width: 2em;
            width: 4vw;
        }

        &:hover {
            background:#ffffff2a;
            transition: all .2s;
        }
    }
`