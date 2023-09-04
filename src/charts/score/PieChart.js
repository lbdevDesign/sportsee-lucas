import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import ApiService from '../../utils/ApiService.jsx';

export default function Example() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.REACT_APP_API_USER;
        const result = await ApiService.get(url);
        setApiData(result.data);
      } catch (error) {
        console.error('Error fetching pie data:', error);
      }
    }

    fetchData();
  }, []);

  const COLORS = ['red', 'transparent'];

  const mapData = apiData
    ? [
        { name: 'Group A', value: apiData.todayScore },
        { name: 'Group B', value: 1 - apiData.todayScore },
      ]
    : [];

  return (
    <ResponsiveContainer width="100%" height="100%" className="PieChart-container">
      <PieChart>
        <Pie
          data={mapData}
          cx='50%'
          cy='50%'
          innerRadius={70}
          outerRadius={80}
          cornerRadius={50}
          paddingAngle={5}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          valueKey={100}
        >
          {mapData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          {apiData && (
            <>
              <Label
                value={apiData.todayScore * 100 + '%'}
                position="center"
                fontSize={26}
                fontWeight={700}
                dy={-10}
                fill="#282D30"
              />
              <Label
                value="de votre objectif"
                position="centerTop"
                dy={10}
                width={100}
                fill="#74798C"
                fontSize={16}
                fontWeight={500}
              />
            </>
          )}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}