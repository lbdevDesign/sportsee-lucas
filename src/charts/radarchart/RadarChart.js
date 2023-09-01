
import React, { useEffect, useState } from 'react';
import ApiService from '../../utils/ApiService'; 
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }

export default function UserRadar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_API_PERFORMANCE;
        const result = await ApiService.get(url);
        const mapData = result.data.data.map(data => ({
          value: data.value,
          kind: kind[data.kind],
        }));
        setData(mapData);
      } catch (error) {
      }
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="48%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={{ fill: '#ffffff', fontSize: '0.65rem' }} />
        <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};


  