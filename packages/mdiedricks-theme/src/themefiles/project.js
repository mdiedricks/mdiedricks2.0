import React from 'react'
import { connect, styled } from 'frontity'

 const Project = ({ state }) => {
    // get current URL
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fMedia = state.source.attachment[post.featured_media].source_url; 
    
    return (
        <Content>
            <ImageHolder>
                <FeaturedImage src={fMedia} />
            </ImageHolder>
            <ProjectTitle>{post.title.rendered}</ProjectTitle>
            <ProjectDate><strong>Date: </strong>{post.date}</ProjectDate>
            <ProjectBody dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </Content>
    )
}

export default connect(Project);

// * Colours
const bgcol = `#0F0104`; // dark red
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const ProjectTitle = styled.h1`
    margin: 1rem 0 1rem 0;
`
const ProjectDate = styled.p`
    font-size: 0.9rem;
    color: ${col2};
    margin: 1rem 0 1rem 0; 
`
const ProjectBody = styled.div`
    text-align: justify-left;
    h1, h2, h4, h5{
        margin: 1rem 0 2rem 0;
        // margin-bottom: 2rem;
    }
    ul, ol{
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    li{
        margin-left: 1rem;
    }
    img{
        width: 70%;
        height: auto;
        margin: 1rem auto;
    }
    figure{
        text-align: center;
    }
    figcaption{
        margin-bottom: 1rem;
        font-size: 0.7rem;
    }
    p{
        margin: 2rem auto;
        width: 98%;
    }
    blockquote{
        padding: 0.5rem 2rem;
        color: ${col2};
        text-align: center;
    }
    a{
        color: ${col2};
        text-decoration: none;
        :hover{
            color: ${col1};
        }
    }
`

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
        width: 50%;
    }
`

// * Components ====
const ImageHolder = styled.div`
    width: 100%;
    height: 25vh;
    overflow: hidden;
    margin-bottom: 2rem;
`
const FeaturedImage = styled.img`
    width: 100%;
    opacity: 0.8;
`
