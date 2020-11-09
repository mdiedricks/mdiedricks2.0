import React from 'react'
import { connect, styled, css } from 'frontity'
import Link from '../link';

 function recentProject(props) {
     
    return (
        <ProjCard>
            <ImageHolder> 
            {/* <Image src={props.proj._links.self[0].href}></Image> */}
            <Image src={props.proj.imageObj}></Image>
            </ImageHolder>
            <TextHolder>
                <ProjTitle href={props.proj.link} key={props.proj.id}> {props.proj.title.rendered} </ProjTitle>
                <ProjDate>{props.proj.date}</ProjDate>
                <ProjEx dangerouslySetInnerHTML={{__html: props.proj.excerpt.rendered}}/>
            </TextHolder>
              

        </ProjCard>
    )
}

export default connect(recentProject)

// Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

//Typography
const ProjTitle = styled(Link)`
    font-size: 1.6rem;
    color: ${col1};
    text-decoration: none;
    padding: 0 0 1rem 0;
    transition: color 0.2s;
    :hover{
        color: ${col2};
    }
`
const ProjDate = styled.p`
    margin: 0.5rem 0;
    color: ${col3};
`
const ProjEx = styled.p`
    padding: 1rem 0 0 0;
    color: ${col3};
    transition: color 0.2s;
`
// Layout
const ProjCard = styled.div` 
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    column-gap: 1rem;
    padding: 1rem;
    border: 1px solid ${bgcol};
    transition: border-color 0.3s;
    
    :hover{
        border: 1px solid ${col2};
        p {
            color: ${col2};
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