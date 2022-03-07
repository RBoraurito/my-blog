import { Fragment } from 'react'
import { MenuSection } from '.'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'

function MenuModal ({isOpen, setIsOpen, navigation}) {
  const closeModal = () => setIsOpen(false)
  const setLightTheme = () => {
    document.querySelector('html').classList.remove('dark')
    document.querySelector('html').classList.add('light')
  }
  const setDarkTheme = () => {
    document.querySelector('html').classList.add('dark')
    document.querySelector('html').classList.remove('light')
  }

  return (
      <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <nav className='p-6'>
                {navigation.map(({name, links}) => (
                  <MenuSection
                    name={name}
                    links={links}
                    key={name}
                  />
                ))}
                <h4 className='mb-4 text-xl font-bold text-gray-700'>
                  Theme
                </h4>
                <ul className='mb-6'>
                  <li className='mb-2'>
                    <a
                      onClick={setLightTheme}
                      className='flex items-center justify-between cursor-pointer'
                      >
                      <span className='flex space-x-3'>
                        <SunIcon
                          className="text-gray-700"
                          width={20}
                          height={20}
                        />
                        <p>
                          Set light theme
                        </p>
                      </span>
                    </a>
                  </li>
                  <li className='mb-2'>
                    <a
                      onClick={setDarkTheme}
                      className='flex items-center justify-between cursor-pointer'
                    >
                      <span className='flex space-x-3'>
                        <MoonIcon
                          className="text-gray-700"
                          width={20}
                          height={20}
                        />
                        <p>
                          Set dark theme
                        </p>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MenuModal
