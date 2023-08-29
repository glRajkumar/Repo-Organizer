const str = { type: 'string' }

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

const getReposSchema = {
  schema: {
    response: {
      200: arrOfRepos
    }
  }
}

export {
  getReposSchema
}