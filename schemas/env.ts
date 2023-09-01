import type { FastifyEnvOptions } from '@fastify/env';
import { str } from './base';

const envSchema = {
  type: 'object',
  required: ["rootDir", "NOTION_API_TOKEN", "NOTION_DATABASE_ID"],
  properties: {
    rootDir: str,
    NOTION_API_TOKEN: str,
    NOTION_DATABASE_ID: str
  },
  additionalProperties: false
}

const envOptions: FastifyEnvOptions = {
  schema: envSchema,
  dotenv: true,
}

export default envOptions