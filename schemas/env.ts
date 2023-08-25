import type { FastifyEnvOptions } from '@fastify/env';

const envSchema = {
  type: 'object',
  required: ["rootDir"],
  properties: {
    rootDir: { type: 'string' }
  },
  additionalProperties: false
}

const envOptions: FastifyEnvOptions = {
  schema: envSchema,
  dotenv: true,
}

export default envOptions