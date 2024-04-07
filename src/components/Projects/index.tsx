import React, { useEffect, useState } from "react";
import { Banner, Container, InfoText, Project, ProjectContent, ProjectInfo, ProjectText, SkillInfo, Subtitle, Title } from "./styles";
import 'swiper/css';
import 'swiper/css/navigation';
import Loader from "../Loader";
import { obj } from "../../content";
import { LangContext } from "../../Context/useContext";
import { HiExternalLink } from "react-icons/hi";
// import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
// import { AiFillFolderOpen } from "react-icons/ai";
// import { obj } from "../../content";

interface IGit {
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

function Projects() {
  const [data, setData] = useState<IGit[]>([]);
  const [projects, setProjects] = useState<IGit[]>([]);
  const [loader, setLoader] = useState<boolean>(false)
  const { lang } = React.useContext(LangContext)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reposName = ["animais-fantasticos", 'Dogs', 'Github-user-search', "appreview"];

  async function getUser() {
    try {
      setLoader(true)
      const username = 'lxcxs';
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const json = await response.json();
      setData(json);
      setLoader(false)
      console.log(json)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const filteredProjects = data.filter((item) => reposName.includes(item.name));
    setProjects(filteredProjects);
  }, [data]);

  return (
    <Container id="projetos">
      <Title>{lang ? obj.ptbr.project.title : obj.en.project.title}</Title>
      <InfoText>{lang ? obj.ptbr.project.subtitle : obj.en.project.subtitle}</InfoText>

      <ProjectContent id="slide">
        {loader ? (
          <Loader />
        ) : (
          projects.map((item) => (
            <Project key={item.name}>
              <ProjectInfo>
                <SkillInfo>
                  <p>{item.language}</p>
                </SkillInfo>
                <div className="linkto">
                  <Subtitle href={item.html_url} target="_blank">
                    {item.name}
                  </Subtitle>
                  {item.homepage &&
                    <Subtitle id="linkto" href={item.homepage} target="_blank">
                      {lang ? obj.ptbr.project.link.url : obj.en.project.link.url}
                      <HiExternalLink />
                    </Subtitle>}

                </div>
                <ProjectText>{item.description || "Este projeto não possui descrição."}</ProjectText>
              </ProjectInfo>
              <Banner></Banner>
            </Project>
          ))
        )}
        <p id="more">
          <a id="linkto" href="https://github.com/Lxcxs?tab=repositories" target="_blank">

            {lang ? obj.ptbr.project.linkto.t1 : obj.en.project.linkto.t1}
          </a>
          {lang ? obj.ptbr.project.linkto.t2 : obj.en.project.linkto.t2}
        </p>
      </ProjectContent>
    </Container>
  );
}

export default Projects;
