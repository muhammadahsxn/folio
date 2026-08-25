import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Next.js", "Python"],
  },
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "JavaFX", "Kotlin"],
  },
  {
    category: "Database",
    items: ["MySQL", "PostgreSQL", "Neon"],
  },
];

export default function Home() {
  return (
    <main>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 pb-24 pt-36 sm:px-8 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Hero Text */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Software Engineer & UI Designer
              </p>

              <h1 className="mt-6 font-display text-[clamp(3.5rem,8.5vw,8rem)] font-bold leading-[0.8] tracking-[-0.075em]">
                Muhammad
                <br />
                <span className="text-[var(--muted)]">Ahsan.</span>
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-8 text-[var(--muted)]">
                I build digital products at the intersection of software
                engineering and interface design—turning ideas into useful,
                thoughtful experiences.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Explore projects →
                </Link>

                <Link
                  href="/design"
                  className="rounded-full border border-[var(--foreground)]/25 px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-white/50"
                >
                  UI/UX work
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:justify-self-end">
              <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden border border-[var(--foreground)]/20 bg-[#ded9d0] lg:min-h-[460px]">
                <Image
                  src="/images/profile.jpg"
                  alt="Muhammad Ahsan"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                />
              </div>

              <div className="mt-4 flex justify-between border-t border-[var(--foreground)]/15 pt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">
                <span>Wah, Pakistan</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENTLY
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              01 / Currently
            </p>

            <div className="grid gap-px border border-[var(--foreground)]/15 bg-[var(--foreground)]/15 sm:grid-cols-2">
              {/* Education */}
              <div className="bg-[var(--background)] p-8 lg:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Education
                </p>

                <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em]">
                  BS Software Engineering
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  COMSATS University Islamabad,
                  <br />
                  Wah Campus
                </p>
              </div>

              {/* Leadership */}
              <div className="bg-[var(--background)] p-8 lg:p-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Leadership
                </p>

                <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.04em]">
                  President
                </h2>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  ACM CUI Wah Chapter
                </p>

                <a
                  href="https://www.linkedin.com/company/acmcuiwah/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-xs font-semibold underline underline-offset-4 transition-colors hover:text-[var(--accent)]"
                >
                  View chapter ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TOOLKIT
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / Toolkit
              </p>

              <h2 className="mt-5 max-w-sm font-display text-4xl font-bold leading-[0.95] tracking-[-0.05em]">
                What I work with.
              </h2>
            </div>

            <div className="divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
              {skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="grid gap-4 py-7 transition-colors hover:bg-white/30 sm:grid-cols-[60px_150px_1fr]"
                >
                  <span className="font-mono text-xs text-[var(--muted)]">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-lg font-bold tracking-[-0.03em]">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Tools */}
          <div className="mt-8 grid gap-4 border-t border-[var(--foreground)]/15 pt-8 sm:grid-cols-[210px_1fr]">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
              Design Tools
            </p>

            <p className="text-sm leading-7 text-[var(--muted)]">
              Figma · Adobe Illustrator · Adobe Photoshop · Adobe InDesign
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SOFTWARE PROJECTS
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / Selected Work
              </p>

              <h2 className="mt-5 font-display text-5xl font-bold tracking-[-0.055em] sm:text-6xl">
                Software projects.
              </h2>
            </div>

            <Link
              href="/projects"
              className="w-fit border-b border-[var(--foreground)]/30 pb-1 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View all →
            </Link>
          </div>

          <div className="mt-14 divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
            {/* Hirely */}
            <Link
              href="/projects"
              className="group -mx-3 grid gap-6 px-3 py-10 transition-colors hover:bg-white/35 md:grid-cols-[60px_1fr_200px_30px]"
            >
              <span className="font-mono text-xs text-[var(--muted)]">
                01
              </span>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  AI Product
                </p>

                <h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em]">
                  Hirely
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                  An AI-powered CV analysis platform designed to turn resumes
                  into clear, actionable feedback.
                </p>
              </div>

              <p className="text-xs leading-6 text-[var(--muted)]">
                Next.js
                <br />
                TypeScript
                <br />
                AI
              </p>

              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            {/* Folio */}
            <Link
              href="/projects"
              className="group -mx-3 grid gap-6 px-3 py-10 transition-colors hover:bg-white/35 md:grid-cols-[60px_1fr_200px_30px]"
            >
              <span className="font-mono text-xs text-[var(--muted)]">
                02
              </span>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Portfolio
                </p>

                <h3 className="mt-3 font-display text-4xl font-bold tracking-[-0.05em]">
                  Folio
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                  A personal portfolio combining software engineering,
                  interface design, and AI-assisted development.
                </p>
              </div>

              <p className="text-xs leading-6 text-[var(--muted)]">
                Next.js
                <br />
                TypeScript
                <br />
                Tailwind
              </p>

              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          UI / UX DESIGN
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                04 / UI & UX
              </p>

              <h2 className="mt-5 font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                Design
                <br />
                work.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
                I also design the interfaces I build—working with composition,
                hierarchy, visual systems, and interaction to make digital
                products feel intentional.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {/* Shure */}
                <Link href="/design" className="group">
                  <div className="overflow-hidden border border-[var(--foreground)]/15 bg-[#ddd8cf]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/design/shure/Shure.png"
                        alt="Shure UI design project"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-start justify-between border-t border-[var(--foreground)]/15 p-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          UI / UX
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.035em]">
                          Shure
                        </h3>
                      </div>

                      <span className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>

                {/* TheShoeU */}
                <Link href="/design" className="group">
                  <div className="overflow-hidden border border-[var(--foreground)]/15 bg-[#ddd8cf]">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/images/design/theshoeu/TheShoeU.png"
                        alt="TheShoeU UI design project"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-start justify-between border-t border-[var(--foreground)]/15 p-4">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                          UI / UX
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.035em]">
                          TheShoeU
                        </h3>
                      </div>

                      <span className="transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              <Link
                href="/design"
                className="mt-8 inline-block border-b border-[var(--foreground)]/30 pb-1 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Explore design work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              05 / About
            </p>

            <div>
              <p className="max-w-4xl font-display text-4xl font-bold leading-[1] tracking-[-0.05em] sm:text-5xl">
                I like moving between code and canvas—understanding how
                something works, then figuring out how it should feel.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[var(--foreground)]/30 pb-1 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-24 lg:py-36">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            06 / Contact
          </p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-4xl font-display text-6xl font-bold leading-[0.85] tracking-[-0.07em] sm:text-7xl lg:text-9xl">
              Let&apos;s make
              <br />
              something.
            </h2>

            <a
              href="mailto:muhahsxn@gmail.com"
              className="inline-flex w-fit rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              muhahsxn@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}