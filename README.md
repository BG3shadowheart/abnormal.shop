# ABNORMAL automatic device router — fixed build

This version includes the TypeScript compiler and React/Node type packages required by Vercel.

- Phone visitors → https://abnormal-store.vercel.app
- PC and other visitors → https://abnormal-shop.vercel.app

## Deploy
1. Extract this ZIP.
2. Upload these files to the root of a new GitHub repository.
3. Import that repository in Vercel and deploy with the Next.js framework preset.
4. Use the new router project's `.vercel.app` URL as your shared link.

This is a separate router project; it does not replace either existing website.
The middleware makes a server-side 307 redirect and does not show a phone/PC chooser page.

If the repository already has the old files, replace them with these files and ensure
`package.json`, `tsconfig.json`, `middleware.ts`, `next-env.d.ts`, and `app/` are at
the repository root. Then trigger a new deployment.
