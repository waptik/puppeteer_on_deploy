import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getBrowser } from "../utils/pptr.ts";

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const reqUrl = new URL(req.url);
  if (reqUrl.pathname.startsWith("/screenshot.png")) {
    const rawUrl = reqUrl.searchParams.get("url");

    let url: URL;
    try {
      url = new URL(rawUrl ?? "", );
    } catch {
      return new Response("Invalid URL", { status: 400 });
    }

    if (url.host == "screenshot.deno.dev" || url.host == "fresh-screenshot.deno.dev") {
      return new Response("Nope!", { status: 400 });
    }

    const browser = await getBrowser();
    try {
      const page = await browser.newPage();
      await page.goto(url.href, { waitUntil: "domcontentloaded" });
      const res = (await page.screenshot()) as Uint8Array;
      return new Response(res, {
        headers: {
          "content-type": "image/png",
        },
      });
    } finally {
      await browser.close();
    }
  }
  const resp = await ctx.next();
  return resp;
}
