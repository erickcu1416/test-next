import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

interface PropsSubHeader {
    children: any;
}

export default function SubHeader(props: PropsSubHeader) {
    return (
        <AppBar
            position="static"
            color="secondary"
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
                        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                            {props.children}
                        </Typography>

                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}