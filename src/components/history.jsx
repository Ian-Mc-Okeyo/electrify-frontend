import React from 'react';
import NavBar from './NavBar';
import SideBar from './sideBar';
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography";
import DailyHistory from './dailyHistory';
import WeeklyHistory from './weeklyHistory';
import MonthlyHistory from './monthlyHistory';

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
                    <section id="features" className="features section-bg">
                            <div className="container" data-aos="fade-up">

                                <ul className="nav nav-tabs row  g-2 d-flex">

                                    <li className="nav-item col-4">
                                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                            <h4>Daily</h4>
                                        </a>
                                    </li>

                                    <li className="nav-item col-4">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                        <h4>Weekly</h4>
                                        </a>
                                    </li>

                                    <li className="nav-item col-4">
                                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                            <h4>Monthly</h4>
                                        </a>
                                    </li>

                                    
                                    
                                </ul>

                                <div className="tab-content">

                                <div className="tab-pane active show" id="tab-1">
                                    <br/>
                                    <DailyHistory/>
                                </div>

                                <div className="tab-pane" id="tab-2">
                                    <br/>
                                    <WeeklyHistory/>
                                </div>

                                <div className="tab-pane" id="tab-3">
                                    <MonthlyHistory/>
                                </div>

                                </div>

                            </div>
                    </section>
                    
                </Box>

            </Box>
        </>
    )
}

export default History