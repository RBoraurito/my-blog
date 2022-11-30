import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from 'components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from 'components/SocialIcons'
import portraitImage from 'images/portrait.jpg'
import { Mail } from 'components/icon/Mail'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}


export default function About() {
  return (
    <>
      <Head>
        <title>About - Ricardo Boraure</title>
        <meta
          name="description"
          content="I’m Ricardo Boraure. I live in Dominican Republic, but born in Venezuela, I’m deeply in love with Web Development."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Ricardo Boraure, I’m deeply in love with Web Development
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a software developer based on Dominican Republic, born in Venezuela, I’m focused on frontend development, a self-taught learner, with a huge passion for delivering smooth and useful websites, I’m so happy for giving web users the best experience they can have.
              </p>
              <p>
                I have a passion for Frontend technologies like <strong>React, Nextjs, Javascript</strong>, and <strong>JamStack</strong> ecosystem, for example, <strong>headless CMS</strong>. I love to find useful solutions and discover new technologies. I enjoy sharing my knowledge and have feedback about code and solutions.
              </p>
              <p>
                I care about my manners and how I communicate my thoughts to my colleagues. I’m also a cooperative teammate, that looks for team improvement in order to get the best result we can achieve.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/RBoraurito" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/rboraure/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ricardoboraure@gmail.com"
                icon={Mail}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ricardoboraure@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
