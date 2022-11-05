import styled from "styled-components";

export const Container = styled.section`
    background: linear-gradient(145deg, #212121, #1c1c1c);
    z-index: 2;
    padding: 1em;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 1em;
    transition: all .5s;
    box-shadow: 0 2px 5px black;
    border-radius: 1em;

    
    
    div#pf, nav {
        transform: scale(1);
        transition: all ease-out .2s;
    }

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        align-items: center;
    }

`

export const Profile = styled.div`
    width: 20em;
    height: 100%;
    height: inherit;
    cursor: default;
    display: flex;
    border: 2px solid black;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    border-radius: .5em;
    background-color: #101010;
    opacity: 1;
    background-size: 6px 6px;
    background-image: repeating-linear-gradient(45deg, #1f1f1f 0, #1f1f1f 0.6000000000000001px, #101010 0, #101010 50%);
    box-shadow: 0 2px 3px black;
    div {
        border-radius: .5em;
        background: linear-gradient(to bottom, #bd1550, #fcbe32);
        margin-bottom: .5em;
        

        img {
            width: 18em;
            border-radius: .7em;
            display: block;
            border: .3em solid transparent;
        }
    }

    div.info-profile {
        width: 90%;
        background: none;
        border-radius: 0;
        text-align: center;
        background: #1f1f1f;
        padding: .5em;
        margin-top: -3em;
        box-shadow: 0 2px 3px black;
        border-radius: .2em;
        border: 2px solid black;

        h1 {
        font-family: "Bakbak One";
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1.1em;
        color: orange;
        border: 2px solid orangered;
        border-radius: .2em;
        box-shadow: 0px 0px 5px #ffffff48;
        background-color: #1f1f1f;
        background-size: 6px 6px;
        background-image: repeating-linear-gradient(45deg, #000000 0, #000000 0.6000000000000001px, #1f1f1f 0, #1f1f1f 50%);
        text-shadow: 0px 0px 2px orangered;
        padding: 0 .7em;
        }
        h3 {
            text-align: center;
            font-size: 1em;
            color: #b4b4b4;
            display: block;
            letter-spacing: .6px;
            font-weight: bold;
            text-shadow: 0px 2px 3px black;
        }
    }


    @media (max-width: 1200px) {
        width: 100%;

        div.info-profile {
            width: 16em;
        }
    }

    @media (max-width: 380px) {
        div {

            img {
                width: 15em;
            }
        }
        div.info-profile {
            width: 13em;

            h1 {
                font-size: .8em;
            }
            h3 {
                font-size: .8em;
            }
        }
    }
`

export const Navbar = styled.nav`
    display: block;
    width: 90%;
    height: auto;
    margin-top: 0em;
    background-color: #1f1f1f;
    padding: .3em 0;
    border-radius: .2em;
    box-shadow: 0 2px 3px black;
    border: 2px solid black;

    &::before {
        content: '';
        display: block;
        width: 7px;
        height: 20px;
        background: #161616;
        box-shadow: 0 2px 2px black;
        border: 1px solid black;
        position: absolute;
        top: -1em;
        left: .5em;
    }
    &::after {
        content: '';
        display: block;
        width: 7px;
        height: 20px;
        background: #161616;
        box-shadow: 0 2px 2px black;
        border: 1px solid black;
        position: absolute;
        top: -1em;
        right: .5em;
    }

    ul {
        width: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        li {
            list-style-type: none;
            a {
                text-decoration: none;
                display: block;
                border-radius: 2em;
                transition: all .2s;

                svg {
                    margin-top: 4px;
                    transition: all .2s;
                    &:hover {
                        transform: scale(1.10);
                        
                    }
                }
            }
        }
    }

    @media (max-width: 900px) {
        width: 16em;
    }
    @media (max-width: 380px) {
        width: 13em;
        
        ul {


            svg {
                width: 22px;
            }

        }
    }
`

export const About = styled.div`
    background: #1f1f1f;
    padding: 1.4em;
    border-radius: .5em;
    border: 2px solid black;
    background-size: 6px 6px;
    background-image: repeating-linear-gradient(45deg, #1f1f1f 0, #1f1f1f 0.6000000000000001px, #101010 0, #101010 50%);
    box-shadow: 0 2px 3px black;

    h1 {
        padding-bottom: .5em;
    }
    p {
        font-size: 1.2vw;
    }
    @media (max-width: 900px) {
        h1 {
            font-size: 1.2em;
        }
        p {
            font-size: .8em;
        }
    }
    @media (max-width: 380px) {
        h1 {
            font-size: 1em;
        }
        p {
            font-size: .6em;
        }
    }
`
