import { Container, Navbar, Profile } from "./style";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function Menu() {

    return(
        <>
            <Container>
                <Profile id="pf">
                    <div>
                        <img src="../../public/img/eu.png"></img>
                    </div>

                    <div className="info-profile">
                        <h1>Lucas Cupertino</h1>
                        <h3>Desenvolvedor Web (junior)</h3>
                    </div>

                    <Navbar>
                        <ul>
                            <li><a href="https://www.instagram.com/_luquinsta/" target='_blank'><BsInstagram size={27}/></a></li>
                            <li><a href="https://www.linkedin.com/in/lucas-cupertino-8b0637219/" target='_blank'><FaLinkedin size={27}/></a></li>
                            <li><a href="https://github.com/Lxcxs" target='_blank'><FaGithub size={27}/></a></li>
                            <li><a href="mailto:olucas.cdev@gmail.com" target='_blank'><FaPaperPlane size={27}/></a></li>
                        </ul>
                    </Navbar>
                </Profile>


            </Container>
        </>
    )
}