import { FastifyPluginCallback } from 'fastify';
import { uploadDataToNotion } from '../controllers/notion';
import { postNotionSchema } from '../schemas/notion';

const notionRoutes: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify
    .post("/", postNotionSchema, uploadDataToNotion)

  done()
}

export default notionRoutes