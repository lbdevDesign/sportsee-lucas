import React from 'react';

import CaloriesSvg from '../../assets/calories.svg'
import ProteinesSvg from '../../assets/proteines.svg'
import GlucidesSvg from '../../assets/glucides.svg'
import LipidesSvg from '../../assets/lipides.svg'

import './nutrition.css'

async function userNutrition() {
  const response = await fetch('http://localhost:3000/user/12');
  const nutrition = await response.json();

  console.log(nutrition); 
  return nutrition;
}

const apiData = await userNutrition();

function Nutrition() {
  return (
    <div className="cadres-container">
      <div className="cadre">
        <div className='iconcalories-block'>
            <img className='icon-calories' src={CaloriesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>{apiData.data.keyData.calorieCount}kcal</p>
            <p className='label'>Calories</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconproteines-block'>
            <img className='icon-proteines' src={ProteinesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>{apiData.data.keyData.proteinCount}g</p>
            <p className='label'>Proteines</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconglucides-block'>
            <img className='icon-glucides' src={GlucidesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>{apiData.data.keyData.carbohydrateCount}g</p>
            <p className='label'>Glucides</p>
        </div>
      </div>
      <div className="cadre">
        <div className='iconglipides-block'>
            <img className='icon-lipides' src={LipidesSvg} alt='Calories' />
        </div>
        <div className='text-content'>
            <p className='quantity'>{apiData.data.keyData.lipidCount}g</p>
            <p className='label'>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;