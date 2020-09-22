import React from 'react';
//by importing connect you make state available as props
//it must also wrap the default export
// Global - allows global css params
//css is a function used for styles prop
//Head allows your to add head tags foir SEO
import { connect, Global, css, styled, Head } from 'frontity';
import Link  from './link';
import List from './list';
import Post from './post';
import Page from './page';

const Root = ({ state, actions }) => {
    
    const data = state.source.get(state.router.link)
    
    return (
      <>
        <Global 
          styles={css`
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html{ 
              font-family: sans-serif;
            }
            
          `}        
        />
        <Head>
          <title>mdiedricks2.0</title>
        </Head>
        <Header isPostType={data.isPostType}>
          <h1>mission control</h1>
          <p>Current URL: {state.router.link}</p>
          { state.theme.isMenuOpen ? (
            <> 
              <button onClick={actions.theme.closeMenu}>Close</button>
              <nav>
              <Link href='/'>Home</Link>
              <Link href='/logbook'>Logbook</Link>
              <Link href='/objective'>Objective</Link>
              <Link href='/contact'>Contact</Link>
              <Link href='/crew-demo-2'>Crew-Demo-2</Link>
              </nav>
            </>
          ) : (
            <button onClick={actions.theme.openMenu}>Open</button>
          )}
          
        </Header>
        
        <hr />
        <main>
            {data.isArchive && <List/>}
            {data.isPost && <Post />}
            {data.isPage && <Page />}
        </main>
      </>
    );
  };

  export default connect(Root);

  const Header =  styled.header`
    background-color: #eee;
  `