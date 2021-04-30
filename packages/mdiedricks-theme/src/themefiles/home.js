import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import Link from "./link";
import RecentProject from "./Components/recentProject";
import RecentPost from "./Components/recentPost";

const Home = ({ state, actions }) => {
  // * retrieve posts from wp-api
  useEffect(() => {
    actions.source.fetch("/logbook/");
    actions.source.fetch("/projects/");
  }, []);

  let posts = [];
  let projects = [];
  // * assign variable name to posts now stored in state
  const postsData = state.source.get("/logbook/");
  const projectsData = state.source.get("/projects/");

  if (projectsData.isReady) {
    projects = projectsData.items
      .slice(0, 5)
      .map(({ type, id }) => state.source[type][id]);
    for (let obj of projects) {
      obj.imageObj = state.source.attachment[obj.featured_media].source_url;
    }
  }
  if (postsData.isReady) {
    posts = postsData.items
      .slice(0, 3)
      .map(({ type, id }) => state.source[type][id]);
  }

  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <HeroDiv>
        <MainText>Software Developer & Designer</MainText>
        <Paragraph>
          I enjoy building anything that involves code, electronics, computers
          and art! Have a look at some of my
          <TextLink href="#recent_projects"> projects</TextLink> or see what
          I've been
          <TextLink href="#recent_posts"> writing</TextLink> about lately.
        </Paragraph>
        <CTAButton href="http://linkedin.com/in/mdiedricks/" target="_blank">
          Get in touch!
        </CTAButton>
      </HeroDiv>

      <Divider id="recent_projects" />

      <SectionTitle>Recent Projects</SectionTitle>
      <ProjectDiv>
        {
          projectsData.isReady
            ? projects.map((proj) => (
                <RecentProject proj={proj} key={proj.id} />
              ))
            : null // TODO add "loading" article here
        }
      </ProjectDiv>

      <ButtonRow>
        <CTAButtonSml href="/projects">Explore projects</CTAButtonSml>
      </ButtonRow>

      <Divider id="recent_posts" />

      <SectionTitle>Recent logs</SectionTitle>
      <LogDiv>
        {
          postsData.isReady
            ? posts.map((post) => <RecentPost post={post} key={post.id} />)
            : null // TODO add "loading" article here
        }
      </LogDiv>

      <ButtonRow>
        <CTAButtonSml href="/logbook">Explore Logs</CTAButtonSml>
      </ButtonRow>
    </div>
  );
};

export default connect(Home);

// Heights of various elements
// nav 71
// title 88
// cta 101
// divider  16 1 16
// footer 70
// * Colours
const bgcol = `#0F0104`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const SectionTitle = styled.p`
  color: ${col2};
  margin: 2rem 0;
  font-size: 1.25rem;
`;
const MainText = styled.h1`
  font-size: 48px;
  padding: 0 0 1rem 0;
`;
const Paragraph = styled.p`
  font-size: 1.5rem;
  padding: 1rem 0 1rem 0;
  margin-bottom: 1rem;
`;
const TextLink = styled.a`
  text-decoration: none;
  color: ${col1};
  transition: color 0.3s;
  :hover {
    color: ${col2};
  }
`;

// * Layout =====
const HeroDiv = styled.section`
  color: ${col3};
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-height: calc(100vh - 71px - 16px);
  padding: 0 15%;
`;
const ProjectDiv = styled.section`
  min-height: calc(100vh - 88px - 101px);
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 1100px;
  }
`;
const LogDiv = styled.section`
  min-height: calc(100vh - 88px - 101px - 70px);
  display: flex;
  flex-direction: column;
  @media (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    max-width: 1100px;
  }
`;
const Divider = styled.div`
  background-color: ${col2};
  height: 1px;
  width: 60%;
  margin: 1rem auto;
`;
const ButtonRow = styled.section`
  margin: 2rem 0;
`;

// * Components =====
const CTAButton = styled.a`
  display: inline-block;
  border: 1px solid ${col1};
  color: ${col1};
  margin: 0 auto;
  padding: 1rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  :hover {
    border: 1px solid ${col2};
    transition: border 0.2s;
    color: ${col2};
    transition: color 0.2s;
  }
`;
const CTAButtonSml = styled.a`
  display: inline-block;
  border: 1px solid ${col1};
  color: ${col1};
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  :hover {
    border: 1px solid ${col2};
    transition: border-color 0.2s;
    color: ${col2};
    transition: color 0.2s;
  }
`;
