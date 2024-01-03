import { FastifyPluginCallback } from 'fastify';
import { cloneRepoAtPath, listGitReposInFolder } from '../controllers/github';
import { cloneReposSchema, getReposSchema } from '../schemas/github';

const githubRoutes: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify
    .get("/", getReposSchema, listGitReposInFolder)
    .post("/", cloneReposSchema, cloneRepoAtPath)

  done()
}

export default githubRoutes