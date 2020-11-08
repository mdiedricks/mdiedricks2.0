import React, { useEffect } from 'react'
import { connect, styled, css } from 'frontity'

 const Project = ({ state }) => {
    // get current URL
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fMedia = state.source.attachment[post.featured_media].source_url; 
    console.log(post);
    console.log(fMedia);
    
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
const bgcol = `#011006`; // dark green
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
    li{
        list-style-type: none;
    }
    img{
        width: 100%;
        height: auto;
    }
    figure{
        text-align: center;
    }
    figcaption{
        margin-bottom: 1rem;
        font-size: 0.7rem;
    }
    p{
        margin: 1rem auto;
        width: 98%;
    }
    blockquote{
        padding: 0.5rem 2rem;
        color: ${col2};
        text-align: center;
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
    overflow: hidden;
`
const FeaturedImage = styled.img`
    max-width: 100%;
`
