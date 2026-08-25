import Link from "next/link";

const contactLinks = [
  {
    label: "Email",
    value: "muhahsxn@gmail.com",
    href: "mailto:muhahsxn@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammadahsxn",
    href: "https://www.linkedin.com/in/muhammadahsxn",
  },
  {
    label: "GitHub",
    value: "github.com/muhammadahsxn",
    href: "https://github.com/muhammadahsxn",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Contact
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.075em]">
              Let&apos;s
              <br />
              <span className="text-[var(--muted)]">talk.</span>
            </h1>

            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Have an idea, opportunity, collaboration, or simply want to
              connect? Send me a message.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT DETAILS
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / Get in touch
              </p>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[var(--muted)]">
                The fastest way to reach me is through email or LinkedIn.
              </p>
            </div>

            <div className="divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
              {contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="group grid gap-4 py-8 transition-colors hover:bg-white/30 sm:grid-cols-[60px_150px_1fr_30px]"
                >
                  <span className="font-mono text-xs text-[var(--muted)]">
                    0{index + 1}
                  </span>

                  <span className="font-display text-xl font-bold tracking-[-0.03em]">
                    {link.label}
                  </span>

                  <span className="break-all text-sm text-[var(--muted)]">
                    {link.value}
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION / AVAILABILITY
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 sm:grid-cols-2">
            <div className="border border-[var(--foreground)]/15 p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                Location
              </p>

              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.045em]">
                Wah, Pakistan
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Open to remote opportunities, collaborations, and interesting
                projects.
              </p>
            </div>

            <div className="border border-[var(--foreground)]/15 p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                Interests
              </p>

              <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.045em]">
                Software + Design
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Especially interested in frontend engineering, AI-powered
                products, UI/UX, and building useful digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EMAIL CTA
      ========================================================= */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-24 lg:py-36">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            02 / Start a conversation
          </p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl font-display text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Tell me what
              <br />
              you&apos;re building.
            </h2>

            <a
              href="mailto:muhahsxn@gmail.com"
              className="w-fit rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send an email →
            </a>
          </div>

          <div className="mt-20 border-t border-[var(--foreground)]/15 pt-5">
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}