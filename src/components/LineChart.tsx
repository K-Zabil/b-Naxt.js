"use client";

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export interface ChartProps {
    data: number[];
    labels: string[];
};

const LineChart: React.FC<ChartProps> = ({ data, labels }) => { 
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null); // Хранение текущего экземпляра Chart

    useEffect(() => {
        if (chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");

            // Уничтожить предыдущий график, если он существует
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            // Создать новый экземпляр Chart и сохранить его
            if (myChartRef) {
                chartInstanceRef.current = new Chart(myChartRef, {
                    type: "line",
                    data: {
                        labels: labels, 
                        datasets: [
                            {
                                label: "Данные графика", 
                                data: data, 
                                borderColor: "blue", 
                                tension: 0.4,
                                fill: false, 
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                }
                            },
                            y: {
                                beginAtZero: true,
                                grid: {
                                    display: false
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            }
                        }
                    }
                });
            }
        }

        // Очистка при размонтировании компонента
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [data, labels]);

    return (
        <canvas ref={chartRef} />
    );
};

export default LineChart;
