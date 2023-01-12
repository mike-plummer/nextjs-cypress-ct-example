import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from '../Logo'

export default function TitleBar() {
    return (
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Logo />
            </Toolbar>
          </Container>
        </AppBar>
    )
}
