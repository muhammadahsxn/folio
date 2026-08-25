import Image from "next/image";
import Link from "next/link";

const designTools = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Adobe InDesign",
];

const designSkills = [
  "UI Design",
  "UX Design",
  "Visual Hierarchy",
  "Layout & Composition",
  "Typography",
  "Design Systems",
  "Wireframing",
  "Prototyping",
];

export default function DesignPage() {
  return (
    <main className="min-h-screen">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            UI / UX Design
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[0.82] tracking-[-0.075em]">
              Design
              <br />
              <span className="text-[var(--muted)]">work.</span>
            </h1>

            <p className="max-w-md text-base leading-7 text-[var(--muted)]">
              Interfaces designed with attention to hierarchy, composition,
              typography, interaction, and the small details that make a
              digital experience feel intentional.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT 01 — SHURE
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Label */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                01 / UI Design
              </p>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[var(--muted)]">
                A visual interface project exploring product presentation,
                hierarchy, and a refined digital shopping experience.
              </p>
            </div>

            {/* Project */}
            <div>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <h2 className="font-display text-6xl font-bold tracking-[-0.06em] sm:text-7xl">
                    Shure
                  </h2>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    UI / UX · Visual Design
                  </p>
                </div>

              </div>

              {/* Image */}
              <div className="group mt-12 block">
                <div className="overflow-hidden border border-[var(--foreground)]/15 bg-[#ddd8cf]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/design/shure/Shure.png"
                      alt="Shure UI design project"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--foreground)]/15 px-5 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Selected interface
                    </span>

                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-10 border-y border-[var(--foreground)]/15">
                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Focus
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                    The design focuses on creating a clear visual hierarchy,
                    balancing product content with supporting information, and
                    making the interface easy to navigate.
                  </p>
                </div>

                <div className="grid gap-6 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Skills applied
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "UI Design",
                      "Layout",
                      "Typography",
                      "Visual Hierarchy",
                      "Composition",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--foreground)]/15 px-4 py-2 text-xs text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT 02 — THESHOEU
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Label */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                02 / UI Design
              </p>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[var(--muted)]">
                A footwear-focused interface exploring visual product
                presentation, browsing, and modern e-commerce design.
              </p>
            </div>

            {/* Project */}
            <div>
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <h2 className="font-display text-6xl font-bold tracking-[-0.06em] sm:text-7xl">
                    TheShoeU
                  </h2>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    UI / UX · E-Commerce
                  </p>
                </div>

              </div>

              {/* Image */}
              <div className="group mt-12 block">
                <div className="overflow-hidden border border-[var(--foreground)]/15 bg-[#ddd8cf]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/design/theshoeu/TheShoeU.png"
                      alt="TheShoeU UI design project"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--foreground)]/15 px-5 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      Selected interface
                    </span>

                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-10 border-y border-[var(--foreground)]/15">
                <div className="grid gap-6 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Focus
                  </p>

                  <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                    The interface explores how strong visual presentation,
                    product hierarchy, and intuitive navigation can work
                    together in an e-commerce experience.
                  </p>
                </div>

                <div className="grid gap-6 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Skills applied
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "UI Design",
                      "UX Design",
                      "E-Commerce",
                      "Typography",
                      "Layout",
                      "Visual Hierarchy",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--foreground)]/15 px-4 py-2 text-xs text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESIGN TOOLKIT
      ========================================================= */}
      <section className="border-b border-[var(--foreground)]/15 px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                03 / Toolkit
              </p>

              <h2 className="mt-5 max-w-sm font-display text-5xl font-bold leading-[0.9] tracking-[-0.055em] sm:text-6xl">
                Design
                <br />
                toolkit.
              </h2>
            </div>

            <div>
              {/* Tools */}
              <div className="border-y border-[var(--foreground)]/20">
                <div className="grid gap-5 border-b border-[var(--foreground)]/15 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Tools
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {designTools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--foreground)]/15 px-4 py-2 text-xs text-[var(--muted)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="grid gap-5 py-8 sm:grid-cols-[180px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--accent)]">
                    Skills
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {designSkills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--foreground)]/15 px-4 py-2 text-xs text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                My design workflow combines visual exploration with structured
                thinking—using design tools to translate ideas into interfaces
                that are clear, consistent, and purposeful.
              </p>
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
              Code,
              <br />
              then design.
            </h2>

            <Link
              href="/projects"
              className="w-fit rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              View software projects →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}