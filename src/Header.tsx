import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';

export default function Header() {
    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Container maxWidth="xl">
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            DEMO Streaming
                        </Typography>
                        <nav>
                            <Link
                                variant="button"
                                color="text.primary"
                                href="#"
                                sx={{ my: 1, mx: 1.5 }}
                            >
                                Login
                            </Link>
                        </nav>
                        <Button href="#" color='secondary' variant="contained" sx={{ my: 1, mx: 1.5 }}>
                            Start your free trial
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}