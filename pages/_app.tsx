import type { LayoutProps } from "@vercel/examples-ui/layout";
import type { AppProps } from "next/app";

import { getLayout } from "@vercel/examples-ui";

import "@vercel/examples-ui/globals.css";

function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
