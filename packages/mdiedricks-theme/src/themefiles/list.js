import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import getProjectDate from "./util/getProjectDate";

const List = ({ state }) => {
  // get current URL address - store in 'data'
  const data = state.source.get(state.router.link);
  let projects = [];
  let posts = [];

  // check the route if projects page or logbook page
  if (data.isReady && state.router.link === "/projects/") {
    projects = data.items
      .slice(0, 12)
      .map(({ type, id }) => state.source[type][id]);
    for (let obj of projects) {
      obj.imageObj = state.source.attachment[obj.featured_media].source_url;
    }
  } else if (data.isReady && state.router.link === "/logbook/") {
    posts = data.items
      .slice(0, 5)
      .map(({ type, id }) => state.source[type][id]);
    for (let obj of posts) {
      obj.imageObj = state.source.attachment[obj.featured_media].source_url;
      obj.postDate = getProjectDate(obj.date);
      obj.logID = obj.acf.log_id;
      console.log(obj);
    }
  }

  if (state.router.link === "/projects/") {
    return (
      <ProjectContainer>
        {projects.map((proj) => {
          return (
            <ProjectCard key={proj.id}>
              <ProjectBG className="divBG">
                <ProjectTitle href={proj.link}>
                  {proj.title.rendered}
                </ProjectTitle>
              </ProjectBG>
              <ProjectImage src={proj.imageObj} />
            </ProjectCard>
          );
        })}
      </ProjectContainer>
    );
  } else if (state.router.link === "/logbook/") {
    return (
      <PostContainer>
        {posts.map((post) => {
          return (
            <PostCard key={post.id}>
              <PostMeta>
                <PostDate>{post.postDate}</PostDate>
                <PostDate>ID: {post.logID}</PostDate>
                <Underline />
              </PostMeta>
              <PostTitle href={post.link}> {post.title.rendered}</PostTitle>
              <PostEx
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </PostCard>
          );
        })}
      </PostContainer>
    );
  }
};

export default connect(List);

// * Colours =======
// const bgcol = `#0F0104`; // dark red
// const bgcol2 = `#1e0308`; // dark red
// const col1 = `#529840`; // green
// const col2 = `#DC4F31`; // red
// const col3 = `#FFE6E0`; // white

const bgcol = `#0F0104`; // dark red
const bgcol2 = `#2b050c`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * ======= PROJECT =======

// * Typography =====
const ProjectTitle = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${col1};
  text-decoration: none;
  position: absolute;
  bottom: 20px;
  visibility: none;
  transition: visibility 0.4s ease;
  left: -300px;
  transition: left 1s ease;
  cursor: pointer;
  z-index: 2;
  @media (max-width: 600px) and (orientation: portrait) {
  }
  :hover {
    color: ${col2};
  }
`;
const PostDate = styled.span`
  color: ${col3};
`;
const ProjectBG = styled.div`
  background-color: ${bgcol2};
  position: absolute;
  height: 33%;
  width: 100%;
  bottom: 0px;
  opacity: 0;
  transition: opacity 0.6s ease;
`;

// * Components =====
const ProjectCard = styled.article`
  position: relative;
  border: 1px solid ${bgcol};
  :hover {
    border: 1px solid ${col2};
    > img {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
    .divBG {
      opacity: 0.8;
      transition: opacity 0.6s ease;
    }
    a {
      visibility: visible;
      transition: visibility 0.4s ease;
      left: 20px;
      transition: left 1s ease;
    }
  }
  overflow: hidden;
`;
const ProjectImage = styled.img`
  opacity: 0.8;
  overlay
  transition: opacity 0.2s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// * Layout =====
const ProjectContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;

  @media (max-width: 481px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// * ======= POSTS =======

// * Typography =====
const PostTitle = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${col1};
  text-decoration: none;
  :hover {
    color: ${col2};
    cursor: pointer;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    visibility: visible;
  }
`;
const PostEx = styled.div`
  padding: 1rem 0;
  color: ${col3};
`;
// * Layout =====
const PostContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: 1fr;
  // max-width: 960px;
`;
const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
`;
const Underline = styled.div`
  background-color: ${col2};
  height: 1px;
  width: 100px;
  left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

// * Components =====
const PostCard = styled.article`
  padding: 1rem;
  color: ${col1};
  margin: 1rem auto 0 auto;
  border: 1px solid ${bgcol};
  :hover {
    border: 1px solid ${col2};
    background-color: ${bgcol2};
    img {
      opacity: 1;
      transition: opacity 0.3s;
    }
    a {
      visibility: visible;
      transition: visibility 0.3s;
    }
    .holder {
      border: 2px solid ${col2};
    }
  }
  width: 80%;
  @media (min-width: 1200px) {
    max-width: 1100px;
  }
`;
