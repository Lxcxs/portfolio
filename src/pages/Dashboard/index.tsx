// import React from "react";
import { Container, Content } from "./styles";
import Menu from "../../components/Menu";
import Socials from "../../components/Social Menu";
import Mainstreet from "../../components/Mainstreet";
import { ThemeProvider } from "styled-components";
import dark from "../../themes/dark";
import React from "react";
import light from "../../themes/light";
import LangProvider from "../../Context/useContext";

function Dashboard() {

  const [theme, settheme] = React.useState(dark);

  const toggleTheme = () => {
    settheme(theme.title === "dark" ? light : dark)
    console.log(theme)
  }

  return (<LangProvider>
    <ThemeProvider theme={theme}>
      <Container>
        <Content>
          <Menu toggleTheme={toggleTheme} />
          <Mainstreet />
          <Socials />

        </Content>
      </Container>
    </ThemeProvider>
  </LangProvider>
  );
}

export default Dashboard;