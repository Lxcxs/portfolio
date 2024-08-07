import styled from "styled-components";

interface IMobile {
  mobile: boolean;
}

export const Container = styled.section`
  width: auto;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: flex-end; */

  @media screen and (max-width: 1350px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 1.8em;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 0 2px 2px #00000028;
`;

export const Navbar = styled.nav`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  a {
    color: ${(props) => props.theme.colors.secondary};

    padding: 15px 5px;
    text-decoration: none;
    display: flex;
    gap: 0.5em;
    /* border-bottom: 1px solid ${(props) => props.theme.colors.project}; */
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.linkHover};
      transition: 0.3s;
      transform: translateX(5px);
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  padding: 1em 10px;
  flex-direction: column;
  gap: 2em;

  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1350px) {
    padding-top: 1em;
  }
`;

export const ButtonToggle = styled.button`
  width: 100%;
  max-width: 100%;
  height: auto;
  background-color: ${(props) =>
    props.theme.title === "dark" ? "#ffffff18" : "#00000018"};
  border-radius: 0.7em;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  gap: 1em;

  padding: 0 7px;
  border: 1px solid
    ${(props) => (props.theme.title === "dark" ? "#ffffff1e" : "#00000018")};
  align-self: flex-end;

  &:hover {
    background-color: ${(props) =>
      props.theme.title === "dark" ? "#ffffff28" : "#0000002c"};
    border: 1px solid
      ${(props) => (props.theme.title === "dark" ? "#ffffff18" : "#00000018")};
  }

  svg {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.3s;
  }

  div {
    width: fit-content;
    /* background-color: red; */
    display: flex;
    align-items: center;
    /* transform: translateX(1em); */
    transition: 0.3s;
  }

`;

export const Button = styled.button`
  cursor: pointer;
  width: 250px;
  border: 1px solid ${(props) => props.theme.colors.textColor};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: ${(props) => props.theme.colors.primary};
  background: transparent;
  border-radius: 5px;

  font-size: 1em;
  font-weight: 500;
  position: relative;
  transform: translateY(-10px);
  box-shadow: 0 2px 2px #0000003b;
  transition: 0.3s;

  &:hover,
  &#toggleTheme {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primaryReverse};
    transition: 0.2s;
  }

  &#toggleTheme:hover {
    background: ${(props) => props.theme.colors.linkHover};
    border-color: ${(props) => props.theme.colors.linkHover};
    color: ${(props) => props.theme.colors.primaryReverse};
  }

  &.active {
    background-color: greenyellow;
    border-color: greenyellow;
    box-shadow: 0 2px 3px #0000003b;
    color: black;
  }

  #copy {
    /* pointer-events: none; */
    display: block;
    background-color: purple;
    width: fit-content;
    padding: 2px 3px;
    border-radius: 5px;
    height: 22px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    top: -12px;
    left: 10px;
  }
  @media screen and (max-width: 1350px) {
    width: 100%;
  }
`;

export const MenuMobile = styled.div<IMobile>`
  width: 100%;
  height: ${(props) => (props.mobile ? "auto" : "50px")};
  padding: 0.5em 0;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.colors.project};
  border: 1px solid ${(props) => props.theme.colors.border};
  z-index: 1000;
  display: none;
  transition: 1s;

  .btnMobile {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    opacity: ${(props) => (props.mobile ? "1" : "0")};
    transition: 0.2s;
  }
  @media screen and (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
