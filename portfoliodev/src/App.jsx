import Menu from "./components/Menu/index.jsx"
import Main from './Pages/Main/index.jsx'
import { Container } from './appStyle.js'
import MenuMobile from "./components/MenuMobile/index.jsx";

function App() {
  return (
    <>
    <MenuMobile />
    <Container>
      <Menu />
      <Main />
    </Container>

    </>

  )
}

export default App
