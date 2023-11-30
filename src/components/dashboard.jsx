import React from "react"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 
import Toolbar from "@mui/material/Toolbar"; 
import Typography from "@mui/material/Typography";
import SideBar from "./sideBar";
import NavBar from "./NavBar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import DailyData from "./dailyData";
import WeekData from "./weeklyData";
  
const drawWidth = 240;
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 3, 10, 20, 45],
      },
  ],
};
  
function Dashboard() {   
    
    return ( 
        <div> 
            <div> 
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
                        <div className="row justify-content-around">
                            
                            <div className="col-md-4 col-12" style={{marginBottom: '10px'}}>
                                <div className="card" style={{padding: '3px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title dashboard-h3">Meter Reading</h5>
                                       
                                        <h6 className="display-6">4595</h6>                   
                                        
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-4 col-6">
                                <div className="card" style={{padding: '3px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title dashboard-h3">Total Bill</h5>
                                       
                                        <h6 className="display-6">4595</h6>                   
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <div className="card" style={{padding: '3px'}}>
                                    <div className="card-body">
                                        <h5 className="card-title dashboard-h3">Cost P/U</h5>
                                        
                                        <h6 className="display-6">4595</h6>                   
                                    </div>
                                </div>
                            </div>                           
                            
                        </div>
                        <h6 className="display-5">Your Consumption</h6>
                        
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
                                    <DailyData/>
                                </div>

                                <div className="tab-pane" id="tab-2">
                                    <br/>
                                    <WeekData/>
                                </div>

                                <div className="tab-pane" id="tab-3">
                                    <div className="row">
                                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                            <h3>Voluptatibus commodi accusamu</h3>
                                            <ul>
                                                <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                            </ul>
                                            <p className="fst-italic">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                                            <img  alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>

                                </div>

                            </div>
                        </section>

                        
                    </Box> 
                </Box> 
            </div> 
        </div> 
    ); 
} 
  
export default Dashboard;