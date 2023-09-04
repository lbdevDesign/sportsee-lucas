import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CTSession } from '../sessions/CTSession';
import ApiService from '../../utils/ApiService.jsx';

export default function Example() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_API_SESSION;
        const result = await ApiService.get(url);
        setApiData(result.data);
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    }

    fetchData();
  }, []);

  const day = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

  const mapData = apiData
    ? apiData.sessions.map(data => ({
        sessionLength: data.sessionLength,
        day: day[data.day],
      }))
    : [];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={730}
        height={250}
        data={mapData}
        margin={{
          top: 80,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" axisLine={false} tickLine={false} mirror={true} stroke='white' />
        <Tooltip content={<CTSession />} />
        <Line type="monotone" dataKey="sessionLength" stroke="white" dot='' />
      </LineChart>
    </ResponsiveContainer>
  );
}