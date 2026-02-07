import { useEffect } from 'react';

/**
 * Sitemap Proxy Component
 * Renders pure XML sitemap for Google Search Console
 * This works around Figma Make's inability to serve static files
 */
export function SitemapProxy() {
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Homepage -->
  <url>
    <loc>https://sellwithrajnow.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Core Tools & Services -->
  <url>
    <loc>https://sellwithrajnow.com/buyer-magnet-score</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/ai-reports</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/second-opinion</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/intake</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/private-seller-audit</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Legal & Info Pages -->
  <url>
    <loc>https://sellwithrajnow.com/privacy-policy</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/terms-of-service</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/accessibility</loc>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Tracy Seller Center (Priority City) -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-tracy</loc>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/tracy/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Manteca Seller Center -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-manteca</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/manteca/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  
  <!-- Lathrop Seller Center -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-lathrop</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/lathrop/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Mountain House Seller Center -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-mountain-house</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/mountain-house/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Dublin Seller Center -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-dublin</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/dublin/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Pleasanton Seller Center -->
  <url>
    <loc>https://sellwithrajnow.com/seller-center-pleasanton</loc>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/why-didnt-my-home-sell</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/skipping-vs-rejection</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/price-vs-payment</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/are-there-buyers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/relist-or-wait</loc>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/which-price-ranges-moving</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/selective-buyer-market</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/how-long-is-too-long</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/why-price-reductions-dont-work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sellwithrajnow.com/seller-center/pleasanton/dead-zone-pricing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
</urlset>`;

  // Attempt to manipulate the document to render as pure XML
  useEffect(() => {
    // Remove React root and render pure text
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = sitemapXML;
    }
    
    // Try to set content type meta tag
    const existingMeta = document.querySelector('meta[http-equiv="Content-Type"]');
    if (existingMeta) {
      existingMeta.setAttribute('content', 'application/xml; charset=utf-8');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'Content-Type');
      meta.setAttribute('content', 'application/xml; charset=utf-8');
      document.head.appendChild(meta);
    }
  }, []);

  // Render nothing - the useEffect will handle DOM manipulation
  return null;
}
