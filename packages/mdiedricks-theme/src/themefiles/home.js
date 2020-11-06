import React, { useEffect } from 'react'
import { connect, styled } from 'frontity'
import Link from './link';

const Home = ({state, actions}) => {
    // * this should get the posts from ...somewhere
    useEffect(() => {
        actions.source.fetch('/logbook/');
    }, []);

    let posts = [];
    // * this will add fetched data to state
    const data = state.source.get('/logbook/')
    console.log(data)

    if(data.isReady){
        // posts = data.items.map(({type, id}) => state.source[type][id]);
        // * use below alternative to slice results
        posts = data.items.slice(0,3).map(({type, id}) => state.source[type][id]);
    }
    
    return(
        <div>
            <SectionDiv>
                <MainText>Creative Technologist</MainText>
                <Paragraph>I enjoy building anything that involves code, electronics, computers and art!</Paragraph>
                <CTAButton href='/contact'>Get in touch!</CTAButton>
            </SectionDiv>
            {/* // * below section will display recentposts when it's fixed */}
            <SectionDiv>
                <SectionTitle>Recent Posts</SectionTitle>
                <Paragraph>See what I've been working on recently</Paragraph>
                {data.isReady ? 
                    posts.map((p) => 
                    <a href={p.link} key={p.id}> {p.title.rendered} </a>
                    ): null
                }
            </SectionDiv>            
            <SectionDiv>
                <SectionTitle>Latest log entries</SectionTitle>
                <Paragraph>See what I've been writing about</Paragraph>
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
    margin: 20% 1rem 1rem 1rem;
    margin-top: auto;
    font-size: 48px;
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
    min-height: calc(100vh - 70px - 71px);
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