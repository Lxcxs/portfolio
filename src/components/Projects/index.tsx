import { Navigation } from "swiper/modules";
import { Banner, Container, InfoText, Link, LinkContent, Project, ProjectContent, ProjectInfo, ProjectText, SkillInfo, Subtitle, Title } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";

function Projects() {

  return (
    <Container id="projetos">
      <Title>
        Projetos
      </Title>

      <InfoText>
        !! Site em manutenção !!  Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! Site em manutenção !! 
      </InfoText>
      <ProjectContent id="slide">

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Project>
              <Banner></Banner>

              <ProjectInfo>
                <Subtitle>
                  Portfolio
                </Subtitle>

                <SkillInfo>
                  <p>
                    React, Typescrit, MongoDB
                  </p>
                </SkillInfo>

                <ProjectText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed est lorem. Proin porta vulputate vestibulum. Donec eros turpis, ultrices ut rhoncus quis, euismod et sem. Integer consectetur arcu tincidunt tellus fringilla, eu iaculis sem pharetra.
                </ProjectText>
              </ProjectInfo>

              <LinkContent>
                <Link href="#" target="_blank">
                  Visitar
                  <MdOutlineSubdirectoryArrowLeft />
                </Link>
                <Link href="#" target="_blank">
                  Código
                  <AiFillFolderOpen />  
                </Link>
              </LinkContent>
            </Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project>
              <Banner></Banner>

              <ProjectInfo>
                <Subtitle>
                  Portfolio
                </Subtitle>

                <SkillInfo>
                  <p>
                    React, Typescrit, MongoDB
                  </p>
                </SkillInfo>

                <ProjectText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed est lorem. Proin porta vulputate vestibulum. Donec eros turpis, ultrices ut rhoncus quis, euismod et sem. Integer consectetur arcu tincidunt tellus fringilla, eu iaculis sem pharetra.
                </ProjectText>
              </ProjectInfo>

              <LinkContent>
                <Link>Visitar</Link>
                <Link>Código</Link>
              </LinkContent>
            </Project>
          </SwiperSlide>
          <SwiperSlide>
            <Project>
              <Banner></Banner>

              <ProjectInfo>
                <Subtitle>
                  Portfolio
                </Subtitle>

                <SkillInfo>
                  <p>
                    React, Typescrit, MongoDB
                  </p>
                </SkillInfo>

                <ProjectText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed est lorem. Proin porta vulputate vestibulum. Donec eros turpis, ultrices ut rhoncus quis, euismod et sem. Integer consectetur arcu tincidunt tellus fringilla, eu iaculis sem pharetra.
                </ProjectText>
              </ProjectInfo>

              <LinkContent>
                <Link>Visitar</Link>
                <Link>Código</Link>
              </LinkContent>
            </Project>
          </SwiperSlide>
        </Swiper>
      </ProjectContent>
    </Container>
  );
}

export default Projects;