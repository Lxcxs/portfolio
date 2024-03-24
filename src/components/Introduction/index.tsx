import React from "react";
import { Container, InfoText, Title } from "./styles";
import { LangContext } from "../../Context/useContext";
import { obj } from "../../content";

function Introduction() {

  const { lang } = React.useContext(LangContext)

  return (
    <Container id="inicio">
      <Title>
        {lang ? obj.ptbr.introduce.title : obj.en.introduce.title}
        <br></br>
        {lang ? obj.ptbr.introduce.title2: obj.en.introduce.title2}

      </Title>
      {/* <ImageContent>
        <img src="image/doberman.png" />
      </ImageContent> */}
      <InfoText>
      {lang ? obj.ptbr.introduce.info: obj.en.introduce.info}
      </InfoText>

    </Container>
  );
}

export default Introduction;