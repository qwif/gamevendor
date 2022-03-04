import Link from 'next/link'
import React from 'react'

interface NavigationLinkProps extends React.ComponentProps<'a'> {
  href: string
  children: React.ReactNode
}

export const NavigationLink = ({ href, children, ...props }: NavigationLinkProps) => {
  return (
    <Link href={href}>
      <a className="navigation__link" {...props}>
        {children}
      </a>
    </Link>
  )
}
