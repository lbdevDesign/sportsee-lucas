import React from 'react';

import './graphicgrid.css'

import BarChart from '../../charts/activity/Activity'
import LineChart from '../../charts/sessions/Session'
import RadarChart from '../../charts/radarchart/RadarChart'
import PieChart from '../../charts/score/PieChart'



function GraphicGrid() {
  return (
    <div className="grid-container">
      <div className="grid-item-1">
        <h3 className='grid-item-title'>Activité quotidienne</h3>
        <BarChart />
      </div>
      <div className="grid-item-2">
      <h3 className='grid-item-title'>Durée moyenne des sessions</h3>
        <LineChart />
      </div>
      <div className="grid-item-3">
        <RadarChart />
      </div>
      <div className="grid-item-4">
      <h3 className='grid-item-title'>Score</h3>
        <PieChart />
      </div>
    </div>
  );
}

export default GraphicGrid;