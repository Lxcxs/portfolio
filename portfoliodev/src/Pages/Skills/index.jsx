import { Section } from "./style.js"
import { Call } from "../../components/Chamada/style.js"

export default function Skills() {
    return (
        <>
        <Call id="skills">Habilidades e Tecnologias</Call>
        <Section>
            <div>
                <img src='img/icons/html.png'></img>
            </div>
            <div>
                <img src='img/icons/css-3.png'></img>
            </div>
            <div>
                <img src='img/icons/sass.png'></img>
            </div>
            <div>
                <img src='img/icons/js.png'></img>
            </div>
            <div>
                <img src='img/icons/atom-symbol.png'></img>
            </div>
            <div>
                <img src='img/icons/git.png'></img>
            </div>
        </Section>
        </>
    )
}