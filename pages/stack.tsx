import Head from 'next/head'

import { Card } from 'components/Card'
import { Section } from 'components/Section'
import { SimpleLayout } from 'components/SimpleLayout'
import { ReactNode } from 'react';

interface ToolsSectionProps {
  children: JSX.Element;
  title: string;
  [key: string]: any;
}

function ToolsSection({ children, title, ...props }: ToolsSectionProps) {
  return (
    <Section title={title} {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

interface ToolProps {
  title: string;
  href?: string;
  children: ReactNode; 
}

function Tool({ title, href, children }: ToolProps) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target="_blank">
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Stack - Ricardo Boraure</title>
        <meta
          name="description"
          content="Technologies that I use day by day, and in side projects."
        />
      </Head>
      <SimpleLayout
        title="Technologies that I like to use day by day, and in side projects."
        intro="I want to share with you the tools that I use, and why I use them. In order to help you understand the impact o those technologies and tooling I’ll be explaning you how they help me when I code."
      >
        <div className="space-y-20">
          <ToolsSection title="Frontend Fundamentals">
            <>
              <Tool title="HTML">
                This Markup language helps me declare the information of my Website/Web app, learning modern features helps declare that info properly, which helps to improve your accessibility, SEO, and also in some cases helps with base styling(if you don’t reset your styles). Nowadays you have a lot of tags that help you to show the user the information in the right way.
              </Tool>
              <Tool title="CSS">
                As you know this is the language used to give style to our HTML, knowing the newest features of this language helps you make your work less complicated if you learn things like CSS vars, scroll snap, accent color, etc. And also knowing future possible features like <a href="https://www.w3.org/TR/css-nesting-1/" target="_blank" rel="noreferrer" className="underline dark:decoration-zinc-100 decoration-zinc-800 font-bold">CSS nesting</a>, help you make decisions about which tools use or don’t use the native features when it’s possible.
              </Tool>
              <Tool title="Javascript">
                The programming part in Frontend, this language is useful in Frontend and Backend, part of learning Javascript is learning how the browser works and how the internet works, for example, for fetching data, using browser information like preferred language, local storage, but also is important to learn how the language works internally, things like hoisting, event bubbling, scope, asynchronism, etc. But keep in mind that all of these things are fun to learn.
              </Tool>
            </>
          </ToolsSection>
          <ToolsSection title="UI Library/Framework">
            <>
              <Tool title="React" href="https://beta.reactjs.org/">
                In my opinion, the most popular UI Library, this library helps me build the Frontend. The interesting part of this library it’s closeness to Javascript and a great community. The great community is a strong point for using it because you can find help in almost all scenarios and a library for solving a problem. Another strong point is the attention that the developer team put on maintain and innovationg with features like SSR or Server Components
              </Tool>
              <Tool title="Vue.js" href="https://vuejs.org/">
                This Progresive Framework offers a routing, store managament system, and SSR, such as other tooling, like bundlers(Vite) and CLI, nowadays we have its third version wich move from its Options API to a Composition API(in my opinion has a huge inspiration from React), this Framework has a great community too, but smaller than React. A good point is that most developers that try Vue get like using it.
              </Tool>
            </>
          </ToolsSection>
          <ToolsSection title="Meta Frameworks">
            <>
              <Tool title="Next.js" href="https://nextjs.org/">
                This Framework without a doubt is most famous in React Community, Nextjs help you build a complete SEO ready Website/Web app with techniques like SSR, SSG, and ISR, it also has other amazing features like file routing, image optimization, fonts optimization, etc. In my opinion, the coolest thing about this Framework is that the developer team is from <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a> and has a close relationship with the React developer team which helps them keep the Framework updated with the last features of React. When I use this framework I enjoy having all these new features of React, blazing fast bundling, a good folder structure by default, a good Typescript support, and the way it helps me make faster the development process.
              </Tool>
              <Tool title="Remix" href="https://remix.run/">
                This is a new SSR Framework for React, founded and maintained by the creators of React Router, this framework embraced these aspects: Web standards, Server/Client model, and Progressive enhancement. My experience working with this framework is so great, I enjoy too much working with it, I don’t have to think too much about how when trying to revalidate data, send or get data from the server, and create loading or error states in my pages or components.
              </Tool>
              <Tool title="Nuxt.js" href="https://nuxtjs.org/">
                It is the most popular Vue.js Meta Framework, it is like Next.js, but for Vue, now it has it’s V3 adding some updates like ISR, Hybrid(SSG/SSR/ISR), Composition API, better TS support, etc. I think Nuxt is the main option you have when you are looking for a complete Vue development environment.
              </Tool>
            </>
          </ToolsSection>
          <ToolsSection title="Tooling">
            <>
              <Tool title="Typescript" href="https://www.typescriptlang.org/">
                <strong>The Javascript superset</strong>, I don’t have to explain too much why it’s an almost mandatory tool for any Javascript developer, it helps you with static typing checks which is such a great thing, because you can avoid common mistakes like sending wrong parameters to a function, accessing to a missing prop in an object, getting a property from null or undefined. You also have great IntelliSense support in code editors like VSCode.
              </Tool>
              <Tool title="Tailwind" href="https://tailwindcss.com/">
                A delightful CSS Framework, it feels like writing CSS but faster, it is flexible, themeable, easy to learn, good by default config, and lightweight, helping you with small and big projects. This framework it’s getting so much popularity due to the dev experience and performance on projects.
              </Tool>
            </>
          </ToolsSection>
          <ToolsSection title="Testing">
            <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">Comming soon...</p>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
