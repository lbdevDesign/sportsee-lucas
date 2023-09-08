
import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import {fetchRadar} from '../../utils/fomatService.jsx';

export default function UserRadar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await fetchRadar());
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


  