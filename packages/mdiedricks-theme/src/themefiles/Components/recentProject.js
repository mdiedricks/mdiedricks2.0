import React from "react";
import { connect, styled, css } from "frontity";
import Link from "../link";
import getProjectDate from "../util/getProjectDate";

function recentProject(props) {
  const projDate = getProjectDate(props.proj.date, "year");
  const textContent = props.proj.excerpt.rendered.slice(3, 100) + "...";

  return (
    <ProjCard>
      <ImageHolder>
        <Image src={props.proj.imageObj}></Image>
      </ImageHolder>
      <TextHolder>
        <ProjTitle href={props.proj.link} key={props.proj.id} target="_top">
          {props.proj.title.rendered}
        </ProjTitle>
        <ProjDate>{projDate}</ProjDate>
        <Underline />
        <ProjEx>{textContent}</ProjEx>
      </TextHolder>
    </ProjCard>
  );
}

export default connect(recentProject);

// * Colours ==========
const bgcol = `#0F0104`; // dark red
const bgcol2 = `#2b050c`; // dark red
const col1 = `#5fb04a`; // green
const col2 = `#e67f69`; // red
const col3 = `#FFE6E0`; // white

// * Typography ==========
const ProjTitle = styled(Link)`
  font-size: 1.25rem;
  color: ${col1};
  text-decoration: none;
  transition: color 0.2s;
  :hover {
    color: ${col2};
  }
`;
const ProjDate = styled.p`
  margin: 0.5rem 0;
  color: ${col3};
`;
const ProjEx = styled.p`
  margin: 1rem 0 0 0;
  color: ${col3};
  transition: color 0.2s;
`;
// * Layout ==========
const ProjCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  max-height: 400px;
  border: 1px solid ${bgcol};
  transition: border-color 0.3s;
  :hover {
    border: 1px solid ${col2};
    background-color: ${bgcol2};
  }
`;
const ImageHolder = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto 0.5rem;
  min-height: 115px;
  max-height: 120px;
  width: 100%;
  border: 1px solid ${col2};
`;
const Image = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: fill;
`;
const TextHolder = styled.div`
  text-align: left;
`;
const Underline = styled.div`
  background-color: ${col2};
  height: 0.1px;
  width: 60px;
  margin: 0.5rem 0;
  left: 0;
`;
