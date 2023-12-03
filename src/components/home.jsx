import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div className='maximum-width' id='body-page'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            <div className='d-flex align-items-center my-auto mx-auto' >
                <div id = "sample-text-card" className='m-4 col-md-6 border-0 home-text-box bg-transparent' style={{textAlign: 'center'}}>
                    <div className='card-body'>
                        <h1 className='mb-3' style={{color: '#fbd127'}}>Electrify.com</h1>
                        <h5 className='card-title'>
                            Realtime Monitoring System
                        </h5>
                        <br/>
                        <p className='card-text'>
                            
                        </p>
                        <div className='button-wrapper d-flex align-items-center'>
                            <Link to='/register' className='btn btn-md register' role='button'>Register</Link>
                            <Link to='login' className='btn btn-md login' role='button'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;