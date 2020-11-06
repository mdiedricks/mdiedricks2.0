import React from 'react';
import { connect  } from 'frontity';

const Link = ({ href, actions, children, className}) => {
    return (
        <div>
            <a href={href}
                className={className}
                onClick={e => {
                    e.preventDefault();
                    actions.router.set(href);
                }}>
                {children}
            </a>
        </div>
    )
}

export default connect(Link);