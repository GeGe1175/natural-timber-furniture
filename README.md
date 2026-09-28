# Natural Timber Furniture — new site

Rebuild of naturaltimberfurniture.com.au, off Wix. Vite + React + React
Router, no CMS/backend required.

## Run locally

```
npm install
npm run dev
```

## Structure

- `src/pages/` — Home, Products, Materials, About, Contact (one file + css each)
- `src/components/` — Nav, Footer, RulerMark
- `src/data/categories.js` — product categories and timber species (edit text/images here)
- `public/images/` — photos pulled from the live Wix site; swap in higher-res
  originals whenever George can supply them, same filenames

## Contact form

The form posts to Netlify's built-in form handling (`data-netlify="true"` in
`index.html` and `Contact.jsx`) — no backend needed if deployed on Netlify.
Submissions show up under **Site settings → Forms** in the Netlify dashboard,
and you can wire up an email notification there. If you deploy somewhere
other than Netlify, the form will still work visually but submissions won't
go anywhere until it's pointed at a real endpoint (e.g. Formspree, or a small
serverless function that emails naturetimber888@gmail.com).

## Deploy

Either Netlify or Vercel: connect the repo, both auto-detect Vite
(`npm run build`, output `dist/`). Config files for both are already in the
repo (`netlify.toml`, `vercel.json`) so client-side routing (`/products`,
`/about`, etc.) doesn't 404 on refresh.

To point `naturaltimberfurniture.com.au` at the new host: add the domain in
the Netlify/Vercel dashboard, then update the domain's DNS (A/CNAME records)
wherever it's currently registered — that's a separate step from this repo.

## Next up

- Swap placeholder-resolution product photos for full-res originals
- Wire the contact form's "sent" email to naturetimber888@gmail.com
- Product detail pages / a real catalogue if the range grows
- Simple booking or showroom-visit scheduling
