import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 800;
  text-shadow: 0 2px 2px #00000028;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
`;

export const SkillContent = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;

  div.category {
    width: 200px;
    /* background-color: yellow; */
    position: relative;
    text-align: left;
  }

  h1#title {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primary};
    text-transform: capitalize;
    font-family: "Barlow", sans-serif;
    font-size: 1.2em;
    text-shadow: 0 2px 2px #00000028;
    font-weight: 600;
  }

  p {
    cursor: default;
    padding-left: 1em;
    color: ${(props) => props.theme.colors.textColor};
    line-height: 3em;
    font-size: 1em;
    text-transform: capitalize;
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    align-items: center;
    gap: 5px;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      transform: translateX(2px);
      color: ${(props) => props.theme.colors.linkHover};
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
