
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CTSession } from '../sessions/CTSession'


async function userSession() {
  const response = await fetch('http://localhost:3000/user/12/average-sessions');
  const session = await response.json();

  return session;
}

const apiData = await userSession();

console.log(apiData);

const day = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }

const mapData = apiData.data.sessions.map(data => ({

  sessionLength: data.sessionLength,
  day: day[data.day],

}))

const data = [
  {
    name: 'L',
    min: 4000,
  },
  {
    name: 'M',
    min: 3000,
  },
  {
    name: 'M',
    min: 2000,
  },
  {
    name: 'J',
    min: 2780,
  },
  {
    name: 'V',
    min: 1890,
  },
  {
    name: 'S',
    min: 2390,
  },
  {
    name: 'D',
    min: 3490,
  },
];

export default class Example extends LineChart {

  render() {
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
          <XAxis dataKey="day" axisLine={false} tickLine={false} mirror={true} stroke='white'/>
          <Tooltip content={<CTSession />}/>
          <Line type="monotone" dataKey="sessionLength" stroke="white" dot=''/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
