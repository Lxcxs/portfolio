import styled from "styled-components";

export const Content = styled.section`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  @media screen and (max-width: 1350px){
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
