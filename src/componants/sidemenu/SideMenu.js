import React from 'react';
import './sidemenu.css'

import Yoga from '../../assets/yoga.svg'
import Swim from '../../assets/swim.svg'
import Bicycle from '../../assets/bicycle.svg'
import Wheight from '../../assets/wheight.svg'

function SideMenu() {
  return (
    <div className="side-menu">
      <div className='blocks-container'>
        <div className='logo-block'>
            <img src={Yoga} className='yoga-logo' />
        </div>
        <div className='logo-block'>
            <img src={Swim} className='yoga-logo' />
        </div>
        <div className='logo-block'>
            <img src={Bicycle} className='yoga-logo' />
        </div>
        <div className='logo-block'>
            <img src={Wheight} className='yoga-logo' />
        </div>
      </div>
        <p className='copyright'>Copiryght, SportSee 2020</p>
    </div>
  );
}

export default SideMenu;