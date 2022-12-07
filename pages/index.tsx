import Head from 'next/head'
import Link from 'next/link'

import { Card } from 'components/Card'
import { Container } from 'components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from 'components/SocialIcons'
import { generateRssFeed } from 'lib/generateRssFeed'
import { getAllArticles } from 'lib/getAllArticles'
import { formatDate } from 'lib/formatDate'
import { Feature } from 'components/home/Feature'
import { Resume } from 'components/home/Resume'

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, href ,...props }) {
  return (
    <Link className="group -m-1 p-1" href={href} {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Ricardo Boraure - Frontend Developer becoming T Shape
        </title>
        <meta
          name="description"
          content="I’m Ricardo Boraure, can find me somewhere as RBoraure. I’m Frontend Developer specialized in React, Vue.js and its meta frameworks(Next.js, Nuxt.js, Remix), I love the JAMStack and decoupled architectures and have a deep interest in new tech and modern web development."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Frontend Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I’m Ricardo Boraure, can find me somewhere as RBoraure. I’m Frontend Developer specialized in React, Vue.js and its meta frameworks <strong>(Next.js, Nuxt.js, Remix)</strong>, I love <strong>JAMStack</strong>, decoupled architectures, and have a deep interest in new tech and modern web development.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/RBoraurito"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/rboraure/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      {/* <Feature /> */}
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
