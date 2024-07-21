- CSS file does not exit in the started kit so we need to add the `main.css` file if we want to have a main CSS file at `./assets/css/main.css` and also set the main file in `nuxt.config.js`:
  ```javascript
  css: ["~/assets/css/main.css"];
  ```
- To use the router we need to create the directory and add `<NuxtPage />` in `App.vue` and set `pages: true` in the `nuxt.config.ts`.

- To have layouts first we need to create a `layouts` folder then in there we can create files like `default.vue` and have our default layout elements in this file we also need to create `<slot />` where the route element will get rendered. In the route element we need to set the layout for that specific route by:
  ```javascript
  definePageMeta({
    layout: "default",
  });
  ```
  We can define multiple layout and set them for specific page.

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
