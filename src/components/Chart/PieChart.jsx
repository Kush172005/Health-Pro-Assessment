import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const percentage = 64;

export default function ChartJsProgressChart() {
    const data = {
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ["#5BD489", "#3D614B"],
                borderWidth: 0,
                circumference: 360,
                rotation: 0,
            },
        ],
    };

    const options = {
        cutout: "70%",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className="relative w-[150px] h-[150px] xl:w-[250px] xl:h-[250px]">
            <Doughnut data={data} options={options} />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="xl:text-5xl md:text-3xl text-2xl font-bold text-white">
                    {percentage}%
                </span>
            </div>
        </div>
    );
}
