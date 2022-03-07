/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'
import { MenuModal } from '.'

const MyHeader = ({title, image, navigation}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b-2 border-gray-200 shadow-md dark:border-gray-600 dark:bg-gray-900">
      <div className="flex justify-between py-4 mx-auto container-xl">
        <Link href="/">
          <div className="flex items-center flex-shrink-0 space-x-2 cursor-pointer">
            <Image
              src={image}
              alt="Ricardo Boraure"
              className='block rounded-full'
              width={42}
              height={42}
            />
            <h2 className='text-2xl font-black leading-none text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text'>
              { title }
            </h2>
          </div>
        </Link>
        <a onClick={() => setIsOpen(true)} className='flex items-center justify-center px-2 border-2 rounded-md bg-gradient-to-r from-secondary to-primary border-gray-50 dark:border-gray-600'>
          <MenuIcon className='text-white' width={22} height={22} />
        </a>
      </div>
      <MenuModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigation={navigation}
      />
    </header>
  )
}

export default MyHeader
