import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  background-position: center;
  background-size: 100%;
  background-attachment: fixed;
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 5em 0 0 0;
  width: 1300px;
  height: 100%;
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 3fr;
  position: relative;

  .col1 {
    position: sticky;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (max-width: 1350px){
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
