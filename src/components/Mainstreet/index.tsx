// import AboutMe from "../About Me";
// import React from "react";
// import dark from "../../themes/dark";
// import light from "../../themes/light";
import Menu from "../Menu";
import Projects from "../Projects";
import Skills from "../Skills";
import { Container } from "./styles";


function Mainstreet() {

  return (
    <Container>
      {/* <Introduction /> */}
      {/* <AboutMe /> */}
      <Menu />
      <Projects />
      <Skills />
    </Container>
  );
}

export default Mainstreet;