import React from 'react';
import { setMobileViewOpen } from '../Slices/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu"; 

const NavBar = () =>{
    const drawWidth = 240; 
    const dispatch = useDispatch();
    const mobileViewOpen = useSelector((state)=>state.data.mobileViewOpen);

    const handleToggle = () => { 
        dispatch(setMobileViewOpen(!mobileViewOpen)); 
    }; 

    return(
                    <AppBar 
                        position="fixed"
                        sx={{ 
                            width: { sm: `calc(100% - ${drawWidth}px)` }, 
                            ml: { sm: `${drawWidth}px` }, 
                            backgroundColor: "#000a23", 
                        }} 
                    > 
                        <Toolbar> 
                            <IconButton 
                                color="inherit"
                                edge="start"
                                onClick={handleToggle}
                                sx={{ mr: 2, display: { sm: "none" } }} 
                            >
                                <MenuIcon /> 
                            </IconButton> 
                            <Typography variant="h6" sx={{color: "whitesmoke" }} > 
                                Welcome to Electrify
                            </Typography> 
                        </Toolbar> 
                    </AppBar>
    )
}

export default NavBar;