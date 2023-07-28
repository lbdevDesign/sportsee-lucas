import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


async function userRadar() {
  const response = await fetch('http://localhost:3000/user/18/performance');
  const radar = await response.json();
 
  return radar;
}

const apiData = await userRadar();

const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }

const mapData = apiData.data.data.map(data => ({

  value: data.value,
  kind: kind[data.kind],

}))

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
          <RadarChart cx="48%" cy="50%" outerRadius="60%" data={mapData}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind" />
            <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
  }
  