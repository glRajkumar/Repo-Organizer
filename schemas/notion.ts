import { str } from "./base";

const repo = {
  type: 'object',
  properties: {
    repoName: str,
    originLink: str,
    category: str,
  }
}

const arrOfRepos = {
  type: 'array',
  items: repo
}

export const postNotionSchema = {
  schema: {
    params: {
      type: "object",
      properties: {
        list: arrOfRepos
      }
    },
  }
}
