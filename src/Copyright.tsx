import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
    return (
        <div style={{marginTop: 5}}>
            <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
                {new Date().getFullYear()}. DEMO Streaming. All Rights Reserved.
            </Typography>
        </div>
    );
}