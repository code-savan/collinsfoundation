import { notFound } from 'next/navigation';
import { campaigns } from '../../data/fundraising';

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

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="rounded-3xl border p-6 md:p-8">
            <div className="flex justify-between text-sm text-gray-500 mb-3">
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
          </aside>
        </div>
      </section>
    </main>
  );
}
