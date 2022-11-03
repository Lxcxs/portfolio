import { Container, ProfileMenu } from './style'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function MenuMobile() {
    
    function handdleClick() {
        let nav = document.querySelector('nav');
        nav.classList.toggle('ativo')
    }

    return (
        <Container>

            <ProfileMenu id="pf" onClick={handdleClick}>
                <div>
                    <img src="../../public/img/eu.png"></img>
                    
                </div>
                <p>SOCIAL</p>
            </ProfileMenu>

            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/_luquinsta/" target='_blank'><BsInstagram size={32}/></a></li>
                    <li><a href="https://www.linkedin.com/in/lucas-cupertino-8b0637219/" target='_blank'><FaLinkedin size={32}/></a></li>
                    <li><a href="https://github.com/Lxcxs" target='_blank'><FaGithub size={32}/></a></li>
                    <li><a href="mailto:olucas.cdev@gmail.com" target='_blank'><FaPaperPlane size={32}/></a></li>
                </ul>
            </nav>

        </Container>
    )
}