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
        <a href="#inicio">
          <FaLinkedin size={25} />
          LinkedIn
        </a>
        <a href="#sobremim">
          <FaGithubSquare size={25} />
          Github
          </a>
        <a href="#habilidades">
          <FaInstagramSquare size={25} />
          Instagram
          </a>
      </Navbar>
    </Container>
  );
}

export default Socials;