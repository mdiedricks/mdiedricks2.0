import Root from "./themefiles";

const contactHandler = {
  pattern: "/contact/",
  func: ({ state }) => {
    state.source.data["/contact/"].isContact = true;
  },
};

const projectHandler = {
  pattern: "/project/",
  func: ({ state }) => {
    state.source.data["/project/"].isProject = true;
  },
};

export default {
  name: "mdiedricks-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMenuOpen: false,
    },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      init: ({ libraries }) => {
        libraries.source.handlers.push(contactHandler);
        libraries.source.handlers.push(projectHandler);
      },
    },
  },
};
