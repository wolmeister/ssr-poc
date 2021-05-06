# SSR POC

The objective of this POC is to compare how a simple page can be implemented using Next, Nuxt, Angular Universal and a template engine like EJS.

All applications are using TypeScript and pnpm as the package manager (\*).

Each page should fetch an user from the `/api/users/me` endpoint and show the username and avatar in a simple layout.

### pnpm and nuxt

The Nuxt application is currently using yarn as the package manager, because [pnpm is not supported yet](https://github.com/nuxt/create-nuxt-app/issues/367).
