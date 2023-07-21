import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


async function userRadar() {
  const response = await fetch('http://localhost:3000/user/12/performance');
  const radar = await response.json();

  console.log(radar); 
  return radar;
}

const apiData = await userRadar();

const data = [
    {
      subject: 'Yo',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Yoo',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Yooo',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'YOOO',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'YoOo',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Y',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  
  export default class Example extends RadarChart {
    static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="48%" cy="50%" outerRadius="60%" data={apiData.data[0]}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Mike" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
  }
  