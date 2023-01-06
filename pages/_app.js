import '../styles/globals.css'
import { ThemeProvider, AppBar, Container, Toolbar, Typography } from "@mui/material";
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
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Cypress 80's Throwback
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
