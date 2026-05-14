'use client';

import Link from 'next/link';
import { Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Cities', href: '/#cities' },
  { label: 'Travel Styles', href: '/#travel-styles' },
  { label: 'Travel Hacks', href: '/#travel-hacks' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
            <Globe2 size={22} />
          </div>
          <div className="text-left">
            <p className="text-lg font-bold leading-tight">China Easy Travel</p>
            <p className="text-xs text-neutral-500">For foreign visitors</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="hidden rounded-full bg-black px-5 py-2 text-sm font-semibold text-white md:block">
          Plan My Trip
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
