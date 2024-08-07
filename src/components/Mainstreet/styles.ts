import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1em;
  flex-direction: row;
  justify-content: center;
  padding-top: 5em;
  border-radius: 7px;

  @media screen and (max-width: 1350px) {
    padding: 1em 2em;
  }
  @media screen and (max-width: 900px) {
    padding: 1em 0.7em;
    flex-direction: column;
  }
`;
