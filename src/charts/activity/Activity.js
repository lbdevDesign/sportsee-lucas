import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import React, { useEffect, useState } from 'react';
import ApiService from '../../utils/ApiService.jsx';

export default function UserActivity() {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_API_ACTIVITY;
        const result = await ApiService.get(url);
        const mapData = result.data.sessions.map(data => ({
          day: data.day.toString().slice(-1),
          kilogram: data.kilogram,
          calories: data.calories,
        }));
        setMapData(mapData);
      } catch (error) {
        // Gère l'erreur si nécessaire
      }
      console.log(mapData);
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        barCategoryGap={25}
        barGap={5}
        width={500}
        height={300}
        data={mapData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="day" tickLine={false} minTickGap={48}/>
          <YAxis type="number" dataKey="calories" orientation="right" tickCount={3} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />}/>
          <Legend verticalAlign="top" align='right' iconType='circle' iconSize={8} height={36}/>
          <Bar name='Poids (kg)' dataKey="kilogram" fill="#282D30" radius={[20, 20, 0, 0]} maxBarSize={10}/>
          <Bar name='Calories Brûlées (kCal)' dataKey="calories" fill="#E60000" radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }


