import "@/styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../store/";
import Link from "next/link";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/Theme";
import createEmotionCache from "../src/createEmotionCache";
import TanstackProvider from "@/providers/tanstackProvider";
import { Toaster } from "sonner";

const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Novasphere</title>
        <link
          rel="shortcut icon"
          href="/nova-icn-new.png"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <TanstackProvider>
        <CssBaseline />
        <Toaster position="top-right" richColors closeButton />
        <Component {...pageProps} />
      </TanstackProvider>
    </CacheProvider>
  );
}

export default App;
