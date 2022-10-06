import { Call } from "../../components/Chamada/style.js";
import { Box, InfoBox, Container } from "./style";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    return (
        <>
        <Call id="projects">Projetos</Call>
        <section>
            <Container>
                <Box>
                    <div>
                        <img src="/img/projeto1.png"></img>
                    </div>

                    <InfoBox>
                        <h5>FRONTEND MENTOR - FLEXBOX RESPONSIVE</h5>
                        <h6>html | css</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"><FaGithub size={22}/></a>
                            </aside>
                            <aside>
                                <a href="#" id="visit">visitar →</a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

                <Box>
                    <div>
                        <img src="/img/projeto2.png"></img>
                    </div>

                    <InfoBox>
                        <h5>FRONTEND MENTOR - FYLO DARK THEME</h5>
                        <h6>html | css | sass</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"><FaGithub size={22}/></a>
                            </aside>
                            <aside>
                                <a href="#" id="visit">visitar →</a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

                <Box>
                    <div>
                        <img src="/img/projeto3.png"></img>
                    </div>

                    <InfoBox>
                        <h5>PROJETO JS QUIZ</h5>
                        <h6>html | css | js</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"><FaGithub size={22}/></a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

                <Box>
                    <div>
                        <img src="/img/projeto4.png"></img>
                    </div>

                    <InfoBox>
                        <h5>LANDING PAGES</h5>
                        <h6>html | css | js</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"><FaGithub size={22}/></a>
                            </aside>
                            <aside>
                                <a href="#" id="visit">visitar →</a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

                <Box>
                    <div>
                        <img src="/img/pnone.png"></img>
                    </div>

                    <InfoBox>
                        <h5>in coming...</h5>
                        <h6>loading</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"></a>
                            </aside>
                            <aside>
                                <a href="#" id="visit"></a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

                <Box>
                    <div>
                        <img src="/img/pnone.png"></img>
                    </div>

                    <InfoBox>
                        <h5>in coming...</h5>
                        <h6>loading</h6>

                        <div>
                            <aside>
                                <a href="#" id="git"></a>
                            </aside>
                            <aside>
                                <a href="#" id="visit"></a>
                            </aside>
                        </div>
                    </InfoBox>
                </Box>

            </Container>
        </section>

        </>
    )
}