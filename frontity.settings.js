const settings = {
  "name": "mdiedricks2.0",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "mdiedricks2.0",
      "description": "Off you go, into the woods."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Projects",
              "/category/projects/"
            ],
            [
              "Writing",
              "/category/writing/"
            ],
            [
              "Contact",
              "/contact/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mdiedricks.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
