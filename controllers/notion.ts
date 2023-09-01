import { FastifyRequest, FastifyReply } from 'fastify';
import { Client } from '@notionhq/client';

type gitHubParamType = {
  repoName: string
  originLink: string
  category: string
}

type reqT = FastifyRequest<{
  Body: {
    list: gitHubParamType[]
  }
}>

export async function uploadDataToNotion(req: reqT, res: FastifyReply) {
  const notion = new Client({ auth: process.env.NOTION_API_TOKEN })
  const { list } = req.body

  // get property of particular database
  // const properties = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID as string })

  const createdPages = []

  for (const record of list) {
    const payload = {
      parent: {
        type: "database_id",
        database_id: process.env.NOTION_DATABASE_ID as string,
      },
      properties: {
        "Repo Link": {
          type: "url",
          url: record.originLink,
        },
        Category: {
          type: "select",
          select: {
            name: record.category,
          },
        },
        "Repo Name": {
          type: "title",
          title: [
            {
              text: {
                content: record.repoName,
              },
            },
          ],
        },
        Status: {
          type: "status",
          status: {
            name: "Not started",
          },
        },
      },
    };

    try {
      const data = await notion.pages.create(payload as any);
      createdPages.push(data);
    } catch (error) {
      console.error("Error creating Notion page:", error);
    }
  }

  // you can just return success message 
  return createdPages
}