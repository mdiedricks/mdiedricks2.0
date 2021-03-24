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
      .slice(0, 3)
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
        <CTAButton>
          <a href="http://linkedin.com/in/mdiedricks/" target="_blank">
            Get in touch!
          </a>
        </CTAButton>
      </HeroDiv>
      <Divider />

      <SectionTitle id="recent_projects">Recent Projects</SectionTitle>
      <ProjectDiv>
        {
          projectsData.isReady
            ? projects.map((proj) => (
                <RecentProject proj={proj} key={proj.id} />
              ))
            : null // TODO add "loading" article here
        }
      </ProjectDiv>
      <CTAButtonSml>
        <a href="/projects">Explore projects</a>
      </CTAButtonSml>
      <Divider />

      <SectionTitle id="recent_posts">Recent logs</SectionTitle>
      <LogDiv>
        {
          postsData.isReady
            ? posts.map((post) => <RecentPost post={post} key={post.id} />)
            : null // TODO add "loading" article here
        }
      </LogDiv>
      <CTAButtonSml>
        <a href="/logbook">Explore Logs</a>
      </CTAButtonSml>
    </div>
  );
};

export default connect(Home);
// * Colours
// const bgcol = `#0F0104`; // dark red
// const col1 = `#529840`; // green
// const col2 = `#DC4F31`; // red
// const col3 = `#FFE6E0`; // white

const bgcol = `#0F0104`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const SectionTitle = styled.h3`
  color: ${col2};
  margin: 2rem 0;
`;
const MainText = styled.h1`
  font-size: 48px;
  padding: 0 0 1rem 0;
`;
const Paragraph = styled.p`
  font-size: 1.6rem;
  padding: 1rem 0 1rem 0;
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
  min-height: calc(100vh - 70px - 71px);
  padding: 0 15%;
`;
const ProjectDiv = styled.section`
  min-height: calc(100vh - 70px - 71px);
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @media (min-width: 481px) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    max-width: 1100px;
  }
`;
const LogDiv = styled.div`
  min-height: calc(100vh - 70px - 71px);
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
  margin: 0 auto;
`;

// * Components =====
const CTAButton = styled.div`
  background-color: ${bgcol};
  border: 1px solid ${col1};
  padding: 12px 20px;
  margin: 1.5rem auto;
  width: auto;
  text-align: center;
  cursor: pointer;
  :hover {
    border: 1px solid ${col2};
    transform: border-color 0.3s;
    a {
      color: ${col2};
      transform: color 0.3s;
    }
  }
  a {
    text-decoration: none;
    color: ${col1};
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
const CTAButtonSml = styled.button`
  background-color: ${bgcol};
  border: 1px solid ${col1};
  padding: 8px 16px;
  margin: 1.5rem auto;
  text-align: center;
  cursor: pointer;
  :hover {
    border: 1px solid ${col2};
    transform: border-color 0.3s;
    a {
      color: ${col2};
      transform: color 0.3s;
    }
  }
  a {
    text-decoration: none;
    color: ${col1};
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
