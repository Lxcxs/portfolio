import { Container, InfoText, Title } from "./styles";
import { FaLocationDot } from "react-icons/fa6";

function AboutMe() {

  function calculateAge(dob: Date) {
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
  const myAge = calculateAge(new Date(2001, 12, 5))
  console.log(myAge)

  return (
    <Container id="sobremim">
      <Title>
        Sobre mim
      </Title>

      <InfoText>
        {`Meu nome é Lucas Cupertino, tenho ${myAge} anos e estudo programação web desde 2021, quando entrei na faculdade. Embora não seja um entusiasta da tecnologia, estou determinado a me tornar um bom programador.`}
      </InfoText>

      <InfoText>
        <FaLocationDot /> Volta Redonda, RJ - Brasil
      </InfoText>

    </Container>
  );
}

export default AboutMe;