import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Link from "./Link";

interface CardContent {
    name: string;
    category: string;
}

export default function CategorCard(props: CardContent) {
    return (
        <Card
            sx={{ borderRadius: 0, boxShadow: 'none', display: 'flex', flexDirection: 'column' }}
        >
            <CardActionArea component={Link} noLinkStyle href={'/' + props.category}>
                <div style={{ position: 'absolute', left: '25%', top: '25%' }}>
                    <Typography aria-valuetext="" variant="h5" color="text.secondary" >
                        {props.name.toUpperCase()}
                    </Typography>
                </div>
                <CardMedia
                    sx={{ backgroundColor: '#1E1E1E' }}
                    component="img"
                    image="/placeholder.png"
                    height="140"
                />
                <CardContent>
                    <Typography color="text.primary">
                        Popular {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
} 