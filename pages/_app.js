import '../styles/globals.css'
import { ThemeProvider } from "@mui/material";
import TitleBar from '../components/TitleBar';
import { theme } from "../theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from '../createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <TitleBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
