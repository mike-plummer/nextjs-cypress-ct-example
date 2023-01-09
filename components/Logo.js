import { Box, Typography } from "@mui/material";
import Image from 'next/image'

export default function Logo() {
    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <Image src="/cypress-logo.svg" height={40} width={40} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mx: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Cypress 80's Movie DB
            </Typography>
        </Box>
    )
}