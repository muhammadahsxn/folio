type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-end">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#373332]/40">
        {eyebrow}
      </p>

      <div>
        <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 max-w-xl text-base leading-7 text-[#373332]/55">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}