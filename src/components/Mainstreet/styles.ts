import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 3em;
  flex-direction: column;
  padding: 1em 0;
  border-radius: 7px;
  overflow: hidden;

  @media screen and (max-width: 1350px){
    padding: 1em 2em; 
  }
  @media screen and (max-width: 680px){
    padding: 1em .7em;
  }
`