import Link from 'next/link';
import { campaigns, donationTiers, impactMetrics, donorProof } from '../data/fundraising';

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-accent-dark font-semibold uppercase tracking-[0.2em] text-xs">Donate</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-5 tracking-tight text-balance">Fund the work that changes lives.</h1>
        <p className="text-gray-600 max-w-2xl text-lg mb-10">Every donation supports education, agriculture, and healthcare across Eastern Nigeria.</p>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {impactMetrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-gray-100 p-6 bg-gray-50">
              <div className="text-3xl font-bold text-accent-dark">{item.value}</div>
              <div className="text-sm text-gray-500 mt-1 font-inter">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 mb-10">
          <div className="rounded-3xl border border-gray-100 p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Impact tiers</h2>
            <div className="space-y-4">
              {donationTiers.map((tier) => (
                <div key={tier.amount} className="rounded-2xl bg-gray-50 p-5 border border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div>
                      <div className="font-bold text-lg">₦{tier.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-500 font-inter">{tier.label}</div>
                    </div>
                    <div className="text-sm text-gray-600 max-w-md sm:text-right font-inter">{tier.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 p-8 bg-ink text-white shadow-sm">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">Current campaigns</h2>
            <div className="space-y-4">
              {campaigns.map((campaign) => {
                const progress = Math.round((campaign.raised / campaign.goal) * 100);
                return (
                  <Link key={campaign.slug} href={`/campaigns/${campaign.slug}`} className="block rounded-2xl bg-white/5 hover:bg-white/10 p-5 transition-colors border border-white/5">
                    <div className="flex justify-between gap-4 mb-2">
                      <span className="font-semibold">{campaign.title}</span>
                      <span className="text-xs uppercase tracking-wider text-accent-light font-semibold">{campaign.status}</span>
                    </div>
                    <div className="text-sm text-white/70 mb-3 font-inter">{campaign.summary}</div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${progress}%` }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-8">
          <div className="flex items-center justify-between gap-4 flex-wrap mb-5">
            <h2 className="text-2xl font-bold tracking-tight">Recent Supporters</h2>
            <span className="text-sm text-gray-500 font-inter">Preview mode · dummy data</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {donorProof.map((donor) => (
              <div key={donor.name} className="rounded-2xl border border-gray-100 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{donor.name}</div>
                    <div className="text-sm text-gray-500 font-inter">{donor.cause}</div>
                  </div>
                  <div className="font-bold text-accent-dark">{donor.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
