import otaClient from '@crowdin/ota-client';

class SitemapRoute {
    constructor(href, priority = 1, changeFrequency = 'daily', lastModified = new Date()) {
        this.href = href;
        this.priority = priority;
        this.changeFrequency = changeFrequency;
        this.lastModified = lastModified;
        this.alternates = {};
    }
}

export default async function sitemap() {
    const client = new otaClient(process.env.CROWDIN_DISTRO_ID);
    const locales = await client.listLanguages();
    const links = [
        new SitemapRoute('/'),
        new SitemapRoute('/about'),
        new SitemapRoute('/team'),
        new SitemapRoute('/legal/cookies', 1, 'monthly'),
        new SitemapRoute('/legal/terms', 1, 'monthly'),
        new SitemapRoute('/legal/privacy', 1, 'monthly'),
        new SitemapRoute('/oss', 1, 'monthly'),
        new SitemapRoute('/oss/contributing', 1, 'monthly'),
        new SitemapRoute('/oss/security', 1, 'monthly'),
        new SitemapRoute('/oss/contributors', 1, 'weekly'),
    ];
    const otherLinks = [
        new SitemapRoute('/profile/alex'),
        new SitemapRoute('/profile/ben'),
        new SitemapRoute('/profile/nezha'),
        new SitemapRoute('/profile/oblong'),
    ];
    /** @type {import('next').MetadataRoute.Sitemap} */
    const sitemap = [];
    for (const link in links) {
        const langs = {};
        for (const lang in locales) {
            langs[lang] = `/${lang}${link.href}`;
        }
        sitemap.push({
            ...link,
            alternates: {
                languages: langs,
            },
        });
    }
    for (const link in otherLinks) sitemap.push(link);
    return sitemap;
}
