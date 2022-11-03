import styled from "styled-components";

export const Container = styled.section`
    position: fixed;
    left: 0;
    top: 0;
    width: 20em;
    height: 100%;
    background-color: #1f1f1f;
    z-index: 2;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all .5s;

    
    
    div#pf, nav {
        transform: scale(.99);
        transition: all ease-out .2s;
    }
    &:hover {
        box-shadow: 0 2px 10px black;

        div#pf, nav {
            transform: scale(1);
        }
    }

    @media (max-width: 1200px) {
        display: none;
    }

`

export const Profile = styled.div`
    cursor: default;
    display: flex;
    border: 1px solid #000000e0;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    border-radius: .5em;
    background-color: #101010;
    opacity: 1;
    background-size: 6px 6px;
    background-image: repeating-linear-gradient(45deg, #1f1f1f 0, #1f1f1f 0.6000000000000001px, #101010 0, #101010 50%);
    box-shadow: 0 2px 3px black;
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
        display: none;
    }
`

export const Navbar = styled.nav`
    display: block;
    width: 100%;
    height: auto;
    margin-top: 2em;
    background-color: #1f1f1f;
    padding: .3em 0;
    border-radius: .5em;
    box-shadow: 0 0px 0px black;
    border: 1px solid black;

    ul {
        width: auto;
        display: flex;
        justify-content: space-around;
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