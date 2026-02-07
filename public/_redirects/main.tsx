# Serve static files first
/robots.txt /robots.txt 200
/sitemap.xml /sitemap.xml 200

# Then handle all other routes with React Router
/* /index.html 200
