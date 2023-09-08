import React, { useEffect, useState } from 'react';
import Header from '../src/componants/header/Header';
import SideMenu from './componants/sidemenu/SideMenu';
import GraphicGrid from './componants/graphicgrid/GraphicGrid';
import Nutrition from './componants/nutrition/Nutrition';
import {fetchUser} from './utils/fomatService.jsx';
import './App.css';

function App() {
  const [userData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setApiData(await fetchUser());
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <SideMenu />

      <main className='dashboard-container'>
        <h1 className='dashboard-title'>Bonjour <span>{userData ? userData.firstName : ''}</span></h1>
        <p className='dashboard-subtitle'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

        <div className='dashboard-content'>
          <GraphicGrid />
          <Nutrition />
        </div>
      </main>
    </>
  );
}

export default App;
