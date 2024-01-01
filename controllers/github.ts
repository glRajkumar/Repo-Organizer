import { FastifyRequest, FastifyReply } from 'fastify';
import simpleGit from 'simple-git';
import path from 'path';
import fs from 'fs';

async function getRepoInfo(repoPath: string) {
  try {
    const git = simpleGit(repoPath);
    const isRepo = await git.checkIsRepo();

    if (isRepo) {
      const originUrl = await git.remote(['get-url', 'origin']);

      return {
        repoName: path.basename(repoPath),
        originLink: originUrl?.replace("\n", ""),
      }
    }

  } catch (error) {
    console.error(`Error processing ${repoPath}:`, error);
    return {
      repoName: path.basename(repoPath),
      originLink: "remote",
    };
  }
}

interface IQuerystring {
  path: string
}

type reqT = FastifyRequest<{ Querystring: IQuerystring }>

export async function listGitReposInFolder(req: reqT, res: FastifyReply) {
  const folderPath = req?.query?.path || ""
  const rootDir = process.env.rootDir as string

  const files = fs.readdirSync(path.join(rootDir, folderPath))

  const repoInfos = [];

  for (const file of files) {
    const repoPath = path.join(rootDir, folderPath, file);
    const repoInfo = await getRepoInfo(repoPath);
    if (repoInfo) {
      repoInfos.push(repoInfo);
    }
  }

  return repoInfos

  // fs.readdir(path.join(rootDir, folderPath), async (err, files) => {
  //   if (err) {
  //     console.error('Error reading folder:', err);
  //     return;
  //   }
  //   const repoInfos = [];
  //   for (const file of files) {
  //     const repoPath = path.join(rootDir, folderPath, file);
  //     const repoInfo = await getRepoInfo(repoPath);
  //     if (repoInfo) {
  //       repoInfos.push(repoInfo);
  //     }
  //   }
  //   return repoInfos
  // })

  // const outputText = repoInfos
  //   .map(info => `${info.repoName} - ${info.originLink}`)
  //   .join('');
  // fs.writeFile(outputPath, outputText, 'utf8', err => {
  //   if (err) {
  //     console.error('Error writing to file:', err);
  //   } else {
  //     console.log('Output written to', outputPath);
  //   }
  // });
}
