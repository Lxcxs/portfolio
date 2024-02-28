import React from "react";
import { Button, ButtonBox, Container, Navbar, Title } from "./styles";
// import { ThemeContext } from "styled-components";
import { GrLanguage } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";

interface ToggleThemeProps {
  toggleTheme(): void;
}

function Menu({ toggleTheme }: ToggleThemeProps) {

  const myEmail = 'olucas.cdev@gmail.com'
  const theme = React.useContext(ThemeContext);
  const [email, setEmail] = React.useState("Clique para copiar.");
  const target = document.getElementById('copy')

  function handleEmail() {
    target?.classList.add('active')
    console.log(target)
    setEmail('Email copiado!')

    navigator.clipboard.writeText(myEmail)
    target?.classList.add('active')

    setTimeout(() => {
      target?.classList.remove('active')
      setEmail("Clique para copiar.")
    }, 2000)
  }

  return (
    <Container>
      <Title>MENU</Title>
      <Navbar>
        <a href="#inicio">
          <FaHome size={25} />
          Início
        </a>
        <a href="#sobremim">
          <FaInfoCircle size={22} />
          Sobre mim
        </a>
        <a href="#habilidades">
          <GiSkills size={22} />
          Habilidades
        </a>
        <a href="#projetos">
          <AiFillProject size={22} />
          Projetos
        </a>
      </Navbar>
      <ButtonBox>
        <Button>
          Change language
          <GrLanguage />
        </Button>
        <Button onClick={toggleTheme} id="toggleTheme">
          {theme?.title === "dark" ? "Acenda as luzes" : "Apague as luzes"}
          {theme?.title === "dark" ? <FaLightbulb /> : <MdDarkMode />}
        </Button>

        <Button onClick={handleEmail}>
          {myEmail}
          <p id="copy">{email}</p>
        </Button>

        <a
          href="../src/assets/LUCAS CUPERTINO.pdf"
          download="Lucas Cupertino"
        >
          <Button>
            {`Curriculo`}
            <p id="copy">{`Clique para baixar.`}</p>
          </Button>
        </a>
      </ButtonBox>
    </Container>
  );
}

export default Menu;