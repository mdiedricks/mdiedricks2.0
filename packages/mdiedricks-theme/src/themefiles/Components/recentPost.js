import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import getProjectDate from "../util/getProjectDate";

const recentPost = (props) => {
  const postDate = getProjectDate(props.post.date);
  const logID = props.post.acf.log_id;

  return (
    <PostCard>
      <PostDetails>
        <PostDate>{postDate}</PostDate>
        <PostDate>ID: {logID}</PostDate>
        <Underline />
      </PostDetails>
      <TextHolder>
        <PostTitle href={props.post.link} key={props.post.id}>
          {props.post.title.rendered}
        </PostTitle>
        <PostEx
          dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }}
        />
      </TextHolder>
    </PostCard>
  );
};

export default connect(recentPost);

// * Colours

const bgcol = `#0F0104`; // dark red
const bgcol2 = `#2b050c`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ==========
const PostTitle = styled(Link)`
  font-size: 1.5rem;
  color: ${col1};
  text-decoration: none;
  transition: color 0.2s;
  :hover {
    color: ${col2};
  }
`;
const PostDate = styled.span`
  color: ${col3};
`;
const PostEx = styled.p`
  padding: 1rem 0 0 0;
  color: ${col3};
`;
// * Layout ==========
const PostCard = styled.div`
  display: flex;
  padding: 1.5rem;
  border: 1px solid ${bgcol};
  transition: border-color 0.3s;
  :hover {
    border: 1px solid ${col2};
    background-color: ${bgcol2};
  }
`;
const TextHolder = styled.div`
  text-align: left;
`;
const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: content;
  margin-right: 1rem;
`;
const Underline = styled.div`
  background-color: ${col2};
  height: 1px;
  width: 100px;
  left: 0;
  margin-top: 1rem;
`;
