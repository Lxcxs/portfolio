import { SkillContent } from "./styles";
import { Container, InfoText, Title } from "./styles";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass, FaPython, FaNodeJs, FaGitSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";

function Skills() {
  return (
    <Container id="habilidades">
      <Title>
        habilidades
      </Title>

      <InfoText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu aliquet tellus. Duis quis vehicula enim, eget fringilla urna.
      </InfoText>

      <SkillContent>
        <details open>
          <summary>Front-End</summary>
          <p><RiJavascriptFill size={26} />javascript</p>
          <p><BiLogoTypescript size={26} />typescript</p>
          <p><FaReact size={26} />react</p>
          <p><FaSass size={26} />sass.css</p>
          <p><SiStyledcomponents size={26} />styled-components</p>
        </details>
        <details open>
          <summary>back-End</summary>
          <p><FaPython size={26} />python</p>
          <p><FaNodeJs size={26} />node.js</p>
          <p><SiExpress size={26} />Express.js</p>
        </details>
        <details open>
          <summary>Diversos</summary>
          <p><TbBrandVscode size={26} />VS Code</p>
          <p><TbBrandReactNative size={26} />React-Native</p>
          <p><SiMongodb size={26} />MongoDB</p>
          <p><FaGitSquare size={26} />Git</p>
        </details>
      </SkillContent>
    </Container>
  );
}

export default Skills;