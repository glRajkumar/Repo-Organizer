import { FastifyRequest, FastifyReply } from 'fastify';
import { Client } from '@notionhq/client';

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
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN })

  // get property of particular database
  // const properties = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID as string })

  const payload = {
    parent: {
      type: "database_id",
      database_id: process.env.NOTION_DATABASE_ID as string
    },
    properties: {
      "Repo Link": {
        type: "url",
        url: "http://example.com",
      },
      Category: {
        type: "select",
        select: {
          name: "Other"
        }
      },
      "Repo Name": {
        type: "title",
        title: [{
          text: {
            content: "kjkgkgkgkgk"
          }
        }]
      },
      Status: {
        type: "status",
        status: {
          name: "Not started"
        }
      },
    }
  }

  const data = await notion.pages.create(payload as any)

  return data
}