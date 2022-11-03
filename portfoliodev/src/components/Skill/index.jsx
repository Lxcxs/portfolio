import { Container } from "./style.js"
import { Call } from "../Call/style"

export default function Skills() {
    return (
        <>
        <Call id="skills">Habilidades e Tecnologias</Call>
        <section>
            <Container>
                <div>
                    <img src='img/icons/html.png'></img>
                    <h6>HTML</h6>
                </div>
                <div>
                    <img src='img/icons/css-3.png'></img>
                    <h6>CSS</h6>
                </div>
                <div>
                    <img src='img/icons/sass.png'></img>
                    <h6>SASS CSS</h6>
                </div>
                <div>
                    <img src='img/icons/js.png'></img>
                    <h6>JAVASCRIPT</h6>
                </div>
                <div>
                    <img src='img/icons/atom-symbol.png'></img>
                    <h6>REACT</h6>
                </div>
                <div>
                    <img src='img/icons/git.png'></img>
                    <h6>GIT</h6>
                </div>
            </Container>
        </section>
        </>
    )
}