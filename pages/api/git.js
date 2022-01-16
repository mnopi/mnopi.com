// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// noinspection JSUnusedGlobalSymbols,Annotator

// export default function handler(req, res) {
//   res.status(200).json({ token: process.env.TOKEN })
// }

const { Octokit } = require("@octokit/core");
// or: import { Octokit } from "@octokit/core";

async function request(owner, repo){
  const octokit = new Octokit({ auth: process.env.TOKEN });
  return await octokit.request("GET /repos/{owner}/{repo}", {
    owner: owner,
    repo: repo,
  });
}

export default async function handler(req, res) {
  const response = await request(req.query.owner, req.query.repo)
  console.log(response)
  res.status(200).json({ value: `${req.query.owner}/${req.query.repo}`,
    description: response.data[req.query.data] })
}
