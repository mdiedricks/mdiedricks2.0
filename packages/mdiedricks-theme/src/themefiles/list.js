import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';

const List = ({state}) => {
    // get current URL address - store in 'data'
    const data = state.source.get(state.router.link)
    let projects = [];
    
    if(data.isReady){
        projects = data.items.slice(0,3).map(({type, id}) => state.source[type][id]);
    }
    
    return (
        <div>
            {projects.map( proj => {
                return (
                    <ArticleLink key={proj.id} href={proj.link}>
                        {proj.title.rendered}
                     </ArticleLink>
                    
                )
            })}
        </div>
    )
}

export default connect(List);

const ArticleLink = styled(Link)`
    text-decoration: none;
`