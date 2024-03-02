// import React from "react";
import { Container, Navbar } from "./styles";
// import { Title } from "../Menu/styles";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

function Socials() {
  return (
    <Container>
      {/* <Title>
        LINKS
      </Title> */}
      <Navbar>
        <a href="https://www.linkedin.com/in/lucas-cupertino-8b0637219/" target="_blank">
          <FaLinkedin size={25} />
          LinkedIn
        </a>
        <a href="https://github.com/Lxcxs" target="_blank">
          <FaGithubSquare size={25} />
          Github
          </a>
        <a href="https://instagram.com/" target="_blank">
          <FaInstagramSquare size={25} />
          Instagram
          </a>
      </Navbar>
    </Container>
  );
}

export default Socials;