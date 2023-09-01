import { arrOfRepos } from './github';

export const postNotionSchema = {
  schema: {
    params: {
      type: "object",
      properties: {
        list: arrOfRepos
      }
    },
  }
}
