

import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CustomTooltip } from './CustomTooltip';


async function userActivity() {
  const response = await fetch('http://localhost:3000/user/18/activity');
  const activities = await response.json();

  return activities;
}

const apiData = await userActivity();

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
          data={apiData.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} minTickGap={48}/>
          <YAxis type="number"  orientation="right" tickCount={3} tickLine={false} axisLine={false} domain={[69, 71]}/>
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign="top" align='right' iconType='circle' iconSize={8} height={36}/>
          <Bar name='Poids (kg)' dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10}/>
          <Bar name='Calories Brûlées (kCal)' dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

