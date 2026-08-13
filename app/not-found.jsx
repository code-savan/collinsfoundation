import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-white">
      <section className="max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-light">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">This page is not available.</h1>
        <p className="mt-6 text-base leading-7 text-gray-400">
          The page may have moved, or the campaign link may no longer be active. Return home or view current campaigns.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 font-bold text-white hover:bg-accent-dark">
            Back home
          </Link>
          <Link href="/campaigns" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-6 font-bold text-white hover:bg-white/10">
            View campaigns
          </Link>
        </div>
      </section>
    </main>
  );
}
