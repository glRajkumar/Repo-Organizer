import { FastifyRequest, FastifyReply } from 'fastify';

type gitHubParamType = {
  repoName: string
  originLink: string
}

type reqT = FastifyRequest<{
  Body: {
    list: gitHubParamType[]
  }
}>

export async function uploadDataToNotion(req: reqT, res: FastifyReply) {
  console.log(req.body.list)
  return "Notion"
}