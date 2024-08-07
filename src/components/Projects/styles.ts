import styled from "styled-components";

export const Container = styled.section`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 0.75rem;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  text-shadow: 0 2px 2px #00000028;
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.textColor};

  padding-bottom: 2em;
  text-align: center;
  width: 100%;
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  position: relative;
  overflow: hidden;

  #more {
    width: 100%;
    text-align: center;

    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
  }
  #linkto {
    color: ${(props) => props.theme.colors.linkHover};
  }
`;

export const Project = styled.div`
  width: 800px;
  min-width: 350px;
  min-height: 150px;
  max-height: 200px;
  padding: 0;
  background-color: ${(props) => props.theme.colors.project};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.75rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* gap: 0.75rem; */
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    grid-template-columns: 2fr 1fr;
    max-height: auto;
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0;
  background: url("https://media.tenor.com/YUzRkMOL-3EAAAAM/programming-computer-frog.gif")
    no-repeat;
  background-size: cover;
  /* gap: 0.75rem; */
  /* @media screen and (max-width: 680px){
    display: none;
  } */
  @media screen and (max-width: 530px) {
    display: none;
  }
`;

export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  gap: 0.5em;
  position: relative;

  .linkto {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0.5em;

    #linkto {
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.primary};
      display: flex;
      align-self: flex-start;
      align-items: center;
      text-transform: lowercase;
      gap: 0.1em;
      font-size: 14px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const ProjectText = styled.p`
  color: ${(props) => props.theme.colors.textColor};

  font-size: 13px;
`;

export const Subtitle = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5em;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  text-decoration: none;
  width: fit-content;
  
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
    text-decoration: underline;
    transition: 0.1s;
  }

  @media screen and (max-width: 680px) {
    font-size: 20px;
  }
`;

export const SkillInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5em;
  p {
    color: #000;

    font-size: 13px;
    background-color: white;
    padding: 2px 5px;
    border-radius: 10px;
    cursor: default;
  }
`;

export const LinkContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5em;
  position: absolute;
  bottom: 0.2em;
  right: 0;
  /* background-color: red; */
`;

export const Link = styled.a`
  cursor: pointer;
  font-family: "Barlow";
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  /* text-decoration: none; */
  gap: 0.2em;

  &:hover {
    text-decoration: dashed;
    /* transition: 0.1s; */
  }
`;
