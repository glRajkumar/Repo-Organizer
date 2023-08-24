import Fastify, { FastifyInstance } from "fastify";
import FastifyCors from '@fastify/cors';
import FastifyEnv from '@fastify/env';

import envOptions from "./schemas/env";
import routes from "./routes/test";

const app: FastifyInstance = Fastify({
  logger: true
})

app
  .register(FastifyCors)
  .register(FastifyEnv, envOptions)
  .register(routes)

const start = async () => {
  try {
    await app.listen({ port: 3000 })
    console.log("app started")

  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()