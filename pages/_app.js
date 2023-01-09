import '../styles/globals.css'
import { ThemeProvider, AppBar, Container, Toolbar } from "@mui/material";
import Logo from '../components/Logo';
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
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo />
            </Toolbar>
          </Container>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
