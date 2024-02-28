import { Container, ImageContent, InfoText, Title } from "./styles";

function Introduction() {
  return (
    <Container id="inicio">
      <Title>
        Olá, Bem Vindo(a)<br></br>
        Este é o meu Portfólio
      </Title>
      <InfoText>
      Olá! Sou um desenvolvedor em ascensão, buscando oportunidades para expandir minha jornada profissional. Este é o meu portfólio, onde compartilho alguns projetos que venho desenvolvendo. Estou comprometido em aprimorar minhas habilidades e contribuir de forma significativa para projetos desafiadores. Se algo despertar seu interesse, estou disponível para discutir possíveis colaborações e crescer junto na área de desenvolvimento web. Vamos trabalhar juntos?
      </InfoText>

      <ImageContent>
        <img src="image/doberman.png" />
      </ImageContent>
    </Container>
  );
}

export default Introduction;