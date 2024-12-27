import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Sat', blue: 500, teal: 200 },
  { day: 'Sun', blue: 400, teal: 300 },
  { day: 'Mon', blue: 450, teal: 250 },
  { day: 'Tue', blue: 480, teal: 300 },
  { day: 'Wed', blue: 150, teal: 100 },
  { day: 'Thu', blue: 400, teal: 300 },
  { day: 'Fri', blue: 450, teal: 350 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="blue" fill="#2c3be3" name="Diposit" />
      <Bar dataKey="teal" fill="#17e7d7" name="Withdraw" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;