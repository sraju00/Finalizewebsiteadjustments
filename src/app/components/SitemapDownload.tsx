import React from 'react';

export function SitemapDownload() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url><loc>https://sellwithrajnow.com/</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/buyer-magnet-score</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/ai-reports</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/second-opinion</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/intake</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/private-seller-audit</loc><priority>0.8</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/contact</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Legal Pages -->
  <url><loc>https://sellwithrajnow.com/privacy-policy</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/terms-of-service</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/accessibility</loc><priority>0.3</priority><changefreq>yearly</changefreq></url>
  
  <!-- Tracy Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-tracy</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/tracy/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Manteca Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-manteca</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/manteca/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Lathrop Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-lathrop</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/lathrop/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Mountain House Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-mountain-house</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/mountain-house/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Dublin Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-dublin</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/dublin/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  
  <!-- Pleasanton Seller Center -->
  <url><loc>https://sellwithrajnow.com/seller-center-pleasanton</loc><priority>0.9</priority><changefreq>weekly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/why-didnt-my-home-sell</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/skipping-vs-rejection</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/price-vs-payment</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/are-there-buyers</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/relist-or-wait</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/which-price-ranges-moving</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/selective-buyer-market</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/how-long-is-too-long</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/why-price-reductions-dont-work</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://sellwithrajnow.com/seller-center/pleasanton/dead-zone-pricing</loc><priority>0.7</priority><changefreq>monthly</changefreq></url>
</urlset>`;

  const handleDownload = () => {
    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sitemapXml);
    alert('Sitemap XML copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Download Sitemap for Google Search Console
          </h1>
          
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">
              📋 Manual Upload Instructions
            </h2>
            <ol className="space-y-2 text-gray-700">
              <li><strong>Step 1:</strong> Click "Download sitemap.xml" button below</li>
              <li><strong>Step 2:</strong> Go to <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Search Console</a></li>
              <li><strong>Step 3:</strong> Select your property: <code className="bg-white px-2 py-1 rounded">sellwithrajnow.com</code></li>
              <li><strong>Step 4:</strong> Navigate to <strong>Sitemaps</strong> in the left sidebar</li>
              <li><strong>Step 5:</strong> Click "Add a new sitemap" and upload the downloaded file</li>
            </ol>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={handleDownload}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              📥 Download sitemap.xml
            </button>
            <button
              onClick={handleCopy}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
            >
              📋 Copy to Clipboard
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Preview (First 10 lines):</h3>
            <pre className="text-xs text-gray-600 overflow-x-auto">
{sitemapXml.split('\n').slice(0, 10).join('\n')}
...
            </pre>
            <p className="text-xs text-gray-500 mt-2">
              Contains all 80+ URLs from your 6 Seller Centers + core pages
            </p>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Why manual upload?</strong> Figma Make's hosting limitations prevent serving XML files with proper content-type headers that Google requires. Manual upload is the most reliable solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
