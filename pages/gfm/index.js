import {promises as fs} from 'node:fs'
import {compile} from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'

main()

async function main() {
  console.log(
    String(
      await compile(await fs.readFile('index.mdx'), {remarkPlugins: [remarkGfm]})
    )
  )
}
