import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from "react-redux";

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12","13", "14", "15", "16", "17", "19", "20","21", "22", "23", "24"]
const DailyData = () =>{
    const baseurl = "http://127.0.0.1:8000/api/v1/user"
    const [loading, setIsLoading] = useState(true)
    const email = useSelector((state) => state.auth.user.email)
    const mtrNumber = useSelector((state) => state.data.mtrNumber)
    
    const [dayData, setDayData] = useState([])
    const [yesterDayReading, setYesterDayReading] = useState(100)
    const [todayReading, setTodayReading] = useState(0)


    const data = {
        labels: labels,
        datasets: [
          {
            label: "Hourly Expenditure",
            backgroundColor: "#2596be",
            borderColor: "#2596be",
            data: dayData,
          },
          
        ],
      };

    const getData = ()=>{
        axios.get(baseurl+`/day-data/${email}/${mtrNumber}`).then((resp)=>{
            console.log(resp)
            setDayData(resp.data.Data.today_data)
            setTodayReading(resp.data.Data.today_reading)
            setYesterDayReading(resp.data.Data.yester_reading)
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