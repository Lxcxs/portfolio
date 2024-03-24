// import AboutMe from "../About Me";
import Introduction from "../Introduction";
import Projects from "../Projects";
import Skills from "../Skills";
import { Container } from "./styles";


function Mainstreet() {
  return (
    <Container>
      <Introduction />
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
    </Container>
  );
}

export default Mainstreet;