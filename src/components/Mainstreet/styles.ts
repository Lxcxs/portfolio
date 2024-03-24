import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 3em;
  flex-direction: column;
  padding: 1em 0;
  /* background: ${p => p.theme.colors.mainstreetbg}; */
  backdrop-filter: blur(10px);
  border-radius: 7px;
  overflow: hidden;
`