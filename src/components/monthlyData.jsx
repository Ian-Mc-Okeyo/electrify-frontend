import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","dev"]
const MonthlyData = () =>{
    const baseurl = "http://127.0.0.1:8000/api/v1/user"
    const [loading, setIsLoading] = useState(true)
    
    const [monthsData, setMonthsData] = useState([])
    const [lastMonthReading, setLastMonthReading] = useState(100)
    const [thisMonthReading, setThisMonthReading] = useState(0)

    const data = {
        labels: labels,
        datasets: [
          {
            label: "Month Expenditure",
            backgroundColor: "#2596be",
            borderColor: "#2596be",
            data: monthsData,
          },
        ],
      };

    useEffect(()=>{
        axios.get(baseurl+'/month-data').then((resp)=>{
            console.log(resp)
            setMonthsData(resp.data.data.month_data)
            setThisMonthReading(resp.data.data.this_month_expenditure)
            setLastMonthReading(resp.data.data.last_month_expenditure)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    return(
        <div className="row justify-content-center">
            
            <div className="col-md-4 col-5">
                <CircularProgressbar value={thisMonthReading} maxValue={lastMonthReading} text={`${thisMonthReading}`} />
            </div>
            <div className="col-md-8 col-12">
                <Line data={data}/>
            </div>
        </div>
    )
}

export default MonthlyData;