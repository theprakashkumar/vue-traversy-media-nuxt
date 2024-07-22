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

- If we put `await` keyword before `useFetch` then it will block the page from loading if the data is still loading. By default, data fetching composable will wait for the resolution of their asynchronous function before navigating to a new page by using Vue’s Suspense. This feature can be ignored on client-side navigation with the `lazy` option. In that case, you will have to manually handle loading state using the `status` value. If we don't to `useFetch` to get data on SSR page then we can set `server: false`.

- `useFetch` is a composable and we should call the composable on the top level, here is how we may submit the data from a form.

  ```javascript
  const { error, data, execute, refresh } = useFetch("/api login", {
    method: "POST",
    body,
    // won't call the useFetch straight away
    immediate: false,
    // won't invoke the useFetch on every body changes
    watch: false,
    onResponse,
  });

  async function onSubmit() {
    await execute();
    if (error.value) {
      didItWork.value;
    }
  }
  ```

- `useFetch` runs both on server and clint so stop it running on the server we can pass `server: false`. Do note that `useFetch` don't send that data from sever(when it run on serer) to client so it might run two time one on the server and anther on the client.

- For `useState` the second parameter is function which is used to declare the initial value and to access the value in the `script` tag we do `stateName.value` but in the `templete` we can ass just by state name `{{stateName}}`.

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
