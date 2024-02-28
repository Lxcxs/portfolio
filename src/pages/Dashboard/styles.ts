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
  width: 1260px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  position: relative;
`;
