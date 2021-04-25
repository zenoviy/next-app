import fs from 'fs';

import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const postsDirectory = path.join(process.cwd(), 'pages/posts')

export function getSortedPostDataFirst() {
  return new Promise((resolve, reject) => {
    fs.readdir(postsDirectory, (err, files) => {
        console.log(files)

        let allPostsData = files.map(fileName => {
            const id = fileName.replace(/\.md$/, '')

            const fullPath = path.join(postsDirectory, fileName)

            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContents)
            return {
                id,
                ...matterResult.data
            }
        }).filter(data => data.id && data.title)

        resolve(allPostsData.sort((a,b) => {
            if (a.date < b.date) {
                return 1
            } else {
                return -1
            }
        }))
    })
  })
}



export function getAllPostIds() {
    return new Promise((resolve, reject) => {
        fs.readdir(postsDirectory, (err, files) => {
          resolve( files.map(fileName => {
            return {
              params: {
                id: fileName.replace(/\.md$/, '')
              }
            }
          }))
        })
    })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}