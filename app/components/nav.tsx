'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/books', label: 'books' },
  { href: '/writing', label: 'writing' },
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
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 ${
        active
          ? 'text-neutral-900 dark:text-neutral-100'
          : 'text-neutral-500 dark:text-neutral-400'
      } ${className ?? ''}`}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="Site"
        className="mb-8 flex gap-4 text-sm tracking-tight md:hidden"
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

      <nav
        aria-label="Site"
        className="fixed top-8 right-8 z-10 hidden flex-col items-end gap-2 text-sm tracking-tight md:flex"
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
    </>
  );
}
