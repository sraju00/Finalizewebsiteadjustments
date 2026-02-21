import { useEffect } from 'react';

export function RobotsTxt() {
  const robotsContent = `# SellWithRajNow.com - Robots.txt
# Updated: February 7, 2026

User-agent: *
Allow: /

# Sitemap location (hosted locally at sellwithrajnow.com)
Sitemap: https://sellwithrajnow.com/sitemap.xml

# Crawl-delay (optional, helps prevent server overload)
Crawl-delay: 1

# Disallow admin/system pages (if any exist in future)
Disallow: /admin/
Disallow: /private/`;

  useEffect(() => {
    // Replace entire document with plain text
    document.open();
    document.write(robotsContent);
    document.close();
  }, [robotsContent]);

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
      {robotsContent}
    </pre>
  );
}