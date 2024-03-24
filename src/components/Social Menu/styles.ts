import styled from "styled-components";

export const Container = styled.section`
  padding: 1em 5px;
  height: calc(100vh - 5em);

  position: sticky;
  top: 5em;
`;

export const Navbar = styled.nav`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;

  a {
    color: ${props => props.theme.colors.secondary};
    font-family: "Inter";
    padding: 15px 5px;
    display: flex;
    gap: .3em;
    align-items: center;
    text-decoration: none;
    transition: .3s;

    &:hover {
      color: ${props => props.theme.colors.linkHover};
      transition: .3s;
      transform: translateX(5px);
    }
  }
`