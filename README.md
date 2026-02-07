# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Analytics Setup

This project supports both Umami and Cloudflare Web Analytics.

1. Copy `.env.example` to `.env`.
2. Set `PUBLIC_UMAMI_WEBSITE_ID` (from your Umami project).
3. Optionally adjust `PUBLIC_UMAMI_SCRIPT_URL` (default is Umami Cloud).
4. Set `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` (from Cloudflare Web Analytics).

Tracked CTA events in Umami:
- `booking_cta_click` with `location=hero`
- `booking_cta_click` with `location=booking_section`
- `booking_cta_click` with `location=footer_cta`
- `instagram_click` with `location=footer`

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
