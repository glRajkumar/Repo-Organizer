import { FastifyPluginCallback } from 'fastify';
import { listGitReposInFolder } from '../controllers/github';

const githubRoutes: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify
    .get("/", listGitReposInFolder)

  done()
}

export default githubRoutes