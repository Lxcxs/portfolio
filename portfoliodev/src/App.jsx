import Menu from "./Pages/Menu/index.jsx"
import Header from "./Pages/Welcome/Header.jsx"
import Home from './Pages/Home/index.jsx'
import { Container } from './appStyle.js'
import Skills from "./Pages/Skills/index.jsx"
import Projects from "./Pages/Project/index.jsx"

function App() {

  return (
    <>
    <Container>
      <Menu />
      <Header />
      <Home />
      <Skills />
      <Projects />
    </Container>

    </>

  )
}

export default App
