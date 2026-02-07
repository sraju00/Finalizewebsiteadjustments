import { useEffect } from 'react';

export function SitemapTxt() {
  const urls = [
    'https://sellwithrajnow.com/',
    'https://sellwithrajnow.com/buyer-magnet-score',
    'https://sellwithrajnow.com/ai-reports',
    'https://sellwithrajnow.com/second-opinion',
    'https://sellwithrajnow.com/intake',
    'https://sellwithrajnow.com/private-seller-audit',
    'https://sellwithrajnow.com/privacy-policy',
    'https://sellwithrajnow.com/terms-of-service',
    'https://sellwithrajnow.com/accessibility',
    'https://sellwithrajnow.com/contact',
    'https://sellwithrajnow.com/seller-center-tracy',
    'https://sellwithrajnow.com/seller-center/tracy/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/tracy/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/tracy/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/tracy/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/tracy/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/tracy/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/tracy/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/tracy/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/tracy/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/tracy/dead-zone-pricing',
    'https://sellwithrajnow.com/seller-center-manteca',
    'https://sellwithrajnow.com/seller-center/manteca/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/manteca/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/manteca/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/manteca/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/manteca/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/manteca/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/manteca/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/manteca/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/manteca/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/manteca/dead-zone-pricing',
    'https://sellwithrajnow.com/seller-center-lathrop',
    'https://sellwithrajnow.com/seller-center/lathrop/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/lathrop/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/lathrop/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/lathrop/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/lathrop/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/lathrop/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/lathrop/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/lathrop/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/lathrop/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/lathrop/dead-zone-pricing',
    'https://sellwithrajnow.com/seller-center-mountain-house',
    'https://sellwithrajnow.com/seller-center/mountain-house/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/mountain-house/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/mountain-house/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/mountain-house/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/mountain-house/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/mountain-house/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/mountain-house/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/mountain-house/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/mountain-house/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/mountain-house/dead-zone-pricing',
    'https://sellwithrajnow.com/seller-center-dublin',
    'https://sellwithrajnow.com/seller-center/dublin/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/dublin/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/dublin/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/dublin/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/dublin/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/dublin/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/dublin/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/dublin/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/dublin/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/dublin/dead-zone-pricing',
    'https://sellwithrajnow.com/seller-center-pleasanton',
    'https://sellwithrajnow.com/seller-center/pleasanton/why-didnt-my-home-sell',
    'https://sellwithrajnow.com/seller-center/pleasanton/skipping-vs-rejection',
    'https://sellwithrajnow.com/seller-center/pleasanton/price-vs-payment',
    'https://sellwithrajnow.com/seller-center/pleasanton/are-there-buyers',
    'https://sellwithrajnow.com/seller-center/pleasanton/relist-or-wait',
    'https://sellwithrajnow.com/seller-center/pleasanton/which-price-ranges-moving',
    'https://sellwithrajnow.com/seller-center/pleasanton/selective-buyer-market',
    'https://sellwithrajnow.com/seller-center/pleasanton/how-long-is-too-long',
    'https://sellwithrajnow.com/seller-center/pleasanton/why-price-reductions-dont-work',
    'https://sellwithrajnow.com/seller-center/pleasanton/dead-zone-pricing',
  ];

  const textContent = urls.join('\n');

  useEffect(() => {
    // Replace entire document with plain text
    document.open();
    document.write(textContent);
    document.close();
  }, [textContent]);

  // Fallback: render as plain text in a pre tag
  return (
    <pre style={{
      margin: 0,
      padding: 0,
      fontFamily: 'monospace',
      fontSize: '12px',
      whiteSpace: 'pre',
      lineHeight: '1.4'
    }}>
      {textContent}
    </pre>
  );
}
