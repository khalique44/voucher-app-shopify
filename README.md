Shopify-ready Voucher Generator (Express + Puppeteer)

Setup:
1. npm install
2. export SHOPIFY_SHARED_SECRET=your_shared_secret   (optional but recommended)
3. npm start
4. Visit: http://localhost:3000/voucher?voucher_no=V1&from=Store&to=Customer

Deploy to Render:
- Push repo to GitHub
- Create Web Service -> connect repo
- Build Command: npm install
- Start Command: node server.js
- Add env var SHOPIFY_SHARED_SECRET to Render's dashboard

Shopify App Proxy:
- In custom app -> App Proxy:
  - Subpath prefix: apps
  - Proxy path: voucher
  - Proxy URL: https://<your-render-url>/voucher
- Then call: https://your-store.myshopify.com/apps/voucher?voucher_no=V123&from=Shop&to=Customer
