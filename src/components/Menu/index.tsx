import React from "react";
import { Button, ButtonBox, Container } from "./styles";
import { ThemeContext } from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
// import { FaHome, FaInfoCircle  } from "react-icons/fa";
// import { GiSkills } from "react-icons/gi";
// import { AiFillProject } from "react-icons/ai";
import { LangContext } from "../../Context/useContext";
import { obj } from "../../content";

interface MenuProps {
  toggleTheme(): void;
}

function Menu({ toggleTheme }: MenuProps) {

  const theme = React.useContext(ThemeContext);
  const { lang, setLang } = React.useContext(LangContext)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <Container>
      {/* <Title>MENU</Title> */}
      {/* <Navbar>
        <a href="#inicio">
          <FaHome size={25} />
          {lang ? obj.menu.home["pt-br"] : obj.menu.home["en"]}
        </a>
        <a href="#sobremim">
          <FaInfoCircle size={22} />
          {lang ? obj.menu.about["pt-br"] : obj.menu.about["en"]}
          
        </a>
        <a href="#habilidades">
          <GiSkills size={22} />
          {lang ? obj.menu.skill["pt-br"] : obj.menu.skill["en"]}
          
        </a>
        <a href="#projetos">
          <AiFillProject size={22} />
          {lang ? obj.menu.projects["pt-br"] : obj.menu.projects["en"]}
          
        </a>
      </Navbar> */}
      <ButtonBox style={{top: '1em'}}>
        <Button onClick={() => setLang(!lang)}>
          {lang ? "Change: English " : "Mudar: Português"}
          {/* <FaLanguage size={25} /> */}
          
        </Button>
        <Button onClick={toggleTheme} id="toggleTheme">
          {lang ? (
            theme?.title === "dark" ? obj.ptbr.menu.themeBtn.dark : obj.ptbr.menu.themeBtn.light
          ) :
            (
              theme?.title === "light" ? obj.en.menu.themeBtn.light : obj.en.menu.themeBtn.dark
            )}

          {theme?.title === "dark" ? <HiOutlineLightBulb size={25} /> : <MdDarkMode size={25} />}
        </Button>

      </ButtonBox>
    </Container>
  );
}

export default Menu;