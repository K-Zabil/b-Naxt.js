"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export interface ChartProps {
    data: number[];
    labels: string[];
};

const LineChartGrafic: React.FC<ChartProps> = ({ data, labels }) => { 
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            if (myChartRef) {
                const gradient = myChartRef.createLinearGradient(0, 0, 0, chartRef.current.height!);
                gradient.addColorStop(0, "rgba(33, 150, 243, 0.5)"); 
                gradient.addColorStop(.4, "rgba(33, 150, 243, 0.06)");

                chartInstanceRef.current = new Chart(myChartRef, {
                    type: "line",
                    data: {
                        labels: labels, 
                        datasets: [
                            {
                                data: data,
                                borderColor: "blue", 
                                tension: 0.5,
                                pointRadius: 0, 
                                fill: true, 
                                backgroundColor: gradient,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                grid: {},
                            },
                            y: {
                                beginAtZero: true,
                                grid: {},
                            },
                        },
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    }
                });
            }
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data, labels]);

    return <canvas ref={chartRef} />;
};

export default LineChartGrafic;
