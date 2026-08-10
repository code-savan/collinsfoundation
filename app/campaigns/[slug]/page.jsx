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
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-[#8dc220] font-semibold uppercase tracking-wider text-sm">Campaign</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">{campaign.title}</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">{campaign.summary}</p>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-8">
          <div className="rounded-3xl border p-6 md:p-8">
            <div className="flex justify-between text-sm text-gray-500 mb-3 flex-wrap gap-2">
              <span>Raised: ₦{campaign.raised.toLocaleString()}</span>
              <span>Goal: ₦{campaign.goal.toLocaleString()}</span>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#8dc220] rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-3 text-sm font-semibold text-[#5d8708]">{progress}% funded</div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                ['Current donors', '248'],
                ['Communities touched', '31'],
                ['Estimated remaining', `₦${remaining.toLocaleString()}`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-gray-50 p-4 border">
                  <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
                  <div className="text-xl font-bold mt-1">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border p-6 md:p-8 bg-[#0f1a09] text-white">
            <h2 className="text-2xl font-bold mb-4">Suggested next step</h2>
            <p className="text-white/75 mb-6">Use this page as the preview for a live campaign update, donor wall, and payment CTA.</p>
            <div className="space-y-3 text-sm text-white/80">
              <div className="rounded-2xl bg-white/5 p-4">1. Publish campaign story</div>
              <div className="rounded-2xl bg-white/5 p-4">2. Connect donor feed</div>
              <div className="rounded-2xl bg-white/5 p-4">3. Add sharing CTA</div>
            </div>
            <Link href="/donate" className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#8dc220] px-5 py-3 font-semibold text-[#0f1a09] w-full">Preview donation page</Link>
          </aside>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-3xl border p-6 md:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Campaign story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{campaign.story}</p>
            <p className="text-gray-600 leading-relaxed">This dummy version shows how a live story block, impact report, and update cadence can live on a fundraising page without relying on the homepage alone.</p>
          </div>

          <div className="rounded-3xl border p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Recent supporters</h2>
            <div className="space-y-3">
              {donorProof.slice(0, 4).map((donor) => (
                <div key={donor.name} className="rounded-2xl bg-gray-50 border p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{donor.name}</div>
                    <div className="text-sm text-gray-500">{donor.cause}</div>
                  </div>
                  <div className="font-bold text-[#5d8708]">{donor.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
