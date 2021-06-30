import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core'; 
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';
import logo from '../../assets/logo-1.svg';
import usestyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = usestyles();
    const location = useLocation();
    
    return (
        <>
            <AppBar position="fixed" className={classExpression.appbar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" varient= "h6" className={classes.title} color="inherit">
                        <img src ={logo} alt="Comerce.js" height="25px" className={classes.image} />
                    </Typography>
                    <div className={classes.grow}/>
                    {location.pathname == '/' && (
                    <div className={classes.button}>
                        <Link to="/cart"></Link>
                        <IconButton component={Link} to="/cart" aria-label="Show chart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" >
                                <ShoppingCart />
                            </Badge> 
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
