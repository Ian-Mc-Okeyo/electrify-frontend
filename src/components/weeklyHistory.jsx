import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from "react-redux";


const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const WeeklyHistory = () =>{
    const baseurl = "http://127.0.0.1:8000/api/v1/user"
    const [loading, setIsLoading] = useState(true)
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const email = useSelector((state) => state.auth.user.email)
    const mtrNumber = useSelector((state) => state.data.mtrNumber)

    
    const [weeksData, setWeeksData] = useState([])
    const [lastWeekReading, setLastWeekReading] = useState(100)
    const [thisWeekReading, setThisWeekReading] = useState(0)



    const data = {
        labels: labels,
        datasets: [
          {
            label: "Daily Expenditure",
            backgroundColor: "#2596be",
            borderColor: "#2596be",
            data: weeksData,
          },
          
        ],
      };

    const getData = () => {
        axios.get(baseurl+`/weeks-data/${email}/${mtrNumber}`).then((resp)=>{
            console.log(resp)
            setWeeksData(resp.data.data.week_data)
            setThisWeekReading(resp.data.data.amount_this_week)
            setLastWeekReading(resp.data.data.amount_last_week)
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
        const interval = setInterval(() => {
                getData()
            }, 5000)
        
        return () => clearInterval(interval)
    }, [])


    
    return(
        <div className="row justify-content-center">
            
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
                                    weeksData.map((day, index)=>{
                                        return(
                                            <tr key={index}>                                                
                                                <td>{`Day ${index+1}`}</td>
                                                <td>{day}</td>
                                            </tr>
                                        )
                                    })
                                }
                                
                            </tbody>
                        </table>
            </div>
        </div>
    )
}

export default WeeklyHistory;