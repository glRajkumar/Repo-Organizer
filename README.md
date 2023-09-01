Project to list down name and origin link of every git repos within the folder.

# Repository Organizer
Repository Organizer is a small project designed to help me to organize all repositories in my system. Used Fastify as server with Notion's `@notionhq/client` and `simple-git` packages. Basically get all repos in particular folder using `simple-git` and then categorised and used server to push the content to notion using `@notionhq/client`. 


To get started with Repository Organizer, follow these steps:

## Getting Started with notion end point

- Set up your Notion API integration
- Get your Notion API token.
- Obtain the database ID of your Notion database where you want to store repository information.
- Set the environment variables `NOTION_API_TOKEN` and `NOTION_DATABASE_ID` with your credentials and set `rootDir` - the root directory of your system.
- Install neccessary packages and then run `npm dev`

## API Endpoint

-  **GET /github:** Get repositories from oarticular folder in your system
- should pass param like the following - `?path=folder`. for eaxmple `?path=Documents/Viz`.

- **POST /notion:** Add repository records to your Notion database. Send a JSON array of repository records in the request body.

Example request body:
```json
{
  "list": [
    {
      "repoName": "My First Repository",
      "originLink": "https://github.com/your-username/repo1",
      "category": "Category"
    },
  ]
}
```