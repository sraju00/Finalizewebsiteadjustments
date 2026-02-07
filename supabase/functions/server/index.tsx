import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3def9df5/health", (c) => {
  return c.json({ status: "ok" });
});

// Seller Intake Form
app.post("/make-server-3def9df5/submit-seller-intake", async (c) => {
  try {
    const data = await c.req.json();
    
    // Store in KV
    const timestamp = Date.now();
    await kv.set(`seller_intake_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting seller intake form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Buyer Intake Form
app.post("/make-server-3def9df5/submit-buyer-intake", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`buyer_intake_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting buyer intake form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Loan Intake Form
app.post("/make-server-3def9df5/submit-loan-intake", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`loan_intake_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting loan intake form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Strategy Call Form
app.post("/make-server-3def9df5/submit-strategy-call", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`strategy_call_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting strategy call form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Consultation Call Form
app.post("/make-server-3def9df5/submit-consultation", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`consultation_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting consultation form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Quick Call Form
app.post("/make-server-3def9df5/submit-quick-call", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`quick_call_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting quick call form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// AI Reports Form
app.post("/make-server-3def9df5/submit-ai-reports", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`ai_reports_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting AI reports form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Buyer Magnet Form
app.post("/make-server-3def9df5/submit-buyer-magnet", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`buyer_magnet_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting buyer magnet form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Second Opinion Form
app.post("/make-server-3def9df5/submit-second-opinion", async (c) => {
  try {
    const data = await c.req.json();
    
    const timestamp = Date.now();
    await kv.set(`second_opinion_${timestamp}`, data);
    
    return c.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting second opinion form:', error);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// ==========================================
// SEO: Robots.txt with proper headers
// ==========================================
app.get("/make-server-3def9df5/robots.txt", (c) => {
  const robotsTxt = `# SellWithRajNow.com - Robots.txt
# Updated: February 7, 2026

User-agent: *
Allow: /

# Sitemap location (served via Supabase Edge Function)
Sitemap: https://sellwithrajnow.com/make-server-3def9df5/sitemap.txt

# Crawl-delay (helps prevent server overload)
Crawl-delay: 1

# Disallow admin/system pages
Disallow: /make-server-3def9df5/`;

  return c.text(robotsTxt, 200, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
});

// Sitemap.txt endpoint - serves plain text sitemap for Google Search Console
app.get("/make-server-3def9df5/sitemap.txt", (c) => {
  console.log('Sitemap.txt endpoint hit!');
  
  return c.text('https://sellwithrajnow.com/\nhttps://sellwithrajnow.com/buyer-magnet-score\nhttps://sellwithrajnow.com/ai-reports', 200, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
});

Deno.serve(app.fetch);