export async function handle({ event, resolve }) {
  const ip =
    event.request.headers.get('cf-connecting-ip') ||
    event.request.headers.get('x-forwarded-for') ||
    'unknown';

  console.log(`[IP] ${ip} ${event.request.method} ${event.url.pathname}`);

  return resolve(event);
}