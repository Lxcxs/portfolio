// import React from "react";
import { Container, Content } from "./styles";
import Menu from "../../components/Menu";
import Mainstreet from "../../components/Mainstreet";
import { ThemeProvider } from "styled-components";
import dark from "../../themes/dark";
import React from "react";
import light from "../../themes/light";
import LangProvider from "../../Context/useContext";

function Dashboard() {

  const [theme, setTheme] = React.useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
    console.log(theme)
  }

  return (<LangProvider>
    <ThemeProvider theme={theme}>
      <Container>
        <Content>

          <Menu toggleTheme={toggleTheme} />

          <Mainstreet />

        </Content>
      </Container>
    </ThemeProvider>
  </LangProvider>
  );
}

export default Dashboard;