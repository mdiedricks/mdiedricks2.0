import React, { useEffect } from 'react';
import { connect, styled, css } from 'frontity';
import Link from './link';
import RecentProject from './Components/recentProject';
import RecentPost from './Components/recentPost';

const Home = ({state, actions}) => {
    // * retrieve posts from wp-api
    useEffect(() => {
        actions.source.fetch('/logbook/');
        actions.source.fetch('/projects/');
    }, []);

    let posts = [];
    let projects = [];
    // * assign variable name to posts now stored in state
    const postsData = state.source.get('/logbook/')
    const projectsData = state.source.get('/projects/')
    // let fMedia = '';

    if(projectsData.isReady){
        projects = projectsData.items.slice(0,3).map(({type, id}) => state.source[type][id]);
        for(let obj of projects){
            obj.imageObj = state.source.attachment[obj.featured_media].source_url
        }

    }
    if(postsData.isReady){
        posts = postsData.items.slice(0,3).map(({type, id}) => state.source[type][id]);
    }
    
    return(
        <div css={css`text-align: center;`}>
            <HeroDiv>
                <MainText>Software Developer & Designer</MainText>
                <Paragraph>I enjoy building anything that involves code, electronics, computers and art! See what I've been <TextLink href='#recent_posts'>working</TextLink> on lately, or have a look at some of my past <TextLink href='#recent_projects'>projects</TextLink>.</Paragraph>
                <CTAButton ><a href='http://linkedin.com/in/mdiedricks/'>Get in touch!</a></CTAButton>
            </HeroDiv>
            <Divider/>

            <SectionTitle>Recent Projects</SectionTitle>
            <SectionDiv id='recent_projects'>
                {projectsData.isReady ? 
                    projects.map((proj) => 
                    <RecentProject proj={proj}  key={proj.id}/>
                    ): null // TODO add "loading" article here
                }
            </SectionDiv>
            <Divider/>

            <SectionTitle>Recent logs</SectionTitle>
            <SectionDiv id='recent_posts'>
                
                {postsData.isReady ? 
                    posts.map((post) =>
                    <RecentPost post={post} key={post.id}/> 
                    ): null // TODO add "loading" article here
                }
            </SectionDiv>
        </div>
    )
    
}

export default connect(Home)
// * Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const SectionTitle = styled.h3`
color: ${col2};
margin: 2rem 0; 
`
const MainText = styled.h1`
    font-size: 48px;
    padding: 0 0 1rem 0;
`
const Paragraph = styled.p`
    font-size: 1.6rem;
    padding: 1rem 0 1rem 0;
`
const TextLink = styled.a`
    text-decoration: none;
    color: ${col1};
    transition: color 0.3s;
    :hover{
        color: ${col2};
    }
`

// * Layout =====
const HeroDiv = styled.section`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${col3};
    min-height: calc(100vh - 70px - 71px);
    padding: 1rem 15%;
`
const SectionDiv = styled.section`
    display: grid;
    grid-template-rows: repeat(3, 1fr) 1rem;
    row-gap: 1rem;
    min-height: 100vh;
    @media(min-width:481px) and (max-width:768px){
        padding: 0;  
    }
    @media(min-width:768px) and (max-width:1200px){
        padding:0 2rem;
    }
    @media(min-width:1200px) {
        padding:0 9rem;  
    }
`
const Divider = styled.div`
    background-color: ${col2};
    height: 1px;
    width: 60%;
    margin: 0 auto;
`

// * Components =====
const CTAButton = styled.div`
    background-color: ${bgcol};
    border: 1px solid ${col1};
    padding: 12px 20px;
    margin: 1.5rem auto;
    width: auto;
    text-align: center;
    cursor: pointer;
    
    :hover{
        border: 1px solid ${col2};
        transform: border-color 0.3s;
        a{
            color: ${col2};
            transform: color 0.3s;
        }
    }
    a{
        text-decoration: none;
        color: ${col1};
        font-size: 1.2rem;
        font-weight: bold;
    }
`