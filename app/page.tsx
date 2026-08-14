export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 font-sans">
      <main className="flex max-w-xl flex-col items-center text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Portfolio
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Folio
        </h1>
        <p className="mt-6 text-xl text-zinc-700 dark:text-zinc-300">
          Muhammad Ahsan
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          A personal portfolio website is coming soon.
        </p>
      </main>
    </div>
  );
}
