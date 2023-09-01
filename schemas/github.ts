import { str } from './base';

const repo = {
  type: 'object',
  properties: {
    repoName: str,
    originLink: str,
  }
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
