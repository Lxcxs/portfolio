import styled from "styled-components";

export const Container = styled.section`
    opacity: 1;
    width: auto;
    position: fixed;
    top: 6em;
    left: 0;
    padding: .5em;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    background-color: #000000ff;
    border: 5px solid #80808086;
    border-left: none;
    border-radius: 1em;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    nav {
        display: none;
        padding-top: 2em;
        z-index: 2000;

        ul {
            height: 15em;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            li {
                list-style: none;
            }
        }
    }
    .ativo {
        opacity: 1;
        display: flex;
        animation: openSmooth 1s ease;
    }
    svg {
        color: white;
    }
    @keyframes openSmooth {
        from { opacity: 0;}
        to { opacity: 1;}
    }

`

export const ProfileMenu = styled.div`
    div {
        border-radius: 50%;
        background: linear-gradient(to top, #bd1550, #fcbe32);
        margin-bottom: 0;

        img {
            width: 3em;
            border-radius: 50%;
            display: block;
            border: .2em solid transparent;
        }


    }
    p {
        font-size: 10px;
        text-align: center;
    }

`