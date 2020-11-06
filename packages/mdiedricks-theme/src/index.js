import Root from "./themefiles";

const contactHandler = {
  pattern: "/contact/",
  func: ({ state }) => {
    state.source.data["/contact/"].isContact = true;
  }
}

const logbookHandler = {
  pattern: "/logbook/",
  func: ({ state }) => {
    state.source.data["/logbook/"].isTest = true;
  }
}

export default {
  name: "mdiedricks-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isMenuOpen: false,
      recentPosts: []
    },
  },
  actions: {
    theme: {
      openMenu: ({state}) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({state}) => {
        state.theme.isMenuOpen = false;
      },
      init: ({ libraries }) => {
        libraries.source.handlers.push(contactHandler);
        libraries.source.handlers.push(logbookHandler);
      },
    }    
  }
};
