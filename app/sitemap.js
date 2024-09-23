import otaClient from '@crowdin/ota-client';

class SitemapRoute {
    constructor(href='', priority = 1, changeFrequency = 'daily', lastModified = new Date()) {
        const formattedURL = new URL(href, 'https://thefemdevs.com');
        this.href = formattedURL;
        this.priority = priority;
        this.changeFrequency = changeFrequency;
        this.lastModified = lastModified;
        this.alternates = {
            languages: {},
        };
    }
    addLang(lang) {
        this.alternates.languages[lang] = `https://${this.href.host}/${lang}${this.href.pathname}`;
        return this;
    }
    get JSON() {
        return {
            url: this.href.toString(),
            priority: this.priority,
            changeFrequency: this.changeFrequency,
            lastModified: this.lastModified,
            alternates: this.alternates,
        };
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
    links.forEach(link => locales.forEach(lang => link.addLang(lang)));
    for (const link of [].concat(links, otherLinks)) sitemap.push(link.JSON);
    return sitemap;
}
