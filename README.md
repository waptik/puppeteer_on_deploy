# puppteer_on_deploy

This [demo](https://fresh-screenshot.deno.dev) shows how to use Puppeteer on Deno or Deno Deploy by using the
headless browser service https://browserless.io and the https://fresh.deno.dev framework.

## Run locally with Deno CLI

To run the app locally with the Deno CLI, run the following command:

```shell
deno task dev
```

You will need to sign up to https://browserless.io, and store your account token
in the `BROWSERLESS_TOKEN` environment variable.

Once the program is running, visit https://localhost:8080.

## To run locally with `deployctl`

To run the app locally with `deployctl`, run the following command:

```shell
deployctl --no-check main.ts
```

You will need to sign up to https://browserless.io, and store your account token
in the `BROWSERLESS_TOKEN` environment variable.

Once the program is running, visit https://localhost:8080.

## To deploy to Deno Deploy

Sign up to Deno Deploy at https://dash.deno.com/new, and create a project. You will
need to sign up to https://browserless.io, and add the your account token to the
Deno Deploy project in the `BROWSERLESS_TOKEN` environment variable.

1. Fork this repo `https://github.com/waptik/puppeteer_on_deploy`.
2. Click `Deploy from GitHub`, and locate your fork from the list.
3. Choose `main.ts` as the entry point.
4. Click `Deploy`.

Now visit your site at your deployments URL.
