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
                    <h1>Lucas Cupertino</h1>
                    
                    <h3>Desenvolvedor Web (junior)</h3>
                </Profile>


                <Navbar>
                    <ul>
                        <li><a href="#"><BsInstagram size={25}/></a></li>
                        <li><a href="#"><FaLinkedin size={25}/></a></li>
                        <li><a href="#"><FaGithub size={25}/></a></li>
                        <li><a href="#"><FaPaperPlane size={25}/></a></li>
                    </ul>
                </Navbar>
            </Container>
        </>
    )
}