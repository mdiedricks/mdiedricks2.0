import React from 'react';
import { connect, styled } from 'frontity';
import Link from './link';

const List = ({state}) => {
    
    // get current URL address - store in 'data'
    const data = state.source.get(state.router.link)
    
    return (
        <div>
            {data.items.map( item => {
                const post = state.source.post[item.id]
                return (
                    <ArticleLink key={item.id} href={post.link}>
                        {post.title.rendered}
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