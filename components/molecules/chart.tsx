import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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
    z: 5290,
  },
  {
    name: 'Apr',
    x: 2780,
    y: 3908,
    z: 3000,
  },
  {
    name: 'May',
    x: 1890,
    y: 4800,
    z: 4181,
  },
  {
    name: 'Jun',
    x: 2390,
    y: 3800,
    z: 7500,
  },
  {
    name: 'Jul',
    x: 3490,
    y: 4300,
    z: 6100,
  },
  {
    name: 'Aug',
    x: 2780,
    y: 3908,
    z: 12000,
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
    z: 9500,
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
    <section className='chart'>
      <ResponsiveContainer height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='x' stackId='stacked' fill='#ABD1F6' />
          <Bar dataKey='y' stackId='stacked' fill='#4BA3E2' />
          <Bar dataKey='z' stackId='stacked' fill='#7859BC' />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
