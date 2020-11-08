import React from 'react'
import { connect, styled, css } from 'frontity'
import Link from './link';

 function postCard(props) {
    return (
        <div>
            <span>This is a an post card</span>
        </div>
    )
}

export default connect(postCard)