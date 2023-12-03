import React from 'react';
import NavBar from './NavBar';
import SideBar from './sideBar';
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 

const drawWidth = 240;
const UserBill = () =>{
    return (
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
                    <div>
                        <br/>
                        <h2 className='display-3'>Electrify</h2>
                        <div style={{textAlign: 'left'}}>
                            <h3>ELECTRICITY BILL: ksh 667.67</h3>
                            <h4>Account Number: 74848484</h4>
                            <br/>
                            <h5>BERNARD ONYANGO</h5>
                            <h5>P.O.BOX 7484</h5>
                            <h5>KONDELE</h5>
                        </div>
                        <div className='row jusify-content-between'>
                            <div className='col-md-12'>
                                <h4>CONSUMPTION DATA</h4>
                                <table className="table table-striped table-hover" style={{padding: '10px'}}>
                                    <thead>
                                        <tr className='display-6' style={{fontSize: '1.1em', fontFamily:'monospace'}}>
                                            <th scope="col">Meter Number</th>
                                            <th scope="col">Previous Reading</th>
                                            <th scope="col">Current Reading</th>
                                            <th scope="col">Reading Type</th>
                                            <th scope="col">Consumption</th>
                                            <th scope="col">Consumption Type</th>
                                                                                
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>                                                
                                            <td>747474747</td>
                                            <td>6738</td>
                                            <td>6750</td>
                                            <td>Real</td>
                                            <td>12</td>
                                            <td>Active Energy</td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-md-12'>
                                <h4>BILLING DETAILS</h4>
                                <h5>Billing Concepts</h5>
                                <h5>Bill-202310B10BC001859</h5>
                                <h5>Energy</h5>
                                <div className='row justify-content-around'>
                                    <div className='col-md-4 col-4'>
                                        <h6>Consumption</h6>
                                    </div>
                                    <div  className='col-md-4 col-4'>
                                        <h6>15KWh x 34</h6>
                                    </div>
                                    <div  className='col-md-4 col-4'>
                                        <h6>510</h6>
                                    </div>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </Box>

            </Box>
        </>
    )

}

export default UserBill;