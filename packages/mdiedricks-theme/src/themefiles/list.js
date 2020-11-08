import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';

const List = ({state}) => {
    // get current URL address - store in 'data'
    const data = state.source.get(state.router.link)
    let projects = [];
    
    // check the route if projects page or logbook page
    if(data.isReady && state.router.link === '/projects/'){
        projects = data.items.slice(0,12).map(({type, id}) => state.source[type][id]);
    } else {
        projects = data.items.slice(0,5).map(({type, id}) => state.source[type][id]);
    }

    if( state.router.link === '/projects/'){
        return(
            <ProjectContainer>
                {projects.map( proj => {
                return (
                    <ProjectCard key={proj.id}>
                        <ProjectImage src='https://via.placeholder.com/450x280' />
                        <ProjectTitle href={proj.link}>{proj.title.rendered}</ProjectTitle>
                    </ProjectCard>
                )
            })}
            </ProjectContainer>
        )
    } else if (state.router.link === '/logbook/'){
        return (
            <PostContainer>
                {projects.map( post => {
                return (
                    <PostCard key={post.id}>
                        <ImageHolder>
                            <PostImage src='https://via.placeholder.com/450x280' />
                        </ImageHolder>
                        <PostTitle href={post.link}> {post.title.rendered}</PostTitle>
                        {/* <PostDate>
                            {Date.parse(props.post.date)} 
                        </PostDate>                 */}
                        <PostEx dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                    </PostCard>   
                )
            })}
            </PostContainer>
        )
    }
}

export default connect(List);

// * Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography =====
const ProjectTitle = styled(Link)`
    font-size: 1.2rem;
    color: ${col1};
    text-decoration: none;
    position: absolute;
    bottom: 10px;
    left: 10px;
    padding: 1rem;
    visibility: hidden;
    cursor: pointer;
    transition: visibility 0.2s;
    :hover{color: ${col2};}
    @media (max-width:600px) and (orientation: portrait) {
        visibility: visible; 
    }
`
const PostTitle = styled(Link)` // TODO edit this
    font-size: 1.5rem;
    font-weight: bold;
    color: ${col1};
    text-decoration: none;
    :hover{
        color: ${col2};
        cursor: pointer;
    }
    @media (max-width:600px) and (orientation: portrait) {
        visibility: visible; 
    }
`
const PostEx = styled.div` // TODO edit this
    padding: 1rem 0;
`

// * Layout =====
const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;

    @media(max-width:481px) {
        grid-template-columns: 1fr;          
    }
    @media(min-width:481px) and (max-width:768px){
        grid-template-columns: 1fr 1fr;
    }
    @media(min-width:768px) and (max-width:1200px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    
`

const PostContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
`

// * Components =====
const ProjectCard =styled.div`
    color: ${col1};
    position: relative;
    :hover{
        > img {
            opacity: 1;
            transition: opacity 0.3s;
            border: 2px solid ${col2};
        }
        a {
            visibility: visible;
            transition: visibility 0.3s;
        }
    }
    overflow: hidden;
`
const ProjectImage = styled.img`
    opacity: 0.5;
    border: 2px solid ${bgcol};
    transition: opacity 0.5s;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

// * ======= POST COMPONENTS ======= 

const PostCard =styled.div`// TODO edit this
    color: ${col1};
    margin: 1rem auto 2rem auto;
    :hover{
        img {
            border: 2px solid ${col2};
            opacity: 1;
            transition: opacity 0.3s;
        }
        a {
            visibility: visible;
            transition: visibility 0.3s;
        }
        p {
            color: ${col3};
        }
    }
    
    @media(min-width:768px) and (max-width:1200px){
        width: 80%;
    }
    @media(min-width:1200px) {
        width: 70%; 
    }
`
const ImageHolder = styled.div` // TODO edit this
    margin-bottom: 1rem;
    overflow: hidden;
`
const PostImage = styled.img` // TODO edit this
    opacity: 0.5;
    border: 2px solid ${bgcol};
    transition: opacity 0.5s;
    width: 100%;
    height: 100%;
    object-fit: cover;
`