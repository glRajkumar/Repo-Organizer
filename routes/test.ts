import { FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = async (fastify, opts, done) => {
  fastify.get("/", (req, res) => {
    console.log(process.env.test)
    return "Hello world!"
  })
}

export default routes