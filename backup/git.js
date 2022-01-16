// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// noinspection JSUnusedGlobalSymbols,Annotator

// export default function handler(req, res) {
//   res.status(200).json({ token: process.env.TOKEN })
// }

const { Octokit } = require("@octokit/core");
// or: import { Octokit } from "@octokit/core";

async function request(owner = process.env.VERCEL_GIT_REPO_OWNER, repo){
  const octokit = new Octokit({ auth: process.env.TOKEN });
  return await octokit.request("GET /repos/{owner}/{repo}", {
    owner: owner,
    repo: repo,
  });
}

export default async function handler(req, res) {
  // const response = await request(req.query.owner, req.query.repo)
  await request(req.query.owner, req.query.repo)
  .then(function (response){
    res.status(response.status).end(response.data[req.query.data])
  })
  .catch(function (response) {
    res.status(response.status).json(response.headers)
  });
  // console.log(response)
  // res.status(200).json({ value: `${req.query.owner}/${req.query.repo}`,
  //   description: response.data[req.query.data] })
}
// TODO: User, default values
