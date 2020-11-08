const settings = {
  "name": "mdiedricks2.0",
  "state": {
    "frontity": {
      "url": "https://mdiedricks2-0.vercel.app/",
      "title": "mdiedricks2.0",
      "description": "Off we go, into the woods."
    }
  },
  "packages": [
    {
      "name": "mdiedricks-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mdiedricks.com/wp-json",
          // this also remove "isArchive true" from the home page
          "homepage": "holder", 
           // this forces the logbook page to have isArchive = true
          "postsPage": "logbook",
          "postTypes": [
            {"type": "project",
              "endpoint": "project",
              "archive": "/projects"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
