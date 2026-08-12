import Link from 'next/link';
import { campaigns } from '../data/fundraising';

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-accent-dark font-semibold uppercase tracking-[0.2em] text-xs">Campaigns</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-5 tracking-tight text-balance">Current and past fundraising campaigns.</h1>
        <p className="text-gray-600 max-w-2xl text-lg">Dummy campaign previews for the next public release.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {campaigns.map((campaign) => {
            const progress = Math.round((campaign.raised / campaign.goal) * 100);
            return (
              <Link key={campaign.slug} href={`/campaigns/${campaign.slug}`} className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm block hover:shadow-xl transition-all duration-300 group">
                <div className="text-xs uppercase tracking-wider text-accent-dark font-semibold mb-3">{campaign.status}</div>
                <h2 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent-dark transition-colors">{campaign.title}</h2>
                <p className="text-gray-600 mb-6 font-inter text-sm">{campaign.summary}</p>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 font-inter">
                    <span>₦{campaign.raised.toLocaleString()}</span>
                    <span>₦{campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="text-sm font-semibold text-accent-dark font-inter">{progress}% funded</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
