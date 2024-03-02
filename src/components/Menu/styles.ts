import styled from "styled-components";

export const Container = styled.section`
  padding: 1em 10px 0 10px;
  height: calc(100vh - 5em);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 5em;
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
    font-family: "Inter";
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
  height: auto;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  gap: 1.5em;
  position: absolute;
  bottom: 0;
  left: 0;
  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.textColor};
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  border-radius: 5px;
  font-family: "Inter";
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
    background: ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
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
`;
