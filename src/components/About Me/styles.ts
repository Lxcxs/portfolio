import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-bottom: 4em;
`;

export const Title = styled.h1`
  font-family: "Barlow", sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
`;

export const InfoText = styled.p`
  padding-top: .5em;
  color: ${(props) => props.theme.colors.textColor};
  font-family: "Inter";
`;
