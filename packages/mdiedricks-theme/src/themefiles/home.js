import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link';

const Home = ({state, actions}) => {
    // * this should get the posts from ...somewhere
    useEffect(() => {
        actions.source.fetch('/logbook/');
        
    }, []);

    const data = state.source.get('/logbook/')
    console.log(data)
    // const posts = data.items.map(({type, id}) => state.source[type][id]);
    const posts = data.items.slice(0,1).map(({type, id}) => state.source[type][id]);

    return(
        <div>
            <SectionDiv>
                <MainText>Creative Technologist</MainText>
                <Paragraph>I enjoy building anything with</Paragraph>
                <CTAButton href='/contact'>Get in touch!</CTAButton>
            </SectionDiv>
            <SectionDiv>
                <SectionTitle>Recent Posts</SectionTitle>
                <Paragraph>See what I've been working on recently</Paragraph>
                {posts.map((p) => 
                    <a href={p.link} key={p.id}> {p.title.rendered} </a>
                )}
            </SectionDiv>            
        </div>
    )
    
}

export default connect(Home)
// Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const SectionTitle = styled.h4`  
`
const MainText = styled.h1`
    margin: 0 1rem 1rem 1rem;
`
const Subtext = styled.h2`
    margin: 1rem 1rem 1rem 1rem;
`
const Paragraph = styled.p`
    margin: 1rem 1rem 1rem 1rem;
`

// * Layout =====
const SectionDiv = styled.section`
    text-align: center;
    background-color: ${col1};
    color: ${col3};
    padding: 1rem 1rem;
    min-height: cal(100vh-50px);
`

// * Components =====
const CTAButton = styled(Link)`
    background-color: ${bgcol};
    border: 1px solid ${col2};
    color: ${col2};
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
`
const ArticleLink = styled(Link)`
    text-decoration: none;
`