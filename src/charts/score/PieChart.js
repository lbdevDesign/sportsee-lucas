import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import {fetchScore} from '../../utils/fomatService.jsx';


export default function Example() {
  const [apiData, setApiData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      setApiData(await fetchScore());
    }
    fetchData();
  }, []);

  const COLORS = ['red', 'transparent'];

  return (
    <ResponsiveContainer width="100%" height="100%" className="PieChart-container">
      <PieChart>
        <Pie
          data={apiData}
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
          {apiData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
          {apiData && (
            <>
              <Label
                value={apiData[0]?.value * 100 + '%'}
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