import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { SimpleItem } from "./interfaces/ItemsResponse";
import React, { useState } from 'react'
import SimpleDialog from "./SimpleDialog";

interface CardContent {
    item: SimpleItem
}

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function ItemCard(props: CardContent) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Card
            sx={{
                borderRadius: 0, boxShadow: 'none', display: 'flex', flexDirection: 'column',
                '&:hover': {
                    opacity: 0.8,
                    borderColor: '#fff'
                },
            }}
        >
            <CardActionArea onClick={handleClickOpen}>
                <CardMedia
                    sx={{ backgroundColor: '#1E1E1E' }}
                    component="img"
                    image={props.item.images["Poster Art"].url}
                    height="140"
                />
                <CardContent>
                    <Typography color="text.primary">
                        {props.item.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                item={props.item}
                onClose={handleClose}
            />
        </Card>
    )
} 