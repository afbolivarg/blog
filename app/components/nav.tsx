'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/books', label: 'books' },
  { href: '/writing', label: 'writing' },
  { href: '/work', label: 'work' },
  { href: '/projects', label: 'projects' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/';
  }

  return pathname.startsWith(href);
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${
        active
          ? 'text-neutral-900 dark:text-neutral-100'
          : 'text-neutral-500 dark:text-neutral-400'
      }`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Site"
      className="mb-8 flex flex-wrap gap-4 text-sm tracking-tight"
    >
      {navItems.map(({ href, label }) => (
        <NavLink
          key={href}
          href={href}
          label={label}
          active={isActive(pathname, href)}
        />
      ))}
    </nav>
  );
}
