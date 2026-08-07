// Newsletter subscribe endpoint.
//
// This currently just validates the email and logs it server-side.
// To go live, wire this up to a real Email Service Provider, e.g.:
//   - Mailchimp:   https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
//   - ConvertKit:  https://developers.convertkit.com/
//   - Resend:      https://resend.com/docs/api-reference/contacts/create-contact
//
// Add your API key as an environment variable (e.g. MAILCHIMP_API_KEY) and
// call the provider's API here instead of just logging.

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // TODO: Replace with a real ESP integration.
    console.log('[newsletter] new subscriber:', email);

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
