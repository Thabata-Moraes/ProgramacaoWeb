import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import image from '../assets/vintage-cars.png';

export default function Homepage(){

    return (
        <>
            <Typography variant="h1" sx={{mb:'50px'}}>
                Bem-vindo(a) à loja Karangos!
            </Typography>
            <Box sx={{
                textAlign: 'center',
            }}>
                <img src={image} alt="Carros antigos"  style={{ height: "75%", width: "75%", maxWidth: '800px' }}/>
            </Box>
        </>
    )
}