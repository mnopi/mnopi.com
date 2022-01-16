// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// noinspection JSUnusedGlobalSymbols,Annotator

// export default function handler(req, res) {
//   res.status(200).json({ token: process.env.TOKEN })
// }

let req
req.query.repo = undefined

export default function handler(req, res) {
  res.status(200).json({ value: `${req.query.user}/${req.query.repo}` })
}
