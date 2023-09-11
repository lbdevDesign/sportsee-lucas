import React, { useEffect, useState } from 'react';
import Header from '../src/componants/header/Header';
import SideMenu from './componants/sidemenu/SideMenu';
import GraphicGrid from './componants/graphicgrid/GraphicGrid';
import Nutrition from './componants/nutrition/Nutrition';
import NotFound from './404'; // Importe le composant 404
import { fetchUser } from './utils/fomatService.jsx';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importe les éléments de React Router

function App() {
  const [userData, setApiData] = useState(null);
  const [error, setError] = useState(null); // État pour stocker les erreurs
  const [apiStatus, setApiStatus] = useState(null); // État pour stocker le statut de l'API

  useEffect(() => {
    async function checkApiStatus() {
      try {
        const response = await fetch('http://localhost:3000/user/12'); // Remplace par l'URL de ton API
        if (response.status === 200) {
          setApiStatus('En marche');
          fetchData(); // Si l'API est en marche, récupère les données utilisateur
        } else {
          setApiStatus('Hors service');
          setError('L\'API ne répond pas correctement. Code de statut : ' + response.status);
          console.error('Error fetching user data: L\'API ne répond pas correctement. Code de statut :', response.status);
        }
      } catch (error) {
        setApiStatus('Erreur');
        setError('Erreur lors de la vérification de l\'API : ' + error.message);
        console.error('Error checking API status:', error);
      }
    }
    checkApiStatus();
  }, []);

  async function fetchData() {
    try {
      setApiData(await fetchUser());
    } catch (error) {
      setError('Erreur lors de la récupération des données utilisateur.');
      console.error('Error fetching user data:', error);
    }
  }

  return (
    <BrowserRouter>
      <>
        <Header />
        <SideMenu />

        <Routes>
          <Route path='/' element={ 
            <main className='dashboard-container'>
              <h1 className='dashboard-title'>Bonjour <span>{userData ? userData.firstName : ''}</span></h1>
              <p className='dashboard-subtitle'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>

              <div className='dashboard-content'>
                {apiStatus !== 'En marche' && error && <Navigate to="/404" />}
                {userData && <GraphicGrid />}
                {userData && <Nutrition />}
              </div>
            </main>
          } />
          <Route path='/404' element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;