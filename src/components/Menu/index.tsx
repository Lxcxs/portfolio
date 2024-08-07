import React from "react";
import { Button, ButtonBox, Container, MenuMobile } from "./styles";
// import { ThemeContext } from "styled-components";
// import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { FaLanguage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
// import { FaHome, FaInfoCircle  } from "react-icons/fa";
// import { GiSkills } from "react-icons/gi";
// import { AiFillProject } from "react-icons/ai";
import { LangContext } from "../../Context/useContext";
import { obj } from "../../content";


function Menu() {

  const myEmail = 'olucas.cdev@gmail.com';
  const [email, setEmail] = React.useState<string>(myEmail)
  const [mobile, setMobile] = React.useState<boolean>(false)
  const { lang, setLang } = React.useContext(LangContext)
  // const theme = React.useContext(ThemeContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEmail = ({ target }: React.MouseEvent<HTMLParagraphElement> | any) => {
    if (target) {
      target.classList.add('active');
      if (lang) {
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

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <>
      <Container>
        {/* <ButtonBox>
          <ButtonToggle onClick={toggleTheme} id="toggleTheme">

            <div>
              {theme?.title === "dark" ? <MdDarkMode size={35} /> : <MdLightMode size={35} />}
            </div>
          </ButtonToggle>
        </ButtonBox> */}
        <ButtonBox>

          {/* <ButtonToggle className="lang" onClick={() => setLang(!lang)}>
            <FaLanguage size={35} />
            {lang ? "Change to English" : "Mudar para Português"}
          </ButtonToggle> */}
          <Button onClick={handleEmail}>
            {email}
            <p id="copy">{lang ? obj.ptbr.menu.emailBtn : obj.en.menu.emailBtn}</p>
          </Button>

          <a
            href="https://sapphire-debra-1.tiiny.site"
            target="_blank"
          >
            <Button>
              {lang ? "Baixar CV" : "Download CV"}
              <p id="copy">{lang ? obj.ptbr.menu.downloadBtn : obj.en.menu.downloadBtn}</p>
            </Button>
          </a>
        </ButtonBox>

      </Container>

      <MenuMobile mobile={mobile}>
        <div className="btnMobile" onClick={handleMobile} style={{ justifyContent: "center" }}>
          {mobile ? <MdClose  size={35} /> : <GiHamburgerMenu  size={35} />}

        </div>

        <div className="content">
          <ButtonBox>
            {/* <ButtonToggle className="lang" onClick={() => setLang(!lang)}>
              <FaLanguage size={35} />
              {lang ? "Change to English" : "Mudar para Português"}
            </ButtonToggle> */}
            <Button onClick={handleEmail}>
              {email}
              <p id="copy">{lang ? obj.ptbr.menu.emailBtn : obj.en.menu.emailBtn}</p>
            </Button>

            <a
              href="https://sapphire-debra-1.tiiny.site"
              target="_blank"
            >
              <Button>
                {lang ? "Baixar CV" : "Download CV"}
                <p id="copy">{lang ? obj.ptbr.menu.downloadBtn : obj.en.menu.downloadBtn}</p>
              </Button>
            </a>
          </ButtonBox>
        </div>
      </MenuMobile>
    </>
  );
}

export default Menu;