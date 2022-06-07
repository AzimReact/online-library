import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 10}}
                >
            </IconButton>

                <div className='logo-box'>
                    <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
                </div>
                <Typography mr={10}  variant="h6"><Link className='color library' to='/'>Home</Link></Typography>
                <Typography mr={10} variant="h6"><Link className='color' to='/favorites'>Favorites</Link></Typography>
                <Button variant="contained" color="success">
                    <Link className='color' to='/crud'>+ Add books</Link>
                </Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}
