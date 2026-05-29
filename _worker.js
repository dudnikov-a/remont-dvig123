export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const ua = (request.headers.get('User-Agent') || '').toLowerCase();
    
    const blocked = ['ahrefs', 'semrushbot', 'bingbot', 'baiduspider', 'yandex', 'sogou', 'dotbot', 'mj12bot'];
    for (const bot of blocked) {
      if (ua.includes(bot) && !ua.includes('googlebot')) {
        return new Response('Access Denied', { status: 403 });
      }
    }
    
    return env.ASSETS.fetch(request);
  }
};
