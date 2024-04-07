// import React from "react";
import { Button, ButtonBox } from "../Menu/styles";
import { Container } from "./styles";
// import { Title } from "../Menu/styles";
// import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { obj } from "../../content";
import { LangContext } from "../../Context/useContext";
import React from "react";



function Socials() {

  const myEmail = 'olucas.cdev@gmail.com';
  const [email, setEmail] = React.useState<string>(myEmail)
  const { lang } = React.useContext(LangContext)

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

  return (
    <Container>
      {/* <Title>
        LINKS
      </Title> */}
      <ButtonBox>
        <Button onClick={handleEmail}>
          {email}
          <p id="copy">{lang ? obj.ptbr.menu.emailBtn : obj.en.menu.emailBtn}</p>
        </Button>

        <a
          href="../src/assets/LUCASCUPERTINO.pdf"
          download="Lucas Cupertino"
        >
          <Button>
            {lang ? "Baixar CV" : "Download CV"}
            <p id="copy">{lang ? obj.ptbr.menu.downloadBtn : obj.en.menu.downloadBtn}</p>
          </Button>
        </a>
      </ButtonBox>
    </Container>
  );
}

export default Socials;