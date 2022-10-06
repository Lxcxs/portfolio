import styled from "styled-components";

export const Container = styled.section`
    opacity: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 20em;
    height: 100%;
    background-color: #1b1b1b;
    z-index: 2;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .5s;
    animation: shadoweffect 1.5s infinite both;
    
    div#pf, nav {
        transform: scale(.98);
        transition: all ease-out .2s;
    }
    &:hover {
        opacity: 1;
        animation: shadoweffect 1.5s infinite both;

        div#pf, nav {
            transform: scale(1);
        }
    }
    @keyframes shadoweffect {
        0%, 100% {
            box-shadow: 
                0px 0 1px #ffffff09,
                0px 0 1px #ffffff1a;
        }
        30% {
            box-shadow: 
                #ffffff09,#ffffff1a;
        }
        80% {
            box-shadow: 
                20px 0 10px transparent,
                30px 0 20px transparent;
        }
        99% {
            box-shadow: 
                0px 0 1px transparent,
                0px 0 1px transparent;
        }
    }

    @media (max-width: 1200px) {
        top: 5em;
        height: auto;
        opacity: 1;
        width: auto;
        padding: .5em;
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        border-right: 3px solid #80808073;
        border-top: 3px solid #80808073;
        border-bottom: 3px solid #80808073;
        animation: none;

        &:hover {
            animation: none;
        }
    }

`

export const Profile = styled.div`
    cursor: default;
    display: flex;
    border: 2px solid #80808025;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    padding: 2em;
    border-radius: .5em;
    background-color: #00000081;
    box-shadow:
        0px 4.8px 6.6px -12px rgba(0, 0, 0, 0.5),
        0px 38px 53px -12px rgba(0, 0, 0, 1);
    div {
        border-radius: 50%;
        background: linear-gradient(to top, #bd1550, #fcbe32);
        margin-bottom: .5em;

        img {
            width: 100%;
            border-radius: 50%;
            display: block;
            border: .3em solid transparent;
        }
    }

    div.info-profile {
        background: none;
        border-radius: 0;
        text-align: center;

        h1 {
        font-family: "Bakbak One";
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 1em;
        color: #db812c;
        }
        h3 {
            text-align: center;
            font-size: .9em;
            color: darkgray;
            display: block;
        }
    }


    @media (max-width: 1200px) {
        width: 100%;
        padding: 0;
        background: none;
        border: none;
        box-shadow: none;
        flex-direction: row;
        margin-bottom: 0;

        div {
            border-radius: 50%;
            background: linear-gradient(to top, #bd1550, #fcbe32);
            margin-bottom: 0;

            img {
                width: 5em;
                border: .2em solid transparent;
            }
        }

        div.info-profile {
            display: none;
        }
    }
`

export const Navbar = styled.nav`
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1em;
    background-color: #00000081;
    padding: .7em 0;
    border-radius: .5em;
    box-shadow: 0px 0px 6.1px -3px rgba(0, 0, 0, 0.5),
                0px 10px 25px -5px rgba(0, 0, 0, 1);
    border: 2px solid #80808025;

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

    @media (max-width: 1200px) {
        display: none;
    }
`