import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.scss';

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
                        sx={{ mr: 10 }}
                    >
                    </IconButton>

                    <div className='logo-box'>
                        <Link to='/'><img className='logo' src={logo} alt="logo" /></Link>
                    </div>
                    <Typography mr={10} variant="h6"><NavLink className={({isActive}) => isActive ? "header__active-link" : "color"} to='/'>Home</NavLink></Typography>
                    <Typography mr={10} variant="h6"><NavLink className={({isActive}) => isActive ? "header__active-link" : "color"} to='/favorites'>Favorites</NavLink></Typography>
                    <Button variant="contained" color="success">
                        <Link className='color' to='/crud'>+ Add books</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
