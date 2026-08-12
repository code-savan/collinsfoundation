import { notFound } from 'next/navigation';
import Link from 'next/link';
import { campaigns, donorProof } from '../../data/fundraising';

export default function CampaignDetailPage({ params }) {
  const campaign = campaigns.find((item) => item.slug === params.slug);
  if (!campaign) return notFound();

  const progress = Math.round((campaign.raised / campaign.goal) * 100);
  const remaining = campaign.goal - campaign.raised;

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-32">
        <p className="text-accent-dark font-semibold uppercase tracking-[0.2em] text-xs">Campaign</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 tracking-tight">{campaign.title}</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl font-inter">{campaign.summary}</p>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-8">
          <div className="rounded-3xl border border-gray-100 p-8 bg-white shadow-sm">
            <div className="flex justify-between text-sm text-gray-500 mb-3 flex-wrap gap-2 font-inter">
              <span>Raised: ₦{campaign.raised.toLocaleString()}</span>
              <span>Goal: ₦{campaign.goal.toLocaleString()}</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-3 text-sm font-semibold text-accent-dark font-inter">{progress}% funded</div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ['Current donors', '248'],
                ['Communities touched', '31'],
                ['Estimated remaining', `₦${remaining.toLocaleString()}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-gray-50 p-5 border border-gray-100">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-inter">{label}</div>
                  <div className="text-xl font-bold mt-1">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-gray-100 p-8 bg-ink text-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Suggested next step</h2>
            <p className="text-white/75 mb-6 font-inter">Use this page as the preview for a live campaign update, donor wall, and payment CTA.</p>
            <div className="space-y-3 text-sm text-white/80 font-inter">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5">1. Publish campaign story</div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5">2. Connect donor feed</div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/5">3. Add sharing CTA</div>
            </div>
            <Link href="/donate" className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 font-semibold text-white w-full hover:bg-accent-dark transition-colors">Preview donation page</Link>
          </aside>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-3xl border border-gray-100 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Campaign story</h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-inter">{campaign.story}</p>
            <p className="text-gray-600 leading-relaxed font-inter">This dummy version shows how a live story block, impact report, and update cadence can live on a fundraising page without relying on the homepage alone.</p>
          </div>

          <div className="rounded-3xl border border-gray-100 p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Recent supporters</h2>
            <div className="space-y-3">
              {donorProof.slice(0, 4).map((donor) => (
                <div key={donor.name} className="rounded-2xl bg-gray-50 border border-gray-100 p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{donor.name}</div>
                    <div className="text-sm text-gray-500 font-inter">{donor.cause}</div>
                  </div>
                  <div className="font-bold text-accent-dark">{donor.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
