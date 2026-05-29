export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = (request.headers.get('User-Agent') || '').toLowerCase();
    
    // Редирект с workers.dev на основной домен
    if (url.hostname.includes('workers.dev')) {
      const newUrl = 'https://remont-dvig123.pages.dev' + url.pathname + url.search;
      return Response.redirect(newUrl, 301);
    }
    
    // Блокировка ботов (кроме Google)
    const blockedBots = ['ahrefs', 'semrushbot', 'bingbot', 'baiduspider', 'yandex', 'sogou', 'dotbot', 'mj12bot', 'rogerbot', 'serpstat', 'slurp'];
    for (const bot of blockedBots) {
      if (userAgent.includes(bot) && !userAgent.includes('googlebot')) {
        return new Response('Access Denied', { status: 403 });
      }
    }
    
    // Отдаём страницу
    return env.ASSETS.fetch(request);
  }
};
