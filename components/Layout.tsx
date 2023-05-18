import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";


interface LayoutProps {
  title: string;
  children: ComponentChildren;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
      </Head>
      <body>
        {props.children}
      </body>
    </>
  );
}
