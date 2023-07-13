import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CustomTooltip } from './CustomTooltip';

const data = [
  {
    name: '1',
    kg: 69.6,
    kCal: 70.1,
  },
  {
    name: '2',
    kg: 70,
    kCal: 70.5,
  },
  {
    name: '3',
    kg: 69.8,
    kCal: 70.7,
  },
  {
    name: '4',
    kg: 69.6,
    kCal: 70.1,
  },
  {
    name: '5',
    kg: 69.8,
    kCal: 70,
  },
  {
    name: '6',
    kg: 69.8,
    kCal: 69.7,
  },
  {
    name: '7',
    kg: 69.5,
    kCal: 70,
  },
  {
    name: '8',
    kg: 70.2,
    kCal: 70.9,
  },
  {
    name: '9',
    kg: 70,
    kCal: 69.4,
  },
  {
    name: '10',
    kg: 69.5,
    kCal: 70.6,
  },
];

export default class Example extends BarChart {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barCategoryGap={25}
          barGap={5}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" tickLine={false} minTickGap={48}/>
          <YAxis type="number"  orientation="right" tickCount={3} tickLine={false} axisLine={false} domain={[69, 71]}/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign="top" align='right' iconType='circle' iconSize={8} height={36}/>
          <Bar name='Poids (kg)' dataKey="kg" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10}/>
          <Bar name='Calories Brûlées (kCal)' dataKey="kCal" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
