import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Collins Onyeaji Foundation',
  description: 'Privacy policy for Collins Onyeaji Foundation supporters and website visitors.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">Privacy policy</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">How we handle supporter information.</h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-gray-600">
          <p>
            Collins Onyeaji Foundation collects only the information needed to respond to enquiries, process donations, and send supporter updates when requested.
          </p>
          <p>
            Donation payments are processed by third-party payment providers such as Paystack. We do not store card details on this website.
          </p>
          <p>
            Newsletter subscriptions are opt-in. You may ask us to remove your contact details by emailing info@collinsonyeaji.org.
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
