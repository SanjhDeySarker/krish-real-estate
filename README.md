# Krish Real Estate — Ready-to-run website

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production check

```bash
npm run build
npm start
```

## Main files to edit later

- `data/site.ts` — phone, email, address, brand details
- `data/properties.ts` — property information and photo paths
- `public/properties/property-01/` — current property photos
- `components/Hero.tsx` — homepage hero
- `app/globals.css` — overall visual styling

## Add more property photos

Create another folder under `public/properties/`, for example:

```text
public/properties/property-02/
  entrance.jpg
  living-room.jpg
  bedroom.jpg
```

Then add the property to `data/properties.ts`.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Deploy.
4. Add your purchased domain in Vercel after the domain is purchased.
5. If you use a custom domain, set `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy.

No database or backend is required for this Phase 1 version.
