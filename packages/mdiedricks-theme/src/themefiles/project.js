import React from "react";
import { connect, styled } from "frontity";
import getProjectDate from "./util/getProjectDate";

const Project = ({ state }) => {
  // get current URL
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const fMedia = state.source.attachment[post.featured_media].source_url;
  const projectDate = getProjectDate(post.date, "year");
  console.log(post);

  return (
    <Content>
      <ImageHolder>
        <FeaturedImage src={fMedia} />
      </ImageHolder>
      <ProjectTitle>{post.title.rendered}</ProjectTitle>
      <ProjectDetails>
        <VerticalLine />
        <ProjectDate>{projectDate}</ProjectDate>
      </ProjectDetails>
      <ProjectBody
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </Content>
  );
};

export default connect(Project);

// * Colours
// const bgcol = `#0F0104`; // dark red
// const col1 = `#529840`; // green
// const col2 = `#DC4F31`; // red
// const col3 = `#FFE6E0`; // white

const bgcol = `#0F0104`; // dark red
const bgcol2 = `#2b050c`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const ProjectTitle = styled.h1`
  margin: 1rem 0 1rem 0;
`;
const ProjectDate = styled.p`
  font-size: 0.9rem;
  color: ${col2};
`;
const ProjectBody = styled.div`
  text-align: justify-left;
  h1,
  h2,
  h4,
  h5 {
    margin: 1rem 0 2rem 0;
  }
  ul,
  ol {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  li {
    margin-left: 1rem;
  }
  img {
    width: 70%;
    height: auto;
    margin: 1rem auto;
  }
  figure {
    text-align: center;
  }
  figcaption {
    margin-bottom: 2rem;
    font-size: 0.7rem;
  }
  p {
    margin: 2rem 0;
  }
  blockquote {
    padding: 0.5rem 2rem;
    color: ${col2};
    text-align: center;
  }
  a {
    color: ${col2};
    text-decoration: none;
    :hover {
      color: ${col1};
    }
  }
`;

// * Layout ====
const Content = styled.div`
    color: ${col3};
    width: 60%;
    margin 0 auto 2rem auto;
    @media(max-width:481px) {
        width: 100%;          
    }
    @media(min-width:481px) and (max-width:768px){
        width: 90%;
    }
    @media(min-width:768px) and (max-width:1200px){
        width: 70%;
    }
    @media(min-width:1200px){
      width: 80%;
      max-width: 1100px;
    }
`;

const ProjectDetails = styled.div`
  display: flex;
  margin: 1rem 0;
`;
const VerticalLine = styled.div`
  width: 1px;
  background-color: ${col2};
  margin-right: 1rem;
`;
const Divider = styled.div`
  background-color: ${col2};
  height: 1px;
  width: 60%;
  margin: 0 auto;
`;

// * Components ====
const ImageHolder = styled.div`
  width: 100%;
  height: 25vh;
  overflow: hidden;
  margin-bottom: 2rem;
`;
const FeaturedImage = styled.img`
  width: 100%;
  opacity: 0.8;
`;
