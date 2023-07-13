import React from 'react';

import CaloriesSvg from '../../assets/calories.svg'
import ProteinesSvg from '../../assets/proteines.svg'
import GlucidesSvg from '../../assets/glucides.svg'
import LipidesSvg from '../../assets/lipides.svg'

import './nutrition.css'

function Nutrition() {
  return (
    <div className="cadres-container">
      <div className="cadre">
        <div className='iconcalories-block'>
            <img className='icon-calories' src={CaloriesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>1,930kcal</p>
            <p className='label'>Calories</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconproteines-block'>
            <img className='icon-proteines' src={ProteinesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>155g</p>
            <p className='label'>Proteines</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconglucides-block'>
            <img className='icon-glucides' src={GlucidesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>290g</p>
            <p className='label'>Glucides</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconglipides-block'>
            <img className='icon-lipides' src={LipidesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>50g</p>
            <p className='label'>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;