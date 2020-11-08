import React from 'react'
import { connect, styled, css } from 'frontity'
import Link from '../link';

const recentPost = (props) => {
    return (
        <PostCard key={props.post.id}>
            <ImageHolder>
                <Image src='https://via.placeholder.com/450x280' />
            </ImageHolder>
            <TextHolder>
                <PostTitle href={props.post.link} key={props.post.id}> {props.post.title.rendered} </PostTitle>
                {/* <PostDate>
                    {Date.parse(props.post.date)} 
                </PostDate>                 */}
                <PostEx dangerouslySetInnerHTML={{__html: props.post.excerpt.rendered}}/>
            </TextHolder>
        </PostCard>
    )
}

export default connect(recentPost)

// Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

//Typography
const PostTitle = styled(Link)`
    font-size: 1.6rem;
    color: ${col1};
    text-decoration: none;
    padding: 0 0 1rem 0;
    transition: color 0.2s;
    :hover{
        color: ${col2};
    }
`
const PostDate = styled.p`
    margin: 0.5rem 0;
    color: ${col3};
`
const PostEx = styled.p`
    padding: 1rem 0 0 0 ;
    color: ${col3};
`
// Layout
const PostCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    // grid-template-row: 3fr;
    column-gap: 1rem;
    padding: 1rem;
    border: 1px solid ${bgcol};
    transition: border-color 0.3s;
    :hover{
        border: 1px solid ${col2};
        p {
            color: ${col2};
        }
        a{
            color: ${col3};
        }
    }
    @media(max-width:768px){
        grid-template-columns: 1fr;
        row-gap: 1rem;   
    }
`
const ImageHolder = styled.div`
    overflow: hidden;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const TextHolder = styled.div`
    text-align: left;
`