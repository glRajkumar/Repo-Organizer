import { FastifyPluginCallback } from 'fastify';
import { listGitReposInFolder } from '../controllers/github';
import { getReposSchema } from '../schemas/github';

const githubRoutes: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify
    .get("/", getReposSchema, listGitReposInFolder)

  done()
}

export default githubRoutes