import styled from "styled-components";

export const Container = styled.section`
  height: auto;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-family: "Barlow", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2em;
  text-shadow: 0 2px 2px #00000028;

`;

export const InfoText = styled.p`
  padding-top: 1em;
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
`;

export const ImageContent = styled.div`
  padding: 3em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30%;
    border-radius: 50%;
    box-shadow: 0 10px 40px #00000079;
  }
`;
