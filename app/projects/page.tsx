import Link from "next/link";

const engineeringSkills = [
  {
    category: "Frontend",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    tools: ["Next.js Server Actions", "Prisma ORM", "Node.js"],
  },
  {
    category: "Languages",
    tools: ["TypeScript", "JavaScript", "Python", "C++", "Java", "Kotlin"],
  },
  {
    category: "Database",
    tools: ["PostgreSQL", "Neon", "MySQL"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Software Engineering
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.075em]">
              Selected
              <br />
              <span className="text-[var(--muted)]">projects.</span>
            </h1>

            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Software projects where I explore product development, AI,
              application architecture, and the connection between useful
              functionality and thoughtful interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT 01 — HIRELY
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Project Label */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / AI Product
              </p>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[var(--muted)]">
                An AI-powered CV analysis platform built around structured
                feedback and actionable recommendations.
              </p>
            </div>

            {/* Project Content */}
            <div>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <h2 className="font-display text-6xl font-bold tracking-[-0.06em] sm:text-7xl">
                    Hirely
                  </h2>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Next.js · TypeScript · Prisma · PostgreSQL · AI
                  </p>
                </div>

                <a
                  href="https://github.com/muhammadahsxn/hirely"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-full border border-[var(--foreground)]/25 px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)]"
                >
                  GitHub ↗
                </a>
              </div>

              {/* Problem */}
              <div className="mt-16 border-y border-[var(--foreground)]/15">
                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    The idea
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                    Resumes are often evaluated through vague advice and
                    generic feedback. Hirely explores how AI can turn CV
                    analysis into structured, understandable insights that
                    help users identify what is actually weakening their
                    application.
                  </p>
                </div>

                {/* What I built */}
                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    What I built
                  </p>

                  <div className="max-w-2xl">
                    <p className="text-base leading-8 text-[var(--muted)]">
                      Hirely takes a CV through a structured analysis
                      pipeline, validates the resulting data, stores the
                      analysis, and presents the insights through a dashboard.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "AI-powered CV analysis",
                        "Overall CV scoring",
                        "Recruiter impression",
                        "Strengths & weaknesses",
                        "Skills analysis",
                        "Section-level feedback",
                        "Prioritized recommendations",
                        "Analysis history",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="border border-[var(--foreground)]/15 px-4 py-3 text-sm text-[var(--muted)]"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="grid gap-6 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Architecture
                  </p>

                  <div className="max-w-2xl">
                    <div className="border border-[var(--foreground)]/15 p-5 font-mono text-xs leading-8 text-[var(--muted)]">
                      Upload CV
                      <br />
                      ↓
                      <br />
                      Extract CV Content
                      <br />
                      ↓
                      <br />
                      AI Analysis
                      <br />
                      ↓
                      <br />
                      Structured Validation
                      <br />
                      ↓
                      <br />
                      Store Analysis
                      <br />
                      ↓
                      <br />
                      Display Insights
                    </div>

                    <p className="mt-6 text-sm leading-7 text-[var(--muted)]">
                      The product is designed around structured AI output
                      instead of simply displaying a raw model response. This
                      makes the analysis consistent and easier to turn into
                      useful product experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Technology
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js 16",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Prisma",
                    "Neon PostgreSQL",
                    "Neon Auth",
                    "AI",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--foreground)]/20 px-4 py-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Status
                </p>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  Working MVP — core authentication, CV analysis, persistent
                  analysis history, structured results, dashboard, and
                  settings are functional.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <a
                        href="https://github.com/muhammadahsxn/hirely"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5"
                    >
                        View repository ↗
                    </a>

                    <a
                        href="https://hirely-alpha-ashen.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[var(--foreground)]/25 px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
                    >
                        Live version ↗
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT 02 — FOLIO
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / Portfolio
              </p>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[var(--muted)]">
                A personal portfolio designed to bring my software engineering
                and UI/UX work into one coherent digital identity.
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <h2 className="font-display text-6xl font-bold tracking-[-0.06em] sm:text-7xl">
                    Folio
                  </h2>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    Next.js · TypeScript · Tailwind CSS · AI-assisted workflow
                  </p>
                </div>

                <a
                  href="https://github.com/muhammadahsxn/folio"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit rounded-full border border-[var(--foreground)]/25 px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5 hover:border-[var(--foreground)]"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="mt-16 border-y border-[var(--foreground)]/15">
                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    The idea
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                    Build a portfolio that doesn't simply list skills, but
                    communicates who I am, what I build, and how software
                    engineering and interface design overlap in my work.
                  </p>
                </div>

                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    What I built
                  </p>

                  <div className="max-w-2xl">
                    <p className="text-base leading-8 text-[var(--muted)]">
                      Folio is being developed as a multi-page personal
                      portfolio with dedicated spaces for software projects,
                      UI/UX work, about information, and contact.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {[
                        "Personal identity",
                        "Software project showcase",
                        "UI/UX project showcase",
                        "Engineering toolkit",
                        "Design toolkit",
                        "About page",
                        "Contact page",
                        "Responsive experience",
                      ].map((feature) => (
                        <div
                          key={feature}
                          className="border border-[var(--foreground)]/15 px-4 py-3 text-sm text-[var(--muted)]"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Approach
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                    The project is being developed with an AI-assisted
                    workflow, using AI as a thinking and development partner
                    while keeping the product direction, content, and design
                    decisions intentional.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                  Technology
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vercel",
                    "AI-assisted development",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--foreground)]/20 px-4 py-2 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://github.com/muhammadahsxn/folio"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-5 py-2.5 text-xs font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5"
                >
                  View repository ↗
                </a>

                <a
                  href="https://folio-theta-dusky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--foreground)]/25 px-5 py-2.5 text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  Live version ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING TOOLKIT
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / Toolkit
              </p>

              <h2 className="mt-5 max-w-sm font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                Engineering
                <br />
                toolkit.
              </h2>
            </div>

            <div className="divide-y divide-[var(--foreground)]/15 border-y border-[var(--foreground)]/20">
              {engineeringSkills.map((skill, index) => (
                <div
                  key={skill.category}
                  className="grid gap-5 py-8 sm:grid-cols-[60px_160px_1fr]"
                >
                  <span className="font-mono text-xs text-[var(--muted)]">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-xl font-bold tracking-[-0.035em]">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--foreground)]/15 px-3 py-1.5 text-xs text-[var(--muted)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              More work
              <br />
              is coming.
            </h2>

            <Link
              href="/design"
              className="w-fit rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore UI/UX work →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}