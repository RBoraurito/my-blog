import { ArticleLayoutProps } from 'components/ArticleLayout';
import glob from 'fast-glob'
import * as path from 'path'
import React, { FunctionComponent } from 'react'


interface Article {
  slug: string;
  title: MetaData['title']
  author: MetaData['author']
  date: MetaData['date']
  description: MetaData['description']
  component: FunctionComponent<{isRssFeed: boolean}>
} 

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/articles'),
  })

  let articles: Article[] = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date).getDate() - new Date(a.date).getDate())
}
