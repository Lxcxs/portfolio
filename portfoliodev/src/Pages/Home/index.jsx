import { Section, Div } from "./style.js";
import Typerwriter from 'typewriter-effect';

export default function Home() {
    return (
        <>
        <Section id="home">
            <Div>
                <div>
                    <h3><Typerwriter onInit={(typewriter) => {
                        typewriter.typeString("Olá, sou Lucas Cupertino").start();
                    }} />
                    </h3>
                    <p>
                    Tive meu primeiro contato com esse tipo de tecnologia em 2018 quando fiz um curso de informática onde aprendi um pouco sobre HTML e CSS, o que me deixou um tanto interessado por essa área. Porém, ainda não estava certo de qual carreira eu realmente queria seguir. Foi quando em 2021 eu ingressei na faculdade e fui apresentado para diversas áreas da tecnologia. <br></br><br></br>
                    Pouco tempo após entrar na faculdade decidi me especializar em desenvolvimento web por ser a área da qual mais me identifico e por gostar bastante de web design. Meu principal foco hoje é aprender e desenvolver minha habilidades através de cursos online e materiais gratuitos espalhados pela internet para me inserir no mercado e aprender mais. Também estou cursando Sistemas de Informação no  <cite><a href="https://www.unifoa.edu.br" target="_blank">Centro Universitário Oswaldo Aranha</a></cite> em Volta Redonda(RJ) cidade em que nasci.
                    </p>
                </div>
            </Div>
        </Section>

        </>
    )
}