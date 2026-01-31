const fs = require('fs');
const path = require('path');

const domain = 'https://mangomindbd.com';
const lastmod = new Date().toISOString().split('T')[0];

const staticRoutes = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/models', priority: '0.9', changefreq: 'weekly' },
    { url: '/blogs', priority: '0.8', changefreq: 'daily' },
];

const blogStorePath = path.join(__dirname, '../src/pages/blogs');
const blogFiles = fs.readdirSync(blogStorePath).filter(file => file.endsWith('.tsx'));

const blogRoutes = blogFiles.map(file => {
    const slug = file.replace('.tsx', '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return {
        url: `/blog/${slug}`,
        priority: '0.7',
        changefreq: 'monthly'
    };
});

const allRoutes = [...staticRoutes, ...blogRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${domain}${route.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const destPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(destPath, sitemap);

console.log(`✅ Sitemap generated with ${allRoutes.length} URLs at ${destPath}`);
