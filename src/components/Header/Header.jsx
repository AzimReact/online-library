import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';
import './Header.scss';


export default function Header() {

    return (

        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                    </IconButton>
                    <div className='div-icon'>  
                        <Typography variant="h6" mr={50}><Link className='color library' to='/'>Library</Link></Typography>
                    </div>
                    <Typography variant="h6" mr={50}><Link className='color' to='/crud'>+ Add books</Link></Typography>
                    <div className='div-icon'>
                        <Typography variant="h6"><Link className='color' to='/favorites'>Favorites</Link></Typography>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>   
    )
}