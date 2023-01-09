import { Typography } from "@mui/material";

export default function Logo() {
    return (
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
        >
            Cypress 80's Throwback
        </Typography>
    )
}