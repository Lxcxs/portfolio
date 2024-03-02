import React from "react";
import { Button, ButtonBox, Container, Navbar } from "./styles";
import { ThemeContext } from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHome, FaInfoCircle  } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import { LangContext } from "../../Context/useContext";
import { obj } from "../../content";

interface MenuProps {
  toggleTheme(): void;
}

function Menu({ toggleTheme }: MenuProps) {

  const myEmail = 'olucas.cdev@gmail.com';
  const theme = React.useContext(ThemeContext);
  const [email, setEmail] = React.useState<string>(myEmail)
  const { lang, setLang } = React.useContext(LangContext)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmail = ({ target }: React.MouseEvent<HTMLParagraphElement> | any) => {
    if (target) {
      target.classList.add('active');
      if(lang) {
        setEmail("Email Copiado!")
      } else setEmail("Email Copied!")

      navigator.clipboard.writeText(myEmail).then(() => {
        setTimeout(() => {
          target.classList.remove('active');
          setEmail(myEmail)

        }, 2000);
      }).catch(error => console.error('Erro ao copiar o e-mail:', error));
    }
  };
  return (
    <Container>
      {/* <Title>MENU</Title> */}
      <Navbar>
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
      </Navbar>
      <ButtonBox>
        <Button onClick={() => setLang(!lang)}>
          {lang ? "Change: English " : "Mudar: Português"}
          {/* <FaLanguage size={25} /> */}
          
        </Button>
        <Button onClick={toggleTheme} id="toggleTheme">
          {lang ? (
            theme?.title === "dark" ? obj.menu.themeBtn.dark["pt-br"] : obj.menu.themeBtn.light["pt-br"]
          ) :
            (
              theme?.title === "light" ? obj.menu.themeBtn.light["en"] : obj.menu.themeBtn.dark["en"]
            )}

          {theme?.title === "dark" ? <HiOutlineLightBulb size={25} /> : <MdDarkMode size={25} />}
        </Button>

        <Button onClick={handleEmail}>
          {email}
          <p id="copy">{lang ? obj.menu.emailBtn["pt-br"] : obj.menu.emailBtn["en"]}</p>
        </Button>

        <a
          href="../src/assets/LUCASCUPERTINO.pdf"
          download="Lucas Cupertino"
        >
          <Button>
            {lang ? "Baixar CV" : "Download CV"}
            <p id="copy">{lang ? obj.menu.downloadBtn["pt-br"] : obj.menu.downloadBtn["en"]}</p>
          </Button>
        </a>
      </ButtonBox>
    </Container>
  );
}

export default Menu;