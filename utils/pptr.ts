import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const BROWSERLESS_TOKEN = Deno.env.get("BROWSERLESS_TOKEN");
if (BROWSERLESS_TOKEN === undefined) {
  throw new TypeError("Missing BROWSERLESS_TOKEN environment variable.");
}

export async function getBrowser() {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${BROWSERLESS_TOKEN}`,
  });

  return browser;
}
