import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import { SocialButton, Icons } from '..'

const Hero = ({social}) => {
  return (
    <section className="container grid sm:grid-cols-3 items-center gap-8 my-10">
      <div className='sm:col-span-2'>
        <h1 className="font-black text-secondary dark:text-primary mb-4 text-5xl"
        >
          Hi, I'm Ricardo Boraure.
        </h1>
        <p className='text-gray-900 dark:text-gray-100 text-lg mb-4'>
          I'm software developer especiliy focused on <strong>frontend(Vue & React)</strong>. I'm from Barquisimeto, Venezuela, but currently living in the Santo Domingo, Dominican Republic. I'm a self-taught developer, and I'm always looking for new challenges and opportunities. 
          <NextLink href="/about" className="font-bold text-secondary dark:text-primary">
            See more
          </NextLink>
        </p>
        <p className='text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4'>
          You can find me at the following social networks:
        </p>
        <div className='flex space-x-6'>
          <SocialButton label={'Twitter'} href={social[2].link}>
            <Icons name='twitter' size={16} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={social[1].link}>
            <Icons name='instagram' size={16} />
          </SocialButton>
          <SocialButton label={'Github'} href={social[0].link}>
            <Icons name='github' size={16} />
          </SocialButton>
        </div>
      </div>
      <figure className='sm:col-span-1 rounded-full overflow-hidden max-h-52 sm:max-h-80 max-w-52 sm:max-w-80 order-first sm:order-last mx-auto border-4 border-secondary dark:border-primary'>
        <Image src="/img/me.jpeg" width={300} height={300} />
      </figure>
    </section>
  )
}

export default Hero
