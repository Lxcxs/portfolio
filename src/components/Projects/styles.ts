import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
  padding-bottom: 2em;
`;

export const ProjectContent = styled.div`
  width: auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  gap: 4em;
  padding: 1em 0;
  position: relative;
  overflow: hidden;

  #mySwiper {
      width: 100%;
      height: 100%;
  }
`;

export const Project = styled.div`
margin: 0 auto;
  max-width: 500px;
  height: 300px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.project};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
`;

export const Banner = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 5px;
  background-color: lightblue;
`;

export const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: .2em; */
`;

export const ProjectText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
  font-size: 13px;
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5em;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
`;

export const SkillInfo = styled.div`
  width: 100%;
  p {
    color: ${(props) => props.theme.colors.secondary};
    font-family: "Inter";
    font-style: italic;
    font-size: 14px;
  }
`;

export const LinkContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5em;
  /* background-color: red; */
`;

export const Link = styled.a`
  cursor: pointer;
  font-family: "Inter";
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: .2em;

  &:hover {
    background-color: ${(props) => props.theme.colors.project};
    transition: 0.5s;
  }
`;
