import React from 'react';
import { setMobileViewOpen } from '../Slices/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Drawer from "@mui/material/Drawer"; 
import List from "@mui/material/List"; 
import ListItemButton from "@mui/material/ListItemButton"; 
import ListItemIcon from "@mui/material/ListItemIcon"; 
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider"; 
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { 
    Edit,
    Help, 
    Dashboard,
    History,
    AttachMoney,
    AccountBox
} from "@mui/icons-material"; 

const responsiveDrawer = ( 
    
    <div style={{ backgroundColor: "#000a23",  
        height: "100%" }}> 
        <Toolbar /> 
        <Divider /> 
        <Typography 
            sx={{ textAlign: "center", pt: 4,  
                color: "#fbd127", fontSize: 30 }} 
        > 
            Electrify.com
        </Typography> 
        <List sx={{ backgroundColor: "#000a23", textDecoration: 'none' }}>
            <Link to='/dashboard'>
                <ListItemButton sx={{ color: "white" }}> 
                    <ListItemIcon sx={{ color: "white" }}> 
                        {<Dashboard />} 
                    </ListItemIcon> 
                    <ListItemText primary={"Dashboard"}/> 
                </ListItemButton> 
            </Link>
            <Link to='/history'>
                <ListItemButton sx={{ color: "white" }}> 
                    <ListItemIcon sx={{ color: "white" }}> 
                        {<History />} 
                    </ListItemIcon> 
                    <ListItemText primary={"History"} /> 
                </ListItemButton> 
            </Link>
            <Link to='/my-bill'>
                <ListItemButton sx={{ color: "white" }}> 
                    <ListItemIcon sx={{ color: "white" }}> 
                        {<AttachMoney />} 
                    </ListItemIcon> 
                    <ListItemText primary={"My Bill"} /> 
                </ListItemButton> 
            </Link>
            <Link to='/profile'>
                <ListItemButton sx={{ color: "white" }}> 
                    <ListItemIcon sx={{ color: "white" }}> 
                        {<AccountBox />} 
                    </ListItemIcon> 
                    <ListItemText primary={"My Profile"} /> 
                </ListItemButton> 
            </Link>
            
        </List> 
        <Divider /> 
        <List> 
            <ListItemButton sx={{ color: "white" }}> 
                <ListItemIcon sx={{ color: "white" }}> 
                    {<Help />} 
                </ListItemIcon> 
                <ListItemText primary={"Help"} /> 
            </ListItemButton> 
        </List> 
        <Typography 
            sx={{ 
                backgroundColor: "blue", 
                color: "white", 
                borderRadius: 10, 
                textAlign: "center", 
                padding: 1, 
                margin: 2,
            }}
            
        > 
            LogOut
        </Typography> 
    </div> 
);

const SideBar = () =>{
    const dispatch = useDispatch();
    const mobileViewOpen = useSelector((state)=>state.data.mobileViewOpen);

    const drawWidth = 240; 

    const handleToggle = () => { 
        dispatch(setMobileViewOpen(!mobileViewOpen)); 
    }; 

    return(
                    <Box 
                        component="nav"
                        sx={{ width: { sm: drawWidth },  
                            flexShrink: { sm: 0 } }} 
                    > 
                        <Drawer 
                            variant="temporary"
                            open={mobileViewOpen} 
                            onClose={handleToggle} 
                            ModalProps={{ 
                                keepMounted: true, 
                            }} 
                            sx={{ 
                                display: { xs: "block", sm: "none" }, 
                                "& .MuiDrawer-paper": { 
                                    boxSizing: "border-box", 
                                    width: drawWidth, 
                                }, 
                            }} 
                        > 
                            {responsiveDrawer} 
                        </Drawer> 
                        <Drawer 
                            variant="permanent"
                            sx={{ 
                                display: { xs: "none", sm: "block" }, 
                                "& .MuiDrawer-paper": { 
                                    boxSizing: "border-box", 
                                    width: drawWidth, 
                                }, 
                            }} 
                            open 
                        > 
                            {responsiveDrawer} 
                        </Drawer> 
                    </Box>
    )
}

export default SideBar;