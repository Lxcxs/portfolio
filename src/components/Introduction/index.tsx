import React from "react";
import { Container, ImageContent, InfoText, Title } from "./styles";
import { LangContext } from "../../Context/useContext";
import { obj } from "../../content";

function Introduction() {

  const { lang } = React.useContext(LangContext)

  return (
    <Container id="inicio">
      <Title>
        {lang ? obj.introduce.title["pt-br"] : obj.introduce.title["en"]}
        <br></br>
        {lang ? obj.introduce.title2["pt-br"] : obj.introduce.title2["en"]}

      </Title>
      <InfoText>
      {lang ? obj.introduce.info["pt-br"] : obj.introduce.info["en"]}
      </InfoText>

      <ImageContent>
        <img src="image/doberman.png" />
      </ImageContent>
    </Container>
  );
}

export default Introduction;