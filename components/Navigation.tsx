import { NavigationLink } from './NavigationLink'

const sections = [
  {
    href: '/discover',
    label: 'Discover',
  },
  {
    href: '/browse',
    label: 'Browse',
  },
  {
    href: '/store',
    label: 'Store',
  },
  {
    href: '/platforms',
    label: 'Platforms',
  },
  {
    href: '/releases',
    label: 'Releases',
  },
  {
    href: '/mobile',
    label: 'Mobile',
  },
  {
    href: '/articles',
    label: 'Articles',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/news',
    label: 'News',
  },
  {
    href: '/contacts',
    label: 'Contacts',
  },
]

export const Navigation = () => {
  return (
    <nav className="navigation container">
      <ul className="navigation__list">
        {sections.map((section) => (
          <li className="navigation__item" key={section.href}>
            <NavigationLink href={section.href}>{section.label}</NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
