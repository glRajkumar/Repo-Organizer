import { str } from './base';

const repo = {
  type: 'object',
  properties: {
    repoName: str,
    originLink: str,
  },
  required: ["repoName", "originLink"],
}

const arrOfRepos = {
  type: 'array',
  items: repo
}

export const getReposSchema = {
  schema: {
    response: {
      200: arrOfRepos
    }
  }
}

export const cloneReposSchema = {
  schema: {
    body: {
      type: "object",
      required: ["path", "list"],
      properties: {
        path: str,
        list: arrOfRepos,
      }
    },
    response: {
      200: str
    }
  }
}
