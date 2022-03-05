import React from 'react'
import { ArrowSmRightIcon, ExternalLinkIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Icons } from '.'


const MenuSection = ({name, links}) => {
  const icons = {
    'arrow-right': ArrowSmRightIcon,
  }

  return (
    <>
      <h4 className='text-gray-700 text-xl font-bold mb-4'>
        {name}
      </h4>
      <ul className='mb-6'>
        {links.map(({name: _name, link, icon, isExternal}) =>{
          const Icon = name !== 'Social' && icons[icon]
          return (
            <li className='mb-2' key={_name}>
              {isExternal ? (
                <a
                  href={link}
                  target="_blank"
                  className='flex items-center justify-between'
                >
                  <span className='flex space-x-3'>
                    {name === 'Social' ?
                      <Icons
                        name={icon}
                        size={20}
                        className='text-gray-700'
                      /> :
                      <Icon
                        className="text-gray-700"
                        width={20}
                        height={20}
                      />
                    }
                    <p>
                      {_name}
                    </p>
                  </span>
                  {isExternal &&
                    (<ExternalLinkIcon
                      className="text-gray-700"
                      width={20}
                      height={20}
                    />)}
                </a>
              ) : (
                <Link
                  href={`${link}`}
                  className='flex items-center justify-between'
                  passHref
                >
                  <a>
                    <span className='flex space-x-3'>
                      {name === 'Social' ?
                        <Icons
                          name={icon}
                          size={20}
                          className='text-gray-700'
                        /> :
                        <Icon
                          className="text-gray-700"
                          width={20}
                          height={20}
                        />
                      }
                      <p>
                        {_name}
                      </p>
                    </span>
                    {isExternal &&
                      (<ExternalLinkIcon
                        className="text-gray-700"
                        width={20}
                        height={20}
                      />)}
                  </a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default MenuSection