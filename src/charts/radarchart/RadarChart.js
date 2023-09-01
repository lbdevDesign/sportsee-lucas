
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


async function userRadar() {
  const response = await fetch('http://localhost:3000/user/12/performance');
  const radar = await response.json();
 
  return radar;
}

const apiData = await userRadar();

const kind = { 1: 'Cardio', 2: 'Energie', 3: 'Endurance', 4: 'Force', 5: 'Vitesse', 6: 'Intensité' }

const mapData = apiData.data.data.map(data => ({

  value: data.value,
  kind: kind[data.kind],

}))



  
  export default class Example extends RadarChart {
  
    render() {

      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="48%" cy="50%" outerRadius="60%" data={mapData}>
            <PolarGrid radialLines={false}/>
            <PolarAngleAxis dataKey="kind"  tick={{fill:'#ffffff', fontSize:'0.65rem'}} />
            <Radar name="Mike" dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      );
    }
  }
  