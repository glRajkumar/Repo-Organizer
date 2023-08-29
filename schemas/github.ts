export const str = { type: 'string' }

const repo = {
  type: 'object',
  properties: {
    repoName: str,
    originLink: str,
  }
}

export const arrOfRepos = {
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
