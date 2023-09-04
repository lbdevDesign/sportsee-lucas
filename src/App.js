import React, { useEffect, useState } from 'react';
import Header from '../src/componants/header/Header';
import SideMenu from './componants/sidemenu/SideMenu';
import GraphicGrid from './componants/graphicgrid/GraphicGrid';
import Nutrition from './componants/nutrition/Nutrition';
import ApiService from './utils/ApiService.jsx';
import './App.css';

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const url = process.env.REACT_APP_API_USER;
        const result = await ApiService.get(url);
        setUserData(result.data.userInfos);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
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
