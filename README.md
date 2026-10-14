# Abnormal device router — Cloudflare Pages

This project redirects visitors to the existing Vercel websites based on their browser user-agent:

- Desktop: https://abnormal-shop.vercel.app
- Phone: https://abnormal-store.vercel.app

It does not modify either existing Vercel deployment.

## Upload to GitHub

Upload the contents of this ZIP to the root of a new GitHub repository. The repository root must contain:
- `functions/index.js`
- `public/index.html`

## Deploy using Cloudflare Pages (not Workers)

1. Open https://dash.cloudflare.com/
2. Go to **Workers & Pages** → **Create application**.
3. Choose **Pages** and then **Connect to Git**.
4. Select your GitHub repository.
5. Use these settings:
   - Framework preset: **None**
   - Production branch: `main` (or your repository's default branch)
   - Build command: `exit 0`
   - Build output directory: `public`
6. Deploy.

Do not choose the standalone Workers Git deployment flow (`npx wrangler deploy`); this repository is structured for Cloudflare Pages Functions.

## Test after deployment

Replace `YOUR-PROJECT.pages.dev` with the URL Cloudflare assigns:

- `https://YOUR-PROJECT.pages.dev/` — auto-detect device
- `https://YOUR-PROJECT.pages.dev/?view=desktop` — force PC site
- `https://YOUR-PROJECT.pages.dev/?view=mobile` — force phone site

The `view` parameter is removed before redirecting. Other query parameters and the requested path are preserved.

## Notes

- Device detection uses the browser's user-agent string. Some browsers in desktop mode and some tablets may be classified differently.
- This is a redirect: after routing, the address bar changes to the selected Vercel site's URL.
- The free `pages.dev` project URL does not require a paid custom domain.
