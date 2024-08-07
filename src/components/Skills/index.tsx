import { SkillContent } from "./styles";
import { Container } from "./styles";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass, FaPython, FaNodeJs, FaGitSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents, SiExpress, SiMongodb, SiCsharp } from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

function Skills() {
  return (
    <Container id="habilidades">
      <SkillContent>
        <div className="category">
          <h1 id="title">▸ Front-End</h1>
          <p><RiJavascriptFill size={26} />javascript</p>
          <p><BiLogoTypescript size={26} />typescript</p>
          <p><FaReact size={26} />react</p>
          <p><FaSass size={26} />sass.css</p>
          <p><SiStyledcomponents size={26} />styled-components</p>
        </div>
        <div className="category">
          <h1 id="title">▸ back-End</h1>
          <p><FaPython size={26} />python</p>
          <p><FaNodeJs size={26} />node.js</p>
          <p><SiExpress size={26} />Express.js</p>
        </div>
        <div className="category">
          <h1 id="title">▸ Others</h1>
          <p><TbBrandVscode size={26} />VS Code</p>
          <p><TbBrandReactNative size={26} />React-Native</p>
          <p><GrMysql size={26} />MySQL</p>
          <p><SiMongodb size={26} />MongoDB</p>
          <p><FaGitSquare size={26} />Git</p>
          <p><SiCsharp size={26}/>C sharp</p>
        </div>
      </SkillContent>
    </Container>
  );
}

export default Skills;