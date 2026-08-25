import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Building web applications with modern frontend and backend technologies, with a growing focus on AI-powered products.",
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "Designing interfaces with attention to hierarchy, composition, typography, usability, and visual consistency.",
  },
  {
    number: "03",
    title: "AI-Assisted Development",
    description:
      "Using AI as a development and thinking partner to explore ideas, solve problems, and accelerate implementation.",
  },
];

const highlights = [
  ["Education", "BS Software Engineering", "COMSATS University Islamabad, Wah Campus"],
  ["Leadership", "President", "ACM CUI Wah Chapter"],
  ["Location", "Wah, Pakistan", "Available for remote opportunities"],
  ["Focus", "Software + Design", "Building useful digital products"],
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            About
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="font-display text-[clamp(3.5rem,8.5vw,8rem)] font-bold leading-[0.82] tracking-[-0.075em]">
              Muhammad
              <br />
              <span className="text-[var(--muted)]">Ahsan.</span>
            </h1>

            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Software engineering student, UI designer, and builder exploring
              the space between technology and visual communication.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / Introduction
              </p>
            </div>

            <div>
              <p className="max-w-4xl font-display text-3xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
                I build things, break things, learn how they work, and then
                build them better.
              </p>

              <div className="mt-10 grid gap-6 text-base leading-8 text-[var(--muted)] md:grid-cols-2">
                <p>
                  I&apos;m a BS Software Engineering student at COMSATS
                  University Islamabad, Wah Campus. My interests sit across
                  software engineering, AI, and interface design.
                </p>

                <p>
                  I enjoy taking an idea from a rough concept to something
                  tangible—whether that means designing an interface,
                  developing a web application, or figuring out how AI can make
                  a product more useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHOTO + DETAILS
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden border border-[var(--foreground)]/15 bg-[#ded9d0]">
            <Image
              src="/images/profile.jpg"
              alt="Muhammad Ahsan"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              02 / Details
            </p>

            <div className="mt-10 divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
              {highlights.map(([label, value, description]) => (
                <div
                  key={label}
                  className="grid gap-3 py-7 sm:grid-cols-[150px_1fr]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {label}
                  </p>

                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-[-0.035em]">
                      {value}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/muhammadahsxn"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border-b border-[var(--foreground)]/30 pb-1 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT I DO
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / What I do
              </p>

              <h2 className="mt-5 max-w-sm font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                Two sides.
                <br />
                One builder.
              </h2>
            </div>

            <div className="divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
              {focusAreas.map((area) => (
                <div
                  key={area.number}
                  className="grid gap-5 py-8 sm:grid-cols-[60px_200px_1fr]"
                >
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {area.number}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-[-0.035em]">
                    {area.title}
                  </h3>

                  <p className="text-sm leading-7 text-[var(--muted)]">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEADERSHIP
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / Leadership
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                President
                <br />
                <span className="text-[var(--muted)]">
                  ACM CUI Wah Chapter
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
                Alongside my technical and design work, I lead the ACM student
                chapter at CUI Wah. The role involves working with students,
                organizing technical activities, coordinating teams, and
                contributing to a stronger computing community on campus.
              </p>

              <a
                href="https://www.linkedin.com/company/acmcuiwah/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block rounded-full border border-[var(--foreground)]/25 px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)]"
              >
                ACM CUI Wah Chapter ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-24 lg:py-36">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            05 / Approach
          </p>

          <h2 className="mt-8 max-w-5xl font-display text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Good software should work well.
            <br />
            <span className="text-[var(--muted)]">
              Good design should make that obvious.
            </span>
          </h2>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-24 lg:py-36">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Next
          </p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl font-display text-6xl font-bold leading-[0.85] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Have a project
              <br />
              in mind?
            </h2>

            <Link
              href="/contact"
              className="w-fit rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}