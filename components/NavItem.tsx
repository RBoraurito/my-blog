import { Popover } from "@headlessui/react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"

interface NavItemProps {
  href: string,
  children: ReactNode
}

export function NavItem({ href, children }: NavItemProps) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-blue-500 dark:text-blue-400'
            : 'hover:text-blue-500 dark:hover:text-blue-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
        )}
      </Link>
    </li>
  )
}

export function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}