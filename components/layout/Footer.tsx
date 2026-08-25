import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-[-0.05em]">
              Muhammad Ahsan<span className="text-[var(--accent)]">.</span>
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">
              Software Engineer & UI Designer building thoughtful digital
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium">
            <a
              href="mailto:muhahsxn@gmail.com"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Email
            </a>

            <a
              href="https://github.com/muhammadahsxn"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammadahsxn"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Muhammad Ahsan. All rights reserved.</p>

          <p>
            Built as part of the{" "}
            <a
              href="#"
              className="font-medium text-[var(--foreground)] underline underline-offset-4"
            >
              FlyRank AI Fluency Internship
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}