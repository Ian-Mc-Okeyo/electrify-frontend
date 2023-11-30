import React from 'react';
import NavBar from './NavBar';
import SideBar from './sideBar';
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography";

const drawWidth = 240;
const History = () =>{
    const days = [1,2,3,4,5,6,7,8,9,10]
    return(
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline /> 
                <NavBar/>                    
                <SideBar/>
                <Box
                    component="main"
                    sx={{ 
                        flexGrow: 1, 
                        p: 3, 
                        width: { sm: `calc(100% - ${drawWidth}px)` },
                    }} 
                >
                    <br/>
                    <h6 className='display-6'>Consumption History</h6>
                    <div className='tableBody'>
                        <table className="table table-striped table-hover" style={{padding: '10px'}}>
                            <thead>
                                <tr className='display-6' style={{fontSize: '1.1em', fontFamily:'monospace'}}>
                                    <th scope="col">Day Number</th>
                                    <th scope="col">Consumption</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    days.map((day)=>{
                                        return(
                                            <tr>                                                
                                                <td>{day}</td>
                                                <td>20.3</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </Box>

            </Box>
        </>
    )
}

export default History