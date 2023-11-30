import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const WeekData = () =>{
    const baseurl = "http://127.0.0.1:8000/api/v1/user"
    const [loading, setIsLoading] = useState(true)
    
    const [weeksData, setWeeksData] = useState([])
    const [lastWeekReading, setLastWeekReading] = useState(100)
    const [thisWeekReading, setThisWeekReading] = useState(0)

    const data = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: weeksData,
          },
          
        ],
      };

    useEffect(()=>{
        axios.get(baseurl+'/weeks-data').then((resp)=>{
            console.log(resp)
            setWeeksData(resp.data.data.week_data)
            setThisWeekReading(resp.data.data.amount_this_week)
            setLastWeekReading(resp.data.data.amount_last_week)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return(
        <div className="row justify-content-center">
            
            <div className="col-md-4 col-5">
                <CircularProgressbar value={thisWeekReading} maxValue={lastWeekReading} text={`${thisWeekReading}`} />
            </div>
            <div className="col-md-8 col-12">
                <Line data={data}/>
            </div>
        </div>
    )
}

export default WeekData;