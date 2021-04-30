import React from "react";
import { connect, styled } from "frontity";
import getProjectDate from "./util/getProjectDate";

const Post = ({ state }) => {
  // window.scrollTo(0, 0);

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const fMedia = state.source.attachment[post.featured_media].source_url;
  const postDate = getProjectDate(post.date);
  const logID = post.acf.log_id;

  return (
    <Content>
      <ImageHolder>
        <FeaturedImage src={fMedia} />
      </ImageHolder>
      <PostDetails>
        <PostTitle>{post.title.rendered}</PostTitle>
        <HorizontalLine />
        <PostDate>
          <strong>Posted </strong> {postDate} <strong>ID </strong> {logID}
        </PostDate>
      </PostDetails>
      <PostBody dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Content>
  );
};

export default connect(Post);

// * Colours
const bgcol = `#0F0104`; // dark red
const bgcol2 = `#2b050c`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const PostTitle = styled.h1`
  margin: 2rem auto 1rem;
`;
const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${col2};
`;
const PostBody = styled.div`
  text-align: justify-left;
  margin: 2rem auto 10rem;
  @media (max-width: 481px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 80%;
    max-width: 1100px;
  }
  ul,
  ol {
    margin-left: 1rem;
    margin-right: 1rem;
    li {
      margin: 1rem 0;
    }
    img {
      margin: 1rem 0;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
  figure {
    text-align: center;
    margin-top: 3rem;
  }
  figcaption {
    margin: 1rem auto 3rem;
    font-size: 0.7rem;
  }
  p {
    margin: 1rem auto 1.4rem;
    line-height: 1.4rem;
    letter-spacing: 0.03rem;
  }
  blockquote {
    padding: 0.5rem 2rem;
    color: ${col2};
    text-align: center;
  }
  h4 {
    margin: 0 auto 1.4rem;
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
  margin: 0 auto;
`;

const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;
`;
const HorizontalLine = styled.div`
  height: 1px;
  width: 50%;
  background-color: ${col2};
  margin: 1rem auto;
`;

// * Components ====
const ImageHolder = styled.div`
  width: 100%;
  overflow: hidden;
`;
const FeaturedImage = styled.img`
  width: 100%;
  // left: 50%;
  // margin-left: -50vw;
  // margin-right: -50vw;
  // max-width: 100vw;
  // position: relative;
  // right: 50%;
  // width: 100vw;
`;
