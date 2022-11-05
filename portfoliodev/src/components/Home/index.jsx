import { About, Navbar, Profile, Container } from "./style.js";
import Typerwriter from 'typewriter-effect';
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Home() {
    return (
        <>
        <Container>
                
            <Profile id="pf">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/92754013?v=4"></img>
                </div>

                <div className="info-profile">
                    <h1>Desenvolvedor Web</h1>
                </div>

                <Navbar>
                    <ul>
                        <li><a href="https://www.instagram.com/_luquinsta/" target='_blank'><BsInstagram size={25}/></a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-cupertino-8b0637219/" target='_blank'><FaLinkedin size={25}/></a></li>
                        <li><a href="https://github.com/Lxcxs" target='_blank'><FaGithub size={25}/></a></li>
                        <li><a href="mailto:olucas.cdev@gmail.com" target='_blank'><FaPaperPlane size={25}/></a></li>
                    </ul>
                </Navbar>
            </Profile>

            <About>
                <h1 id="name">
                    <Typerwriter onInit={(typewriter) => {
                    typewriter.typeString("Olá, sou Lucas Cupertino").start();
                    }} />
                </h1>
                <p>
                Atualmente tenho 21 anos, tive meu primeiro contato com esse tipo de tecnologia em 2018 quando fiz um curso de informática onde aprendi um pouco sobre HTML e CSS, o que me deixou um tanto interessado por essa área. Porém, ainda não estava certo de qual carreira eu realmente queria seguir. Foi quando em 2021 eu ingressei na faculdade e fui apresentado para diversas áreas da tecnologia. <br></br><br></br>
                Pouco tempo após entrar na faculdade decidi me especializar em desenvolvimento web por ser a área da qual mais me identifico e por gostar bastante de web design. Meu principal foco hoje é aprender e desenvolver minha habilidades através de cursos online e materiais gratuitos espalhados pela internet para me inserir no mercado e aprender mais. Também estou cursando Sistemas de Informação no  <cite><a href="https://www.unifoa.edu.br" target="_blank">Centro Universitário Oswaldo Aranha</a></cite> em Volta Redonda (RJ) cidade em que nasci.
                </p>
            </About>

        </Container>

        </>
    )
}