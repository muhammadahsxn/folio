import Link from "next/link";

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Design", href: "/design" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-[-0.04em]"
        >
          MA<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[var(--foreground)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}