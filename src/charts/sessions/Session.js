import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CTSession } from '../sessions/CTSession';
import {fetchSession} from '../../utils/fomatService.jsx';


export default function Example() {
  const [mapData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setApiData(await fetchSession());
    }
    fetchData();
  }, []);

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