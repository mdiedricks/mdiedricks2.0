import React from 'react';
//by importing connect you make state available as props
//it must also wrap the default export
// Global - allows global css params
//css is a function used for styles prop
//Head allows your to add head tags foir SEO
import { connect, Global, css, styled, Head } from 'frontity';
import Switch from "@frontity/components/switch";
import Link  from './link';
import List from './list';
import Post from './post';
import Page from './page';
import Contact from './contact';
import Home from './home';

const Root = ({ state, actions }) => {
    
    const data = state.source.get(state.router.link)
    
    return (
      <>
        <Global 
          styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Space+Mono&family=East+Sea+Dokdo&family=Work+Sans&display=swap');
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html{
              background-color: #011006;
              font-family: 'Work Sans', sans-serif;
            }
            nav a{
            }
            // ! grab this for quotes
            .quote{
              font-family: 'East Sea Dokdo', cursive;
            }
          `}        
        />
        <Head>
          <title>
            mdiedricks - this is mission control
          </title>
        </Head>

        <Content>
          <Container>
          <Navbar isPostType={data.isPostType} 
            css={css`display: flex;
                justify-content: space-between;
                align-items: center;`}>
            <div>
              <NavTitle href='/'><h2>mdiedricks</h2></NavTitle>
              <NavSubtitle>this is mission control</NavSubtitle>
            </div>

            {/* // * This menu only shows at width larger than 768px */}
            <NavMenuWide>  
              <NavLink href='/'>home</NavLink>
              <NavLink href='/logbook'>logbook</NavLink>
              <NavLink href='/objective'>objective</NavLink>
              <NavLink href='/contact'>contact</NavLink>
            </NavMenuWide>

            {/* // * This menu only shows at width smaller than than 768px */}
            { state.theme.isMenuOpen ? (
              <NavMenuShort> 
                <MenuButton onClick={actions.theme.closeMenu}>menu</MenuButton>
                <Navmenu className="dropMenu" css={css`position: absolute;`}>
                  <NavLink href='/'>
                    <span onClick={actions.theme.closeMenu}>home</span>
                  </NavLink>
                  <NavLink href='/logbook'>
                    <span onClick={actions.theme.closeMenu}>logbook</span>
                  </NavLink>
                  <NavLink href='/objective'>
                    <span onClick={actions.theme.closeMenu}>objective</span>
                  </NavLink>
                  <NavLink href='/contact'>
                    <span onClick={actions.theme.closeMenu}>contact</span>
                  </NavLink>
                </Navmenu>
              </NavMenuShort>
            ) : (
              <NavMenuShort>
                <MenuButton onClick={actions.theme.openMenu}>menu</MenuButton>
              </NavMenuShort>
            )}

          </Navbar>

          <main>
            <Switch>
              <Home when={data.isHome}/>
              <List when={data.isArchive}/>
              <Page when={data.isPage}/>
              <Post when={data.isPost}/>
              <Contact when={data.isContact}/>
            </Switch>

          </main>
          </Container>
        </Content>
        <Footer>
          <Container>
            This is the footer
          </Container>
        </Footer>
      </>
    );
  };

  export default connect(Root);


// Colours
const bgcol = `#011006`; // dark green
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography =====
const NavTitle = styled(Link)`
color: ${col3};
text-decoration: none;
font-family: 'Space Mono', monospace;
font-weight: 700;
`
const NavSubtitle = styled.span`
  font-family: 'Work Sans', sans-serif;
  color: #FFE6E0;
  `
const NavLink = styled(Link)` 
  color: ${col3};
  font-family: 'Space Mono', monospace;
  text-decoration: none;
`

// * Layout ===== 
const Container = styled.div`
  margin:0 0.5rem;

  @media(min-width:481px) and (max-width:768px){
    margin:0 3rem;  
  }

  @media(min-width:768px) and (max-width:1024px){
    margin:0 4rem;  
  }
  @media(min-width:1024px) {
    margin:0 8rem;  
  }
`
const Content = styled.div`
  min-height: calc(100vh - 70px);
`
const Navbar =  styled.header`
  background-color: ${bgcol};
`
  const Navmenu = styled.nav`
  background-color: ${bgcol};
`
const Footer = styled.div`
  height: 70px;
  color: ${col3};
`

// * Components =====
const NavMenuWide = styled.div`
  display: none;
  @media(min-width:768px){
    display: flex;
    margin:0 4rem;  
}
`
const NavMenuShort = styled.div`
  @media(min-width:768px){
    display: none;  
}
`
const MenuButton = styled.button`
font-family: 'Space Mono', monospace;
  background-color: ${bgcol};
  border: 1px solid ${col1};
  color: ${col1};
  padding: 8px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`

  