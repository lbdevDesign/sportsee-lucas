import React from 'react';
import './404.css';

function NotFound() {
  return (
    <div className='notfound-container'>
      <h1>Données manquantes !</h1>
      <p>Il semble que l'API ne soit pas accesible. Veuillez vérifier son état de marche.</p>
    </div>
  );
}

export default NotFound;