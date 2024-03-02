import React from "react";
import { Container, InfoText, Title } from "./styles";
import { FaLocationDot } from "react-icons/fa6";
import { LangContext } from "../../Context/useContext";



function AboutMe() {

  const { lang } = React.useContext(LangContext)

  function calculateAge(dob: Date) {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const myAge = calculateAge(new Date(2001, 12, 5))

  return (
    <Container id="sobremim">
      <Title>
        {lang ? "Sobre mim" : "About me"}
      </Title>

      <InfoText>

        {lang ? `Meu nome é Lucas Cupertino, tenho ${myAge} anos e estudo programação web desde 2021, quando entrei na faculdade. Embora não seja um entusiasta da tecnologia, estou determinado a me tornar um bom programador.` : `My name is Lucas Cupertino, I'm ${myAge} years old and I've been studying web programming since 2021, when I entered college. Although I am not a technology enthusiast, I am determined to become a good programmer.`}

      </InfoText>

      <InfoText>
        <FaLocationDot /> Volta Redonda, RJ - Brasil
      </InfoText>

    </Container>
  );
}

export default AboutMe;