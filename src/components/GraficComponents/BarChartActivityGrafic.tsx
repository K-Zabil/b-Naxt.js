'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Sat', blue: 489, teal: 234 },
  { day: 'Sun', blue: 359, teal: 138 },
  { day: 'Mon', blue: 348, teal: 278 },
  { day: 'Tue', blue: 495, teal: 388 },
  { day: 'Wed', blue: 177, teal: 275 },
  { day: 'Thu', blue: 399, teal: 268 },
  { day: 'Fri', blue: 400, teal: 372 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid
        vertical={false}
        strokeWidth={1}
        stroke="rgb(243, 243, 245)"
      />
      <XAxis
        axisLine={false}
        tickLine={false}
        dataKey="day"
        tick={{
          fontSize: 13,
          fill: 'rgb(113, 142, 191)',
        }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={{
          fontSize: 13,
          fill: 'rgb(113, 142, 191)',
        }}
        domain={[0, 500]}
        ticks={[0, 100, 200, 300, 400, 500]}
      />
      <Tooltip />
      <Legend
        verticalAlign="top"      
        align="right"             
        iconType="circle"        
        wrapperStyle={{
          padding: '10px',
          fontSize: '14px',
          color: 'rgb(113, 142, 191)',  
        }}
      />
      <Bar
        dataKey="blue"
        fill="#2c3be3"
        name="Deposit"
        barSize={15}
        radius={[10, 10, 10, 10]}
      />
      <Bar
        dataKey="teal"
        fill="#17e7d7"
        name="Withdraw"
        barSize={15}
        radius={[10, 10, 10, 10]}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;