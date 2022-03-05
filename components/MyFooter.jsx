import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SocialButton, Icons } from '.';

const MyFooter = ({title, image, social = []}) => {
  const date = new Date();

  return (
    <footer className="text-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
      <div className='flex flex-col items-center justify-center gap-4 py-4 container-xl '>
        <div className='flex items-center'>
          <figure className='overflow-hidden rounded-full h-11 w-11'>
            <Image
              src={image}
              width={42}
              height={42}
            />
          </figure>
          <p className='ml-2 text-3xl font-black text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text'>
            {title}
          </p>
        </div>
        <div className='flex gap-6'>
          <Link href='/'>Home</Link>
          <Link href='/about-me'>About me</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/projects'>Projects</Link>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className='container flex flex-col items-center justify-center gap-4 py-4 lg:flex-row lg:justify-between'>
          <p>© {date.getFullYear()} Ricardo Boraure. All rights reserved</p>
          <div className='flex gap-6'>
            <SocialButton label={'Twitter'} href={social[2]?.link}>
              <Icons name='twitter' size={16} />
            </SocialButton>
            <SocialButton label={'Instagram'} href={social[1]?.link}>
              <Icons name='instagram' size={16} />
            </SocialButton>
            <SocialButton label={'Github'} href={social[0]?.link}>
              <Icons name='github' size={16} />
            </SocialButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;