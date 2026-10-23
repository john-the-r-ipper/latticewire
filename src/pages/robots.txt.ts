import type { APIRoute } from 'astro';
import { siteConfig } from '../../site.config.mjs';

export const GET: APIRoute = () =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      '',
      `Sitemap: ${siteConfig.siteUrl}${siteConfig.basePath}sitemap-index.xml`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
