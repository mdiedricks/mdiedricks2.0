import React from "react";
//by importing connect you make state available as props
//it must also wrap the default export
// Global - allows global css params
//css is a function used for styles prop
//Head allows your to add head tags foir SEO
import { connect, Global, css, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Project from "./project";
import Page from "./page";
import Home from "./home";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { IconContext } from "react-icons";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <IconContext.Provider
        value={{ color: `#DC4F31`, size: `2rem`, padding: "0 1rem" }}
      >
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css2?family=Space+Mono&family=East+Sea+Dokdo&family=Work+Sans&display=swap");
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html {
              background-color: #0f0104;
              font-family: "Work Sans", sans-serif;
              scroll-behavior: smooth;
            }
            nav a {
            }
            blockquote {
              font-family: "East Sea Dokdo", cursive;
              font-size: 1.8rem;
            }
          `}
        />
        <Head>
          <title>mdiedricks - this is mission control</title>
        </Head>

        <Content>
          <Container>
            <Navbar
              isPostType={data.isPostType}
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
              `}
            >
              <div>
                <NavTitle href="/">
                  <h2>mdiedricks</h2>
                </NavTitle>
                <NavSubtitle>this is mission control</NavSubtitle>
              </div>

              {/* // * This menu only shows at width larger than 768px */}
              <NavMenuWide>
                <NavLink href="/">home</NavLink>
                <NavLink href="/projects">projects</NavLink>
                <NavLink href="/logbook">logbook</NavLink>
              </NavMenuWide>

              {/* // * This menu only shows at width smaller than than 768px */}
              {state.theme.isMenuOpen ? (
                <NavMenuShort>
                  <MenuButton onClick={actions.theme.closeMenu}>
                    menu
                  </MenuButton>
                  <Navmenu>
                    <NavLink href="/">
                      <span onClick={actions.theme.closeMenu}>home</span>
                    </NavLink>
                    <NavLink href="/projects">
                      <span onClick={actions.theme.closeMenu}>projects</span>
                    </NavLink>
                    <NavLink href="/logbook">
                      <span onClick={actions.theme.closeMenu}>logbook</span>
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
                <Home when={data.isHome} />
                <Post when={data.isPost} />
                <List when={data.isArchive} />
                {/* <Page when={data.isPage}/> */}
                <Project when={data.isProject} />
              </Switch>
            </main>
          </Container>
        </Content>

        <Footer>
          <Container
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
            `}
          >
            <SocialLink href="https://github.com/mdiedricks">
              <IoLogoGithub />
            </SocialLink>
            <SocialLink href="http://linkedin.com/in/mdiedricks/">
              <IoLogoLinkedin />
            </SocialLink>
          </Container>
        </Footer>
      </IconContext.Provider>
    </>
  );
};

export default connect(Root);

// * Colours
const bgcol = `#0F0104`; // dark red
const col1 = `#529840`; // green
const col2 = `#DC4F31`; // red
const col3 = `#FFE6E0`; // white

// * Typography =====
const NavTitle = styled(Link)`
  color: ${col3};
  text-decoration: none;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  transition: color 0.3s;
  :hover {
    color: ${col2};
  }
`;
const NavSubtitle = styled.span`
  font-family: "Work Sans", sans-serif;
  color: #ffe6e0;
`;
const NavLink = styled(Link)`
  color: ${col3};
  font-family: "Space Mono", monospace;
  text-decoration: none;
  padding-left: 1rem;
  transition: color 0.3s;
  :hover {
    color: ${col2};
  }
`;
const SocialLink = styled.a`
  padding: 0 0.5rem;
`;
// * Layout =====
const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;

  @media (min-width: 481px) and (max-width: 768px) {
    margin: 0 auto;
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 auto;
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 960px;
  }
`;
const Content = styled.div`
  min-height: calc(100vh - 70px);
`;
const Navbar = styled.header`
  padding: 8px 0;
`;
const Navmenu = styled.nav`
  padding: 0.5rem 0 0 0;
  opacity: 0.9;
  text-align: right;
  transform: translate(-45px);
  position: absolute;
  z-index: 10;
`;
const NavMenuWide = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const NavMenuShort = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
const Footer = styled.div`
  height: 70px;
  padding: 0.8rem;
  color: ${col3};
`;
// * Components =====
const MenuButton = styled.button`
  font-family: "Space Mono", monospace;
  background-color: ${bgcol};
  border: 1px solid ${col1};
  color: ${col1};
  padding: 8px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
  :hover {
    color: ${col2};
    border-color: ${col2};
  }
`;
