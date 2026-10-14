# ABNORMAL automatic device router

This project redirects visitors automatically based on the browser's User-Agent.
It does **not** show a phone/PC choice page.

- Phone visitors → https://abnormal-store.vercel.app
- PC and other visitors → https://abnormal-shop.vercel.app

## Deploy on Vercel

1. Extract this ZIP.
2. Upload the extracted project files to a new GitHub repository. `package.json`,
   `middleware.ts`, and the `app` folder must be at the repository root.
3. In Vercel, add/import that repository.
4. Keep the Framework Preset as **Next.js** and deploy.
5. Open the new router project's `.vercel.app` URL on a phone and a PC to test.

The middleware runs on the server before the page is shown. It uses a temporary
redirect (HTTP 307), so it is easier to test changes without a permanently cached
redirect.

## Important

- Do not replace either existing site; this is a separate third project used only
  as the shared link.
- If a phone browser is set to “Desktop site”, its User-Agent may look like a PC
  and be sent to the PC site. Turn off “Desktop site” when testing.
- If your sites use different URL paths, the router currently preserves the path
  and query string when redirecting.
