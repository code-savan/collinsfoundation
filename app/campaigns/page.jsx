import Link from 'next/link';
import { campaigns } from '../data/fundraising';

export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-6 py-32">
        <p className="text-[#8dc220] font-semibold uppercase tracking-[0.2em] text-xs">Campaigns</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-5 tracking-tight">Current and past fundraising campaigns.</h1>
        <p className="text-gray-600 max-w-2xl text-lg">Dummy campaign previews for the next public release.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {campaigns.map((campaign) => {
            const progress = Math.round((campaign.raised / campaign.goal) * 100);
            return (
              <Link key={campaign.slug} href={`/campaigns/${campaign.slug}`} className="rounded-3xl border bg-white p-6 shadow-sm block hover:shadow-md transition">
                <div className="text-xs uppercase tracking-wider text-[#5d8708] font-semibold mb-3">{campaign.status}</div>
                <h2 className="text-2xl font-bold mb-2">{campaign.title}</h2>
                <p className="text-gray-600 mb-5">{campaign.summary}</p>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#8dc220] rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₦{campaign.raised.toLocaleString()}</span>
                    <span>₦{campaign.goal.toLocaleString()}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#5d8708]">{progress}% funded</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
