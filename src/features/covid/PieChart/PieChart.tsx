import React from 'react'
import { Typography } from "@material-ui/core"
import { Doughnut } from "react-chartjs-2"

//reduxのstoreから値を参照
import { useSelector } from "react-redux"
import { selectData } from "../covidSlice"

const PieChart: React.FC = () => {
    const data = useSelector(selectData)

    //dataを使って致死率の計算
    const mortality = data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

    //PieChartの中身
    const pieChart = data && (
        <Doughnut 
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        data: [
                            data.confirmed.value,
                            data.recovered.value,
                            data.deaths.value,
                        ],
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "#008080",
                            "rgba(255, 0, 0, 0.5)",
                        ],
                        hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
                        borderColor: ["transparent", "transparent", "transparent"],
                    }
                ]
            }}
            options={{
                legend: {
                    position: "bottom",
                    labels: {
                        boxWidth: 15,
                    },
                },
            }}
        />
    )

    return (
        <>
            {data.confirmed && (
                <Typography align="center" color="textSecondary" gutterBottom>
                    Mortality {data.confirmed && mortality.toFixed(2)} [%]
                </Typography>
            )}   
            {pieChart}
        </>
    )
}

export default PieChart
