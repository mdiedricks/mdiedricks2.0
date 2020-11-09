import React from 'react'
import { connect, styled } from 'frontity'

 const Post = ({ state }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fMedia = state.source.attachment[post.featured_media].source_url;
    // const fMedia = state.source.attachment[post.featured_media];
    console.log(fMedia);
    

    return (
        <Content>
            <ImageHolder>
                <FeaturedImage src={fMedia} />
            </ImageHolder>
            <PostTitle>{post.title.rendered}</PostTitle>
            <PostDate><strong>Posted: </strong>{post.date}</PostDate>
            <PostBody dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </Content>
    )
}

export default connect(Post);

// * Colours
const bgcol = `#190307`; // dark red
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography ====
const PostTitle = styled.h1`
    margin: 1rem 0 1rem 0;
`
const PostDate = styled.p`
    font-size: 0.9rem;
    color: ${col2};
    margin: 1rem 0 1rem 0; 
`
const PostBody = styled.div`
    text-align: justify-left;
    ul, ol{
        margin-left: 1rem;
        margin-right: 1rem;
        li{
            margin: 1rem 0;
        }
        img{
            margin: 1rem 0;
        }
    }
    img{
        max-width: 100%;
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
    }
    blockquote{
        padding: 0.5rem 2rem;
        color: ${col2};
        text-align: center;
    }
    h4{
        margin: 2rem 0 1rem 0;
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
    height: 20vh;
    overflow: hidden;
`
const FeaturedImage = styled.img`
    width: 100%;
    opacity: 0.8;
`