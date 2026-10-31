# Arindam Dutta — Software Engineer Portfolio

Personal portfolio built with React and deployed at https://portfolioarindam.netlify.app/.

## Requirements
- Node.js 20 or newer
- React 18

## Google Analytics 4 setup

1. Create a GA4 property in Google Analytics and copy its Measurement ID (it starts with `G-`).
2. For local development, copy `.env.example` to `.env` and set `REACT_APP_GA_MEASUREMENT_ID=G-...` to your real ID. Restart the development server after changing environment variables.
3. For Netlify, add `REACT_APP_GA_MEASUREMENT_ID` under **Site configuration → Environment variables**, then trigger a new deploy. CRA embeds this value at build time; it is an identifier, not a secret.
4. The consent prompt is shown only when a valid Measurement ID is configured. The GA script loads only after a visitor accepts; a rejected choice is saved in that browser.

Analytics use and consent requirements depend on visitor locations and applicable privacy laws. Add an appropriate privacy notice and consent controls before collecting production data.

REACT_APP_GA_MEASUREMENT_ID=G-3TYM4ZM4D6-2977 ( farzii )
https://analytics.google.com/  -- ye check krna hai

## SEO setup

The app includes a canonical URL, page description, Open Graph/Twitter metadata, Person structured data, `robots.txt`, and `sitemap.xml`. Submit `https://portfolioarindam.netlify.app/sitemap.xml` in Google Search Console and verify the site there. Search ranking and indexing are not guaranteed by metadata alone.

