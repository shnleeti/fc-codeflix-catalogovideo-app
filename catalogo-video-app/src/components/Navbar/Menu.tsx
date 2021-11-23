import React from "react";
import { IconButton, MenuItem, Menu as MuiMenu } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import routes, { AppRouteProps } from "../../routes";
import { Link } from "react-router-dom";

const listRoutes = [
    'dashboard',
    'categories.list',
    'cast_members.list',
    'genres.list'
]

const menuRoutes = routes.filter(route => listRoutes.includes(route.name))

export const Menu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event:any) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);
    
    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
            >
                <MenuIcon/>
            </IconButton>
            <MuiMenu
                id="menu-appbar"
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                getContentAnchorEl={null}
            >
                {
                    listRoutes.map( 
                        (routeName, key) => {
                            const route = menuRoutes.find(route => route.name === routeName) as AppRouteProps
                            return (
                                <MenuItem
                                    key={key}
                                    component={Link}
                                    to={route.path as string}
                                    onClick={handleClose}
                                >
                                    {route.label}
                                </MenuItem>
                            )
                        }
                    )
                }
                
            </MuiMenu>
        </>
        
    )
}