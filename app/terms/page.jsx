import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | Collins Onyeaji Foundation',
  description: 'Website terms of use for Collins Onyeaji Foundation.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Terms of use</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">Terms for using this website.</h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-gray-600">
          <p>
            By using this website, you agree to use it responsibly and only for lawful purposes connected with learning about or supporting Collins Onyeaji Foundation.
          </p>
          <p>
            Campaign totals, donor walls, and supporter previews may include sample data until live payment and donor systems are fully connected.
          </p>
          <p>
            Donations are subject to the terms of the payment provider used at checkout. Bank transfer details are provided as an alternative giving path.
          </p>
          <p>
            This page is a plain-language placeholder and should be reviewed by counsel before large-scale fundraising campaigns go live.
          </p>
        </div>
        <Link href="/" className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 font-bold text-white hover:bg-accent-dark">
          Back home
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </section>
    </main>
  );
}
