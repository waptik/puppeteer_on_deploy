import { Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import Layout from "../components/Layout.tsx";

interface Data {
  url: URL | null;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const reqUrl = new URL(req.url);
    const rawUrl = reqUrl.searchParams.get("url");
    let url: URL | null = null;

    if (rawUrl !== null) {
      try {
        url = new URL(rawUrl ?? "");
      } catch {
        return ctx.renderNotFound();
      }
      return ctx.render({ url });
    }
    return await ctx.render();
  },
};

export default function Home({ data }: PageProps<Data>) {
  const [url] = useState(data?.url); 

  return (
    <Layout title="Screenshot!">
      <div>
        <p>
          Use this service to take screenshots of websites. Enter the url of the
          site below, and press submit. Loading of the image might take a
          moment.
        </p>
        <form method="GET">
          <label for="url">URL:</label>
          <input
            id="url"
            name="url"
            type="url"
            placeholder="URL"
            value={data?.url?.href ?? ""}
          ></input>
          <button type="submit">Submit</button>
        </form>
        {url ? (
        <div>
          <h3>{url.href}</h3>
          <img src={`/screenshot.png?url=${url.href}`} />
        </div>
      ) : null}
        {/* <Screenshot url={data?.url} /> */}
      </div>
    </Layout>
  );
}
