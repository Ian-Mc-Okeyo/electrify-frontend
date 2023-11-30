import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12","13", "14", "15", "16", "17", "19", "20","21", "22", "23", "24"]
const DailyData = () =>{
    const baseurl = "http://127.0.0.1:8000/api/v1/user"
    const [loading, setIsLoading] = useState(true)
    
    const [dayData, setDayData] = useState([])
    const [yesterDayReading, setYesterDayReading] = useState(100)
    const [todayReading, setTodayReading] = useState(0)


    const data = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: dayData,
          },
          
        ],
      };

    useEffect(()=>{
        axios.get(baseurl+'/day-data').then((resp)=>{
            console.log(resp)
            setDayData(resp.data.Data.today_data)
            setTodayReading(resp.data.Data.today_reading)
            setYesterDayReading(resp.data.Data.yester_reading)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return(
        <div className="row justify-content-center">
            
            <div className="col-md-4 col-5">
                <CircularProgressbar value={todayReading} maxValue={yesterDayReading} text={todayReading} />
            </div>
            <div className="col-md-8 col-12">
                <Line data={data}/>
            </div>
        </div>
    )
}

export default DailyData;