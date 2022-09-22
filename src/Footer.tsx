import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import { Grid } from '@mui/material';
import Image from 'next/image';

import facebookIcon from '../assets/social/facebook-white.svg'
import instagramIcon from '../assets/social/instagram-white.svg'
import twitterIcon from '../assets/social/twitter-white.svg'

import appStoreImage from '../assets/store/app-store.svg'
import googlePlayImage from '../assets/store/play-store.svg'
import microsoftStoreImage from '../assets/store/windows-store.svg'

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 8,
                px: 2,
                mt: 'auto',
                backgroundColor: '#1E1E1E',
            }}
        >
            <Container maxWidth="xl">
                <Typography color="text.secondary">
                    Home   |   Terms and Conditions   |   Privacy Policy   |   Collection Statment    |   Help    |   Manage Account
                </Typography>
                <Copyright />
                <Grid sx={{ mt: 2 }} container spacing={0}>
                    <Grid item xs={3} md={1} >
                        <Image src={facebookIcon} width={35} height={42} />
                    </Grid>
                    <Grid item xs={3} md={1} >
                        <Image src={instagramIcon} width={35} height={42} />
                    </Grid>
                    <Grid item xs={3} md={1} >
                        <Image src={twitterIcon} width={35} height={42} />
                    </Grid>
                    <Grid item xs={3} md={5} >
                    </Grid>
                    <Grid item xs={3} md={1} >
                        <Image src={appStoreImage} width={110} height={42} />
                    </Grid>
                    <Grid item xs={3} md={1} >
                        <Image src={googlePlayImage} width={140} height={42} />
                    </Grid>
                    <Grid item xs={3} md={1} >
                        <Image src={microsoftStoreImage} width={140} height={42} />
                    </Grid>
                    {/* <Grid item xs={1} md={1} >
                        <Image src={googlePlayImage} width={35} height={200} />
                    </Grid>
                    <Grid item xs={1} md={1} >
                        <Image src={microsoftStoreImage} width={35} height={200} />
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    )
}