import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    x: 4000,
    y: 2400,
    z: 2400,
  },
  {
    name: 'Feb',
    x: 3000,
    y: 1398,
    z: 2210,
  },
  {
    name: 'Mar',
    x: 2000,
    y: 9800,
    z: 2290,
  },
  {
    name: 'Apr',
    x: 2780,
    y: 3908,
    z: 2000,
  },
  {
    name: 'May',
    x: 1890,
    y: 4800,
    z: 2181,
  },
  {
    name: 'Jun',
    x: 2390,
    y: 3800,
    z: 2500,
  },
  {
    name: 'Jul',
    x: 3490,
    y: 4300,
    z: 2100,
  },
  {
    name: 'Aug',
    x: 2780,
    y: 3908,
    z: 2000,
  },
  {
    name: 'Sep',
    x: 1890,
    y: 4800,
    z: 2181,
  },
  {
    name: 'Oct',
    x: 2390,
    y: 3800,
    z: 2500,
  },
  {
    name: 'Nov',
    x: 3000,
    y: 1398,
    z: 2210,
  },
  {
    name: 'Dec',
    x: 2000,
    y: 9800,
    z: 2290,
  },
];

export default function Chart() {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='x' stackId='a' fill='#ABD1F6' />
      <Bar dataKey='y' stackId='a' fill='#4BA3E2' />
      <Bar dataKey='z' stackId='a' fill='#7859BC' />
    </BarChart>
  );
}
